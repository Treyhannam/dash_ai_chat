
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import '/src/assets/header-menu.css';

/**
 * MenuHeader element to display in a chat, adds icon for resizing the window and user options such as resetting the chat
 *
 * @component
 * @returns {JSX.Element} Rendered ChatWindow component.
 */
const HeaderMenu = ( props ) => {
    const {id, headerText, setProps, resetClicked} = props;

    const handleResetClick = () => {
        setProps({ resetClicked: true });
    }

    return (
        <div 
        id={id}
        className="chat-header"
        >
            <FontAwesomeIcon icon={faUpDown} className="resize-icon" />
            <h2>{headerText}</h2>
            <button className="reset-button" onClick={handleResetClick}><FontAwesomeIcon icon={faTrash} className='reset-icon'/></button>
        </div>

    );
};

HeaderMenu.defaultProps = {
resetClicked: false
};

HeaderMenu.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * What text to display in the header.
     */
    headerText: PropTypes.string,

    /**
     * If the reset button was clicked or not
     */
    resetClicked: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default HeaderMenu;