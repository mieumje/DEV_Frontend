export default function SuggestKeyword({
  $target,
  initialState,
  onKeywordSelect,
}){
  const $suggest = document.createElement('div');
  $suggest.className = 'Keywords';
  $target.appendChild($suggest);

  this.state = initialState;

  this.setState = nextState => {
    this.state= {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    const { keywords , cursor } = this.state;
    $suggest.innerHTML = `
      <ul>
        ${keywords.map((keyword, index) => `
          <li class="${cursor === index ? "active" : ""}">${keyword}</li>
        `).join('')}
      </ul>
    `;

    $suggest.style.display = keywords.length > 0 ? 'block' : 'none';
  };

  $suggest.addEventListener('click', e => {
    const $li = e.target.closest('li');
    if ($li) {
      onKeywordSelect($li.textContent);
    }
  });

  window.addEventListener('keydown', (e) => {
    if ($suggest.style.display !== 'none') {
      const { key } = e;
      // arrow down을 입력 했을 때
      // arrow up을 입력 했을 때
      // enter를 입력 했을 때
      if (key === 'ArrowDown') {
        const nextCursor = this.state.cursor + 1;
        this.setState({
          ...this.state,
          cursor: nextCursor > this.state.keywords.length - 1 ? 0 : nextCursor,
        });
      } else if (key === 'ArrowUp') {
        const nextCursor = this.state.cursor - 1;
        this.setState({
          ...this.state,
          cursor: nextCursor < 0 ? this.state.keywords.length - 1 : nextCursor,
        });
      } else if (key === 'Enter') {
        onKeywordSelect(this.state.keywords[this.state.cursor]);
      }
    }
  })

  this.render();
}