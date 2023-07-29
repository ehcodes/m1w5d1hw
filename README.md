[](#dom-menu-lab---part-1)DOM "Menu" Lab - Part 1
===============
[](#intro)Intro
---------------
In the _Intro to the DOM_ we selected, manipulated and created DOM elements - this lab provides practice doing the same.

This is the first of a two-part lab that builds a menu bar with a slide-down submenu.

> Note: Several of the tasks in this lab would be better done upfront in the markup or CSS instead of using JS, however the goal of this lab is to provide practice modifying the DOM using JS. In your projects, if the HTML or CSS is known in advance and/or static (unchanging), code it in HTML and CSS!

### [](#this-hw-is-a-deliverable)This hw, is a deliverable.
[](#setup)Setup
---------------
1.  Update the `<body>` element in the **index.html** to this:
    
  <body>
    <header>
      <nav id="top-menu"></nav>
    </header>
    <main></main>
  
    <script src="script.js"></script>
  </body>
  
  > Note: The markup is complete - **DO NOT** modify it in any way - do not add any classes or ids.
    
2.  Add the following CSS within **style.css**:
    
  * {
    box-sizing: border-box;
  }
  
  /* CSS Custom Properties */
  :root {
    --main-bg: #4a4e4d;
    --top-menu-bg: #0e9aa7;
    --sub-menu-bg: #3da4ab;
  }
  
  body {
    font-family: Tahoma, Geneva, sans-serif;
    height: 100vh;
    margin: 0;
    display: grid;
    grid-template-rows: 3rem auto;
    color: white;
  }
  
  .flex-ctr {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .flex-around {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  nav a {
    line-height: 3rem;
    padding: 0 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
  }
  
  #top-menu a:hover {
    background-color: var(--sub-menu-bg);
  }
  
  > Note: The CSS is complete - **DO NOT** modify it in any way.
  
  Take five minutes to familiarize yourself with [CSS Custom Properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - they are an amazing new addition to CSS. If you're familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar, but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!
    
[](#tasks)Tasks
---------------
#### [](#task-10)Task 1.0
Select and cache the `<main>` element in a variable named `mainEl`.

#### [](#task-11)Task 1.1
Set the background color of `mainEl` to the value stored in the `--main-bg` CSS custom property.

**Hint:** Assign a string that uses the CSS `var()` function like this:  
`'var(--main-bg)'`

#### [](#task-12)Task 1.2
Set the content of `mainEl` to `<h1>SEI Rocks!</h1>`.

#### [](#task-13)Task 1.3
Add a class of `flex-ctr` to `mainEl`.

**Hint:** [Element.classList API](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

#### [](#progress-check)Progress Check:
![](https://i.imgur.com/6y10M6X.png)

#### [](#task-20)Task 2.0
Select and cache the `<nav id="top-menu">` element in a variable named `topMenuEl`.

#### [](#task-21)Task 2.1
Set the height `topMenuEl` element to be `100%`.

#### [](#task-22)Task 2.2
Set the background color of `topMenuEl` to the value stored in the `--top-menu-bg` CSS custom property.

#### [](#task-23)Task 2.3
Add a class of `flex-around` to `topMenuEl`.

#### [](#progress-check-1)Progress Check:
![](https://i.imgur.com/tzYjw8n.png)

#### [](#task-30)Task 3.0
Copy the following data structure to the top of **script.js**:

    // Menu data structure
    var menuLinks = [
      {text: 'about', href: '/about'},
      {text: 'catalog', href: '/catalog'},
      {text: 'orders', href: '/orders'},
      {text: 'account', href: '/account'},
    ];

#### [](#task-31)Task 3.1
Iterate over the entire `menuLinks` array and for each "link" object:

*   Create an `<a>` element.
*   On the new element, add an `href` attribute with its value set to the `href` property of the "link" object.
*   Set the new element's content to the value of the `text` property of the "link" object.
*   Append the new element to the `topMenuEl` element.

#### [](#congrats)Congrats!
![](https://i.imgur.com/pWu6yHO.png)
