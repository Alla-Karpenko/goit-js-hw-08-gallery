import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const imageBox = document.querySelector('.lightbox__image');
const openModalBtn = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
//const slideLeft = document.querySelector('slide-left');
//const slideRright = document.querySelector('slide-right');
let idx = 0;

for (let galleria of gallery)
    galleryRef.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href='${galleria.original}'>
    <img class="gallery__image" src='${galleria.preview}' data-source='${galleria.original}' alt='${galleria.description}' data-index="${idx}"/></a></li>`);
console.log(galleryRef);

 
galleryRef.addEventListener('click', onGalleryClick);
closeModalBtn.addEventListener('click', onGalleryCloseBtn);
// galleryRef.addEventListener('keydown', left);
// galleryRef.addEventListener('keydown', right);


function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageRef = event.target;
    
    const largeImageURL = imageRef.dataset.source;
    const largeImage = document.querySelector(`.gallery__link`);
   
    openModalBtn.classList.add('is-open');

    largeImage.src = largeImageURL; 
    imageBox.src = largeImageURL; 
};

function onGalleryCloseBtn() {
    window.removeEventListener('click', onGalleryClick);
    openModalBtn.classList.remove('is-open');
    largeImage.src = "";
};
///////////////
// function left() {
//     largeImageURL.map(idx => (idx))
//     largeImageURL.src = arr[idx + 1].original
// };

// function right () {
//      img.src = arr[idx - 1].original
// };

// function onGalleryClick {
//     if (openModalBtn('is-open') {
    
//     }
// let idx = 0;
//  galleryRef.addEventListener(`click`, () => imageBox.src = Array[idx + 1].original);

//  galleryRef.addEventListener(`click`, () =>  imageBox.src = Array[idx - 1].original);
//  /////////////  ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ  //////////////





// function handleNextImg() {
//     array.method((item, idx, arr) => {
  
//     });
//   idx =
//     galleryImages.length - 1 === idx ? 0 : idx + 1;
//   const { original, description } = galleryImages[idx];
//    imageBox.src = original;
//    imageBox.alt = description;
// }

// function handlePrevImg() {
//   idx =
//     idx === 0 ? galleryImages.length - 1 : idx - 1;
//   const { original, description } = galleryImages[idx];
//    imageBox.src = original;
//    imageBox.alt = description;
// }