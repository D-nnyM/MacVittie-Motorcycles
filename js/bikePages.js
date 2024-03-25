const galleryImages = document.querySelectorAll(".image-gallery img");


for (let i = 0; i < galleryImages.length; i++) {

    let mainImage = document.querySelector('.main-image');
    let mainImageSrc = mainImage.getAttribute('src');

    galleryImages[i].addEventListener('click', e => {
        const galleryImageSrc = galleryImages[i].getAttribute('src');
        
        mainImage.src = galleryImageSrc;        
    })



   
    
}

