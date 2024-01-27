
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

const filterSort = () => {
    const filterSelect  = document.getElementById('filter').value;
    const sortSelect  = document.getElementById('sortCollect').value;

    cards.forEach(card => {
        meetFilter = false;
        meetSort = false;

        switch(filterSelect) {
            case 'jackets':
                meetFilter = card.querySelector('#jacket') !== null;
                break;
            case 'hats':
                meetFilter = card.querySelector('#hat') !== null;
                break;
            default:
                meetFilter = true;
        }

        switch(sortSelect) {
            case 'featured':
                meetSort = card.querySelector('.tag.featured') !== null;
                break;
            case 'sale':
                meetSort = card.querySelector('.tag.on-sale') !== null;
                break;
            default:
                meetSort = true;
        }

        if(meetFilter && meetSort) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('filter').addEventListener('change', filterSort);
document.getElementById('sortCollect').addEventListener('change', filterSort);



