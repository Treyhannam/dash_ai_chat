import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMessage } from '@fortawesome/free-solid-svg-icons'
import '/src/assets/toggle.css';

/**
 * ChatWindow displays a resizable chat interface with scroll tracking and message submission.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.setProps - Dash callback for updating props.
 * @param {boolean} props.isVisible - Indicates if the chat window is visible.
 * @param {Function} props.children - Child component to display when the toggle is active.
 * @returns {JSX.Element} Rendered ChatWindow component.
 */
const Toggle = ( props ) => {
    const {id, children, isVisible, setProps} = props;
    const [localVisible, setLocalVisible] = useState(isVisible || false);

    /**
     * Update the visibility state and call setProps if available.
     */
    const toggleVisibility = () => {
        const newVisible = !localVisible;
        setLocalVisible(newVisible);

        if (setProps) {
            setProps({ isVisible: newVisible });
        }
    };
    
    return (
        <div id={id}>
        <button 
            onClick={toggleVisibility}
            className="toggle-button"
        >
            {isVisible ? <FontAwesomeIcon className='close-toggle-icon' icon={faCircleXmark} /> : <FontAwesomeIcon className='open-toggle-icon' icon={faMessage} />}
        </button>
        {isVisible && 
        <div className="popup">
            {children}
        </div>
        }
        <span className="toggle-icon"></span>
        </div>
    );
};

Toggle.defaultProps = {};

Toggle.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Child component to display when the toggle is active.
     */
    children: PropTypes.node,

    /**
     * Indicates of a toggle is visible (True) or closed (False).
     */
    isVisible: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default Toggle;
