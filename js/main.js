const nav = document.querySelector('.nav__items');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtn = document.querySelector('.burger-btn');
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')


const handleNav=() =>{
    nav.classList.toggle('nav__items--active')

    navBtnBars.classList.remove('black-bars-colors') //usuwa ciemny kolor z btn jeśli nawigacja jest włączona

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

const handleObserver =()=>{
    const currentSection = window.scrollY;
    allSections.forEach(section=>{
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection+60){
            navBtnBars.classList.add('black-bars-colors')
        }
        else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection+60){
            navBtnBars.classList.remove('black-bars-colors')
        }


    })
}



const handleCurrentYear = () =>{
    const year = new Date().getFullYear();
    footerYear.innerHTML = year;
}

window.addEventListener('scroll',handleObserver)
handleCurrentYear();

navBtn.addEventListener('click',handleNav);