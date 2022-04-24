export default function PhotoList({
  $target,
  initialState,
  onScrollEnded
}){
  let isInitiallize = false;
  const $photoList = document.createElement('div');
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitiallize) {
      $photoList.innerHTML = `
        <ul class="PhotoList_photos"></ul>
        <button class="PhotoList_LoadMore" style="width: 100%; height: 20px; font-size=20px;">Load More</button>
      `;
      isInitiallize = true;
    }

    const { photos } = this.state;
    const $photos = $photoList.querySelector('.PhotoList_photos');
    photos.forEach(photo => {
        // photo의 id 기준으로 렌더링이 되어 있는지 체크
        if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
          // 없으면 li 생성하고 $photos에 appendChild
          const $li = document.createElement('li');
          $li.setAttribute('data-id', photo.id);
          $li.style = 'list-style: none;';
          $li.innerHTML =`<img width="100%" src="${photo.imagePath}" />`;

          $photos.appendChild($li);
        }
    });
  };

  $photoList.addEventListener('click', e => {
    if (e.target.className === 'PhotoList_LoadMore' && !this.state.isLoading){
      onScrollEnded();
    }
  });

  this.render();

  window.addEventListener('scroll', () => {
    const { isLoading, totalCounts, photos } = this.state;

    const isScrollEnded = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    if (isScrollEnded && !isLoading && photos.length < totalCounts) {
      onScrollEnded();
    }
  })
}