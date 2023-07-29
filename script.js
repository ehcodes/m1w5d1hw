// querySelectors
const mainEl = document.querySelector('main')
const topMenuEl = document.querySelector('#top-menu')

// style selectors
const mainBG = getComputedStyle(document.documentElement)
.getPropertyValue(`--main-bg`);
const topMenuBG = getComputedStyle(document.documentElement)
.getPropertyValue(`--top-menu-bg`);

// style application
mainEl.style.backgroundColor = mainBG
mainEl.classList.add('flex-ctr')
topMenuEl.style.height = `100%`
topMenuEl.style.backgroundColor = topMenuBG
topMenuEl.classList.add('flex-around')

// HTML application
mainEl.innerHTML = `<h1>SEI Rocks!</h1>`


// elements
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];

// functions
function createAnchors(){
    menuLinks.forEach((el)=>{
        const anchor = document.createElement("a");
        anchor.setAttribute('href', el.href)
        anchor.setAttribute('title', el.text)
        anchor.textContent = el.text
        topMenuEl.appendChild(anchor)
    })
}
createAnchors()