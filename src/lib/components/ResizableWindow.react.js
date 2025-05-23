import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ResizableBox } from 'react-resizable';
import '/src/assets/resizable-window.css';

/**
 * ResizableWindow displays a resizable container for chat content.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.id - The ID used to identify this component in Dash callbacks.
 * @param {Function} props.setProps - Dash-assigned callback to report property changes.
 * @returns {JSX.Element} A resizable chat container.
 */
const ResizableWindow = ({ children, setProps }) => {
  const minBoxHeight = 150;
  const minBoxWidth = 150;
  const maxDimensionMultiplier = 0.8;

  const getMaxConstraints = () => [
    window.innerWidth * maxDimensionMultiplier,
    window.innerHeight * maxDimensionMultiplier,
  ];

  const [size, setSize] = useState(() => {
    const stored = localStorage.getItem('ResizableWindow-size');
    return stored ? JSON.parse(stored) : { width: 400, height: 600 };
  });

  const [maxConstraints, setMaxConstraints] = useState([
    window.innerWidth * maxDimensionMultiplier,
    window.innerHeight * maxDimensionMultiplier,
  ]);
  
  useEffect(() => {
    const handleResize = () => {
      const [maxWidth, maxHeight] = getMaxConstraints();
      setMaxConstraints([maxWidth, maxHeight]);

      setSize(prev => {
        const newWidth = Math.min(prev.width, maxWidth);
        const newHeight = Math.min(prev.height, maxHeight);

        // Update localStorage and Dash if size changed
        if (newWidth !== prev.width || newHeight !== prev.height) {
          const newSize = { width: newWidth, height: newHeight };
          localStorage.setItem('ResizableWindow-size', JSON.stringify(newSize));
          if (setProps) {
            setProps(newSize);
          }
          return newSize;
        }

        return prev;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setProps]);

  const handleResizeStop = (e, { size }) => {
    setSize(size);
    localStorage.setItem('ResizableWindow-size', JSON.stringify(size));

    if (setProps) {
      setProps({ width: size.width, height: size.height });
    }
  };
  
  return (
    <ResizableBox
      width={size.width}
      height={size.height}
      axis="both"
      minConstraints={[minBoxHeight, minBoxWidth]}
      maxConstraints={maxConstraints}
      resizeHandles={['nw']}
      onResizeStop={handleResizeStop}
    >
      <div className='window'>
        {children}
      </div>
    </ResizableBox>
  );
};

ResizableWindow.defaultProps = {};

ResizableWindow.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

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

export default ResizableWindow;