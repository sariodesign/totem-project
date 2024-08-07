const galleryOpener = document.querySelector('#open-gallery');
const gallery = document.querySelector('#gallery');

function openGallery(selector){
  selector.showModal();
}

galleryOpener.addEventListener('click', () => {
  // Open the gallery
  openGallery(gallery);
});

gallery.addEventListener('click', (e) => {
  e.target === gallery ? gallery.close() :
  console.log('Gallery clicked');
});