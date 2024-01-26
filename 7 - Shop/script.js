
const responsive = () => {
    
    const navBar = document.querySelector('nav');
    const sort = document.getElementById('sort');

    if(navBar.classList.value === ''){
        navBar.classList.add('responsive');
    } else {
        navBar.classList.remove('responsive');
    }


}

