const lightBox = document.querySelector('.lightbox');
const images = document.querySelectorAll('.img-container img');


images.forEach(image => {
    image.addEventListener('click',e=>{
        lightBox.classList.add('active');
        const img= document.createElement('img');
     img.src=image.src;
     while (lightBox.firstChild){
         lightBox.removeChild(lightbox.firstChild);
     }
     lightbox.appendChild(img); 
    });

});
lightbox.addEventListener('click',e=>{
    if(e.target !==e.currentTarget)return
    lightbox.classList.remove('active');
});