import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setDrakMdoe from "../actions/theme";

export default function Topbar() {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (theme) {
      dispatch(setDrakMdoe(false));
    } else {
      dispatch(setDrakMdoe(true));
    }
  };
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
      <button onClick={onClickHandler}>dark</button>
    </nav>
  );
}
