import PropTypes from 'prop-types';

const Image = ({ src, block, width, height, alt, mode, ...props }) => {
  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode // cover, fill, contain
  };
  
  return (
    <img src={src} alt={alt} style={{...props.style, ...imageStyle}}/>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string
};
export default Image;