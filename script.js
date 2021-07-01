const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navEl = document.getElementById('nav')
const navLinks = document.getElementById('navbar-links')
const logSection = document.querySelector('.log-section')
const productItem = document.querySelector('.product-item')
const productLi = document.querySelector('.product')
const companyItem = document.querySelector('.company-item')
const companyLi = document.querySelector('.company')
const connectItem = document.querySelector('.connect-item')
const connectLi = document.querySelector('.connect')

toggleButton.addEventListener('click', () => {
    navEl.classList.toggle('active')
    navLinks.classList.toggle('active')
    logSection.classList.toggle('active')
})


productItem.addEventListener('mouseenter', ()=> {
    productLi.style.opacity = '1';
})

productItem.addEventListener('mouseleave', ()=> {
    productLi.style.opacity = '0';
})

companyItem.addEventListener('mouseenter', ()=> {
    companyLi.style.opacity = '1';
})

companyItem.addEventListener('mouseleave', ()=> {
    companyLi.style.opacity = '0';
})

connectItem.addEventListener('mouseenter', ()=> {
    connectLi.style.opacity = '1';
})

connectItem.addEventListener('mouseleave', ()=> {
    connectLi.style.opacity = '0';
})

