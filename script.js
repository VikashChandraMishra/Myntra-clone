console.log("JS is LIVE!");

const carImg = document.getElementById("carImg");
const slideCarousel = () => {
    if (carImg.src.includes('/img/caro1.jpg'))
        carImg.src = '/img/caro2.webp';
    else
        if (carImg.src.includes('/img/caro2.webp'))
            carImg.src = '/img/caro1.jpg';
}
setInterval(slideCarousel, 2000);

