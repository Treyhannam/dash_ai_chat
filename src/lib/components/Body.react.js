import React, {
  useEffect, useRef, useState 
} from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faClipboard } from '@fortawesome/free-solid-svg-icons'
import '/src/assets/body.css';

/**
 * Body displays chat messages and autoscrolls to the latest message. This scroll information is kept in local storage.
 *
 * @component
 * @param {Object} props - Component props.
 * @returns {JSX.Element} Rendered ChatWindow component.
 */
const Body = ({ id, messages = [], setProps }) => {
    const messagesEndRef = useRef(null);
    const chatBodyRef = useRef(null);
    const COPY_RESET_DELAY_MS = 1000;
    const isLoading = messages.length > 0 && messages[messages.length - 1].role === 'user';

    // Restore scroll position on mount
    useEffect(() => {
        const scrollPos = localStorage.getItem('chatwindow-scroll');
        if (chatBodyRef.current && scrollPos) {
          chatBodyRef.current.scrollTop = parseInt(scrollPos, 10);
        }
      }, []);

    // Save scroll position on scroll
    useEffect(() => {
    const ref = chatBodyRef.current;
    if (!ref) { 
      return;
    }

    const handleScroll = () => {
        localStorage.setItem('chatwindow-scroll', ref.scrollTop.toString());
    };
    
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to bottom on new message
    useEffect(() => {
        const container = chatBodyRef.current;
        if (!container) {
          return;
        }
        
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);
  
    const Code = ({ children, className, ...rest }) => {
      const [copied, setCopied] = useState(false);
      const match = /language-(\w+)/.exec(className || '');

      useEffect(() => {
        if (!copied) {
           return;
        }
      
        const timer = setTimeout(() => setCopied(false), COPY_RESET_DELAY_MS);
        return () => clearTimeout(timer);
      }, [copied]);

      return (
        <div className="code-block">
          <div className="code-block-header">
            <p className="code-block-title">{match ? match[1] : 'Code'}</p>
            <CopyToClipboard text={String(children)} onCopy={() => setCopied(true)}>
              <button className="copy-button">
                <FontAwesomeIcon className='copy-logo' icon={copied ? faClipboard : faCopy} />
                <p className='copy-text'>{copied ? 'Copied' : 'Copy'}</p>
              </button>
            </CopyToClipboard>
          </div>
          <SyntaxHighlighter
            PreTag="div"
            {...rest}
            children={String(children).replace(/\n$/, '')}
            language={match ? match[1] : null}
            style={obsidian}
            wrapLongLines={true}
            className="code-block-content"
          />
        </div>
      );
    };

    const LoadingDots = () => (
      <div className="loading-dots">
        <span>.</span><span>.</span><span>.</span>
      </div>
    );

    Code.propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string, 
    };

    const JsxMessage = () => (
      <div>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}-message`}>
            <div className="message-text">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{ code: Code }}
                >
                    {message.content}
                </Markdown>
              <div ref={messagesEndRef} />
            </div>
          </div>
        ))}
         {isLoading && (
        <div className="message assistant-message">
          <div className="message-text">
            <LoadingDots />
          </div>
        </div>
      )}
      </div>
    );

    return (
      <div
        id={id}
        className="chat-body"
        ref={chatBodyRef}
      >
        <JsxMessage />
      </div>
    );
  };



Body.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Child component to display in the footer.
     */
    children: PropTypes.node,

    /**
     * Open AI messages to be displayed in the chat window.
     */
    messages: PropTypes.arrayOf(
            PropTypes.shape({
            role: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default Body;