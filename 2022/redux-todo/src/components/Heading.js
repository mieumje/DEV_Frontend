export default function Heading({ level, children, color }) {
  const Tag = `h${level}`;
  const TagStyles = {
    color: color,
  };

  return <Tag style={TagStyles}>{children}</Tag>;
}
