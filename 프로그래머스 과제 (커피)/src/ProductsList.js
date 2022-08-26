import { request } from "./api.js";
import Heading from "./Heading.js";
import { routeChange } from "./router.js";

export default function ProductsList({ $target, initialState, onClick }) {
  const $div = document.createElement("div");
  $div.className = "ProductListPage";
  $target.appendChild($div);

  new Heading({
    $target: $div,
    text: "상품목록",
  });

  const $ul = document.createElement("ul");
  $div.appendChild($ul);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
  };

  const fetchProductsList = async () => {
    const lists = await request("/products");

    this.setState(lists);
    this.render();
  };

  fetchProductsList();

  this.seperate = (num) => {
    const formatNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatNumber;
  };

  this.render = () => {
    if (!this.state) return;

    $ul.innerHTML = `
            ${this.state
              .map((product) => {
                const { id, imageUrl, name, price } = product;
                return `<li class="Product" data-id=${id}>
                    <img src= ${imageUrl}/>
                    <div class="Product__info">
                    <div>${name}</div>
                    <div>${this.seperate(price)}원 ~</div>
                    </div>
                </li>`;
              })
              .join("")}
        `;
  };

  $ul.addEventListener("click", (e) => {
    const { target } = e;
    const $li = target.closest("li");
    if (!$li) return;

    const { id } = $li.dataset;

    if (id) {
      routeChange(`/web/products/${id}`);
    }
  });

  this.render();
}
