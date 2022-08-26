import ProductsList from "./ProductsList.js";
import ProductDetail from "./ProductDetail.js";
import { init } from "./router.js";

export default function App({ $target }) {
  this.route = () => {
    $target.innerHTML = "";
    const { pathname } = location;

    if (pathname === "/web/") {
      new ProductsList({
        $target,
        initialState: [],
        onClick: () => {},
      });
    } else if (pathname.indexOf("/products/")) {
      const [, , , id] = pathname.split("/");
      new ProductDetail({
        $target,
        id,
      });
    }
  };

  window.addEventListener("popstate", () => this.route());

  init(() => this.route());
  this.route();
}
