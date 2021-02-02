
import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const imageBox = document.querySelector('.lightbox__image');
const openModalBtn = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlay = document.querySelector('.ightbox__overlay');


for (let galleria of gallery)
    galleryRef.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href='${galleria.original}'>
    <img class="gallery__image" src='${galleria.preview}' data-source='${galleria.original}' alt='${galleria.description}'/></a></li>`);
console.log(galleryRef);

 
galleryRef.addEventListener('click', onGalleryClick);

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

closeModalBtn.addEventListener('click', () => {
    openModalBtn.classList.remove('is-open');
});



 /////////////  ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ  //////////////