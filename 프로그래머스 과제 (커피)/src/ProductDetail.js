import SelectedDetails from "./SelectedDetails.js";
import { request } from "./api.js";

export default function ProductDetail({ $target, id }) {
  const $div = document.createElement("div");
  $div.className = "ProductDetailPage";
  $target.appendChild($div);

  this.state = {
    selected: [],
    details: {},
  };

  const fetchProductDetail = async () => {
    const details = await request(`/products/${id}`);
    this.state = {
      ...this.state,
      details,
    };
    this.render();
  };
  fetchProductDetail();

  this.seperate = (num) => {
    const formatNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatNumber;
  };

  this.render = () => {
    if (!Object.keys(this.state.details).length) return;

    const { name, imageUrl, price, productOptions } = this.state.details;

    $div.innerHTML = `
            <h1>${name}</h1>
            <div class="ProductDetail">
                <img src=${imageUrl} alt=${name}/>
                <div class="ProductDetail__info">
                    <h2>${name}</h2>
                    <div class="ProductDetail__price">${this.seperate(
                      price
                    )}원~</div>
                    <select>
                        <option value=''>선택하세요.</option>
                        ${productOptions
                          .map((option) => {
                            return `
                                <option id="${option.id}" value=${option.id} ${
                              option.stock === 0 ? "disabled" : ""
                            }>
                                    ${
                                      option.stock === 0 ? "품절" : ""
                                    } ${name} ${option.name} ${
                              option.price > 0 ? `(+${option.price}원)` : ""
                            }
                                </option>
                            `;
                          })
                          .join()}
                    </select>
                    <div class="ProductDetail__selectedOptions"></div>
                </div>
            </div>
        `;
  };

  this.render();

  $div.addEventListener("change", (e) => {
    const { target } = e;
    if (target.tagName === "SELECT") {
      const selectedId = parseInt(target.value);
      const { details, selected } = this.state;

      const option = details.productOptions.find(
        (option) => option.id === selectedId
      );
      const selectedOption = selected.find(
        (selectedOption) => selectedOption.optionId === selectedId
      );

      if (option && !selectedOption) {
        const nextSelected = [
          ...selected,
          {
            productId: details.id,
            optionId: option.id,
            optionName: option.name,
            optionPrice: option.price,
            quantity: 1,
          },
        ];

        this.state = {
          ...this.state,
          selected: nextSelected,
        };
      }
      new SelectedDetails({
        $target: $div,
        initialState: {
          product: this.state.details,
          selected: this.state.selected,
        },
      });
    }
  });
}
