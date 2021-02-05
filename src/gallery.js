import galleryImages from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const imageBox = document.querySelector('.lightbox__image');
const openModalBtn = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
let idx = 0;
// const itemRef = document.createElement('li');
// itemRef.classList.add("gallery__item");
// const linkRef = document.createElement('a');
// linkRef.classList.add("gallery__link");


galleryRef.addEventListener('click', onGalleryClick);
closeModalBtn.addEventListener('click', onGalleryCloseBtn);
 
function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageRef = event.target;
    const largeImageURL = imageRef.dataset.source;
   
    openModalBtn.classList.add('is-open');

    setLargeImageSrc(largeImageURL); 

   window.addEventListener('keydown', closeEscape)
   
};
 
function setLargeImageSrc(url) {
    imageBox.src = url;
}

function onGalleryCloseBtn() {
    window.removeEventListener('click', onGalleryClick);
    openModalBtn.classList.remove('is-open');
    imageBox.src = "";
};

galleryImages.forEach((el, idx) => {
    galleryRef.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href='${el.original}'>
    <img class="gallery__image" src='${el.preview}' data-source='${el.original}' alt='${el.description}' data-index="${idx}"/></a></li>`);
})
console.log(galleryRef);


//  /////////////  ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ  //////////////
 
//Закрытие модального окна по нажатию клавиши ESC.//

const closeEscape = e => {

    if (e.code === 'Escape') {
       openModalBtn.classList.remove('is-open');
        window.removeEventListener('keydown', closeEscape);
    }
};






// const arr = galleryImages.map((el, idx) => {
//      `<li class="gallery__item">
//     <a class="gallery__link" href='${el.original}'>
//     <img class="gallery__image" src='${el.preview}' data-source='${el.original}' alt='${el.description}' data-index="${idx}"/></a></li>`;
// })
// galleryRef.insertAdjacentHTML('beforeend', ...arr)


// const markup = galleryImages.reduce((acc, {original, preview, description}, idx) => acc + `<li class="gallery__item"><a class="gallery__link" href='${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" data-index="${idx}"/></a></li>`, '')
// galleryRef.insertAdjacentHTML('beforeend', markup)
// console.log(galleryRef);





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