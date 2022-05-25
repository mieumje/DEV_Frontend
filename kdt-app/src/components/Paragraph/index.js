import PropTypes from 'prop-types';

function Paragraph({ children, size = 10 }) {
  return <p style={{ fontSize: size}}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number
}

export default Paragraph;