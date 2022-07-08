import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/todos">Todos</Link>
      </button>
      <button>
        <Link to="/posts">Posts</Link>
      </button>
    </nav>
  );
}
