import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const imageBox = document.querySelector('.lightbox__image');
const openModalBtn = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
let idx = 0;


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
    window.addEventListener('keydown', pressingRight)
    window.addEventListener('keydown', pressingLeft);
};
 
function setLargeImageSrc(url) {
    imageBox.src = url;
}

function onGalleryCloseBtn() {
    openModalBtn.classList.remove('is-open');
    imageBox.src = "";
    window.removeEventListener('click', onGalleryClick);
    window.removeEventListener('keydown', pressingRight);
    window.removeEventListener('keydown', pressingLeft);
};

gallery.forEach((el, idx) => {
    galleryRef.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href='${el.original}'>
    <img class="gallery__image" src='${el.preview}' data-source='${el.original}' alt='${el.description}' data-index="${idx}"/></a></li>`);
})
console.log(galleryRef);


//  /////////////  ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ  //////////////
 
//Закрытие модального окна по нажатию клавиши ESC//

const closeEscape = e => {

    if (e.key === 'Escape') {
       openModalBtn.classList.remove('is-open');
        window.removeEventListener('keydown', closeEscape);
    }
};

///Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо" /////////

const pressingRight = e => {
  
    if (e.key === "ArrowRight") {
        idx = gallery.length - 1 === idx ? 0 : idx + 1;
        const { original, description } = gallery[idx];
        imageBox.src = original;
        imageBox.alt = description;
       
    }
};

const pressingLeft = e => {
    if (e.key === "ArrowLeft") {
        idx = idx === 0 ? gallery.length - 1 : idx - 1;
        const { original, description } = gallery[idx];
        imageBox.src = original;
        imageBox.alt = description;
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









