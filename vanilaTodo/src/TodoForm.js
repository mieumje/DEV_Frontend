export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name='todo-input'/>
      <button name='submit-button'>추가</button>
    `;

    const $input = document.querySelector("input[name=todo-input]");

    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      const { value } = $input;

      if (value.length < 1) {
        alert("값을 입력해주세요");
        return;
      }
      onSubmit(value);

      $input.value = "";
    });
  };

  this.render();
}
