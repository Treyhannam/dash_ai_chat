import React, {
  useRef, useState, useEffect
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '/src/assets/footer.css';

/**
 * Footer displays a resizable chat interface with scroll tracking and message submission.
 *
 * @component
 * @param {Object} props - Component props.
 * @returns {JSX.Element} Rendered Footer component.
 */
const Footer = ( {id, children, message, setProps} ) => {
    const [inputValue, setInputValue] = useState('');
    const textareaRef = useRef(null);

    const handleInputChange = (e) => {
      const maxHeight = 300; 
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto'; 
        textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px'; 
      }

      setInputValue(e.target.value);
    };
    
    /**
     * Submit the input message and update state via setProps.
     */
    const handleSubmitMessage = () => {
      if (setProps && inputValue.trim() !== '') {
        setProps({ message: '' });
        setProps({ message: inputValue });
        setInputValue('');

        const textarea = textareaRef.current;
        if (textarea) {
          textarea.style.height = 'auto';
        }
      }
    };
    /**
     * Handle enter key for message submission.
     *
     * @param {React.KeyboardEvent<HTMLTextAreaElement>} event
     */
    const handleInputKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmitMessage();
      }
    };
  
    return (
      <div
        id={id}
        className="chat-footer"
      >
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Ask anything"
          className="message-input"
        />
        <div className="footer-bottom-line">        
          {children}
          <button className="send-button" onClick={handleSubmitMessage}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    );
  };
  
Footer.defaultProps = {};

Footer.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Message submitted by the user.
     */
    message: PropTypes.string,

    /**
     * Child component to display in the footer.
     */
    children: PropTypes.node,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default Footer;