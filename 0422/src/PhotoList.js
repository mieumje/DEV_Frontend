export default function PhotoList({
  $target,
  initialState,
  onScrollEnded
}){
  const $photoList = document.createElement('div');
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { photoList } = this.state;
    $photoList.innerHTML = `
      ${this.state.map(photo => {
        return `
        <ul>
          <li style="list-style:none;">
            <img width="100%" src="${photo.imagePath}" />
          </li>
        </ul>
        `
      }).join('')}
      <button class="PhotoList_LoadMore" style="width: 100%; height: 20px; font-size=20px;">Load More</button>
    `
  };

  $photoList.addEventListener('click', e => {
    if (e.target.className === 'PhotoList_LoadMore'){
      onScrollEnded();
    }
  });

  this.render();
}