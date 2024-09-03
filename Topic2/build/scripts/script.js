// console.log("hi");

const yearElement = document.querySelector('#year');
// console.log(yearElement);

function getYear() {
    let now = new Date()
    // console.log(now);
    let year = now.getFullYear()
    return year
}

yearElement.innerHTML = `${getYear()}`



const hamburgerMenu = document.querySelector('#hamburger-icon')
// console.log(hamburgerMenu);
const mobileMenuElement = document.querySelector('#mobile-menu')
// console.log(mobileMenuElement);

hamburgerMenu.addEventListener('click', toggleHamburger)

function toggleHamburger() {
    if (mobileMenuElement.classList.contains('hidden')) {
        mobileMenuElement.classList.remove('hidden');
        mobileMenuElement.classList.add('flex', 'animate-open-menu');
    } else {
        mobileMenuElement.classList.remove('flex', 'animate-open-menu');
        mobileMenuElement.classList.add('hidden');
    }
}






// mobileMenuElement.addEventListener('click', toggleHamburger)


// NOTE: Close Mobile Menu (X)
const closeBtn = document.querySelector('#close')
closeBtn.addEventListener('click', closeWindow)
function closeWindow() {
    mobileMenuElement.classList.remove('flex')
    mobileMenuElement.classList.add('hidden')
}



const allMobileLinks = document.querySelectorAll('.moile-links')
// console.log(allMobileLinks);

// NOTE: navigaate to own href
allMobileLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // console.dir(link);
        const href = link.getAttribute('href')
        // console.log(href);
        window.location.href = href
        closeWindow()
    })
})



