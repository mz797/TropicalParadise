const nav = document.querySelector('.nav__items');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtn = document.querySelector('.burger-btn');

const handleNav=() =>{
    nav.classList.toggle('nav__items--active')
    allNavItems.forEach(item =>{
        item.addEventListener('click',()=>{
            nav.classList.remove('nav__items--active')
        })
    })
    handleNavItemsAnimation();
}
const handleNavItemsAnimation = () =>{
    let delayTime = 0;
    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.'+delayTime+'s';
        delayTime++;
    })
}
navBtn.addEventListener('click',handleNav);