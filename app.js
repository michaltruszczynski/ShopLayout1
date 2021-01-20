document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.getElementById('menuItems');
    menuItems.style.maxHeight = '0px';


    const menuToggleButton = document.getElementById('menuIcon');
    console.log(menuToggleButton)
    menuToggleButton.addEventListener('click', function () {
        if (menuItems.style.maxHeight == '0px') {
            menuItems.style.maxHeight = '200px'
        } else {
            menuItems.style.maxHeight = '0px'
        }
    });

    const productImg = document.getElementById('productImg');
    const smallImgs = document.getElementsByClassName('small-img');

    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].addEventListener('click', () => {
            productImg.src = smallImgs[i].src;
            console.log('test')
        })
    }
})