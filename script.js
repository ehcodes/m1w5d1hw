/* tasks/code blocks completing tasks are denoting by a
single line comment with just the task number */

// 1.0
const mainEl = document.querySelector('main')
// 1.1
mainEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--main-bg`);
// 1.2
mainEl.innerHTML = `<h1>SEI Rocks!</h1>`
// 1.3
mainEl.classList.add('flex-ctr')
// 2.0
const topMenuEl = document.querySelector('#top-menu')
// 2.1
topMenuEl.style.height = `100%`
// 2.2
topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--top-menu-bg`)
// 2.3
topMenuEl.classList.add('flex-around')

// 3.0 & 5.0
const menuLinks = [
    /* line below is commented out temporarily 
    to avoid running into a GET error */
    {text: 'about', href: '#'},
    // {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];
//3.1
menuLinks.forEach((el)=>{
    // 3.1.1
    const newAnchor = document.createElement("a");
    // 3.1.2
    newAnchor.setAttribute('href', el.href)
    // 3.1.3
    newAnchor.textContent = el.text
    // 3.1.4
    topMenuEl.appendChild(newAnchor)
})

// 4.0
let subMenuEl = document.querySelector('#sub-menu')
// 4.1
subMenuEl.style.height = `100%`
// 4.2
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--sub-menu-bg`);
// 4.3
subMenuEl.classList.add('flex-around')
// 4.4
subMenuEl.style.position = `absolute`
// 4.5
subMenuEl.style.top = `0`
// 5.1.1
const topMenuLinks = topMenuEl.childNodes
// 5.1.2
let showingSubMenu = false;
// 5.2.1
topMenuEl.addEventListener("click", function (e){
    // 5.2.2
    e.preventDefault()
    // 5.2.3
    if(e.target.localName!==`a`){
        return
    }else{
        // 5.2.4
        console.log(`${e.target.innerHTML}`)
        // 5.3
        if(e.target.classList.contains(`active`)){
            // 5.3.1
            e.target.classList.remove(`active`)
            // 5.3.2
            showingSubMenu = false
            // 5.3.3
            subMenuEl.style.top = `0`
            // 5.3.4
            return
        }
        // 5.4
        topMenuLinks.forEach(el=>{
            el.classList.remove(`active`)
        })
        // 5.5
        e.target.classList.add(`active`)
        // 5.6
        e.target.innerHTML ===`about` ? showingSubMenu = false : showingSubMenu = true
        // 5.7
        if(showingSubMenu == true){
            // 5.8
            menuLinks.filter(object=>{
                object.text == e.target.innerHTML ? buildSubMenu(object.subLinks,subMenuEl) : null
            })
            subMenuEl.style.top = `100%`
        }
    } 
});
// 6.0
subMenuEl.addEventListener('click',(e)=>{
    // 6.0.1
    e.preventDefault()
    // 6.0.2
    if(e.target.localName!==`a`){
        return
    }else{
        // 6.0.3
        console.log(`${e.target.innerHTML}`)
        // 6.1.1
        showingSubMenu = false
        // 6.1.2
        subMenuEl.style.top = `0`
        // 6.2
        e.target.classList.remove(`active`)
        // 6.3
        mainEl.innerHTML = `<h1>${e.target.innerHTML}</h1>`
    }
})

// function created to be called for 5.8 
const buildSubMenu = (arr,menu)=>{
        // 5.8.1
        menu.innerHTML=''
        // 5.8.2
        arr.forEach((el)=>{
        // 5.8.3
        const newAnchor = document.createElement("a");
        // 5.8.4
        newAnchor.setAttribute('href', el.href)
        // 5.8.5
        newAnchor.textContent = el.text
        // 5.8.6
        menu.appendChild(newAnchor)
    })
}