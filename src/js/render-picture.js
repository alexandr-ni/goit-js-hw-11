export function renderPicture(array) {
  if (array === undefined) {
    return (array = '');
  }
  return array
    .map(picture => {
      const img = `
<div class="photo-card">
<a href="${picture.largeImageURL}" title="${picture.tags}">
  <img src="${picture.webformatURL}" alt="${picture.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      Likes <br /> ${picture.likes}
    </p>
    <p class="info-item">
      Views <br /> ${picture.views}
    </p>
    <p class="info-item">
      Comments <br /> ${picture.comments}
    </p>
    <p class="info-item">
      Downloads <br /> ${picture.downloads}
    </p>
  </div>
</div>`;
      return img;
    })
    .join('');
}
