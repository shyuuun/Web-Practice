
// to our responsive navbar
const responsive = () => {
    const navBar = document.querySelector('nav');
    if(navBar.classList.value === ''){
        navBar.classList.add('responsive');
    } else {
        navBar.classList.remove('responsive');
    }
}

// for our sorting items 
const cards = document.querySelectorAll('.card');
const sortItem = value => {
    switch(value) {
        case 'featured':
            console.log('Featured selected');
            cards.forEach(card => {
                if(!card.querySelector('.tag.featured')){
                    card.style.display = 'none';
                } else { 
                    card.style.display = 'flex'
                }
            });
            break;
        case 'sale':
            console.log('Sale selected');
            cards.forEach(card => {
                if(!card.querySelector('.tag.on-sale')){
                    card.style.display = 'none';
                } else { 
                    card.style.display = 'flex'
                }
            });
            break;
        default: {
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        }
    }
}

// for our product classification
const filterItem = value => {
    switch(value){
        case 'jackets': 
            cards.forEach(card => {
                if(card.querySelector('#jacket')){
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            })
            break;
        case 'hats':
            cards.forEach(card => {
                if(card.querySelector('#hat')){
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            })
            break;
    }
}






