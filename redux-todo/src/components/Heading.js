export default function Heading({ level, children, ...props }) {
  const Tag = `h${level}`;

  return <Tag>{children}</Tag>;
}
