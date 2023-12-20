console.log('Script loaded!');

/**
 * window.onscroll does not work because neither window or document.body
 * are overflowing vertically
 * 
 * to listen scroll event of that element "snap-container" we can use
 * 
 * event.currentTarger.scrollTop;
 */

const snapContainer = document.querySelector('.snap-container');

/* 
    Page 1 = 0
    Page 2 = 667
    Page 3 = 1334
    Page 4 = 2001
    Page 5 = 2668
*/

const changeCircle = (e) => {
    let scrollValue = e.currentTarget.scrollTop;

    console.log(scrollValue);
    if(scrollValue >= 0 && scrollValue <= 666){
        document.querySelector(".active").classList.remove("active");
        document.getElementById("circle-1").classList.add("active");
    } else if (scrollValue >= 667 && scrollValue <= 1333) {
        document.querySelector(".active").classList.remove("active");
        document.getElementById("circle-2").classList.add("active");
    } else if (scrollValue >= 1334 && scrollValue <= 2000) {
        document.querySelector(".active").classList.remove("active");
        document.getElementById("circle-3").classList.add("active");
    } else if (scrollValue >= 2001 && scrollValue <= 2667) {
        document.querySelector(".active").classList.remove("active");
        document.getElementById("circle-4").classList.add("active");
    } else if (scrollValue >= 2668) {
        document.querySelector(".active").classList.remove("active");
        document.getElementById("circle-5").classList.add("active");
    }


}

snapContainer.addEventListener('scroll', changeCircle);


