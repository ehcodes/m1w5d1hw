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
    
```html
  <body>
    <header>
      <nav id="top-menu"></nav>
    </header>
    <main></main>

    <script src="script.js"></script>
  </body>
  ```

  > Note: The markup is complete - **DO NOT** modify it in any way - do not add any classes or ids.
    
2.  Add the following CSS within **style.css**:
    
```css
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
  ```
  
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

```js
    // Menu data structure
    var menuLinks = [
      {text: 'about', href: '/about'},
      {text: 'catalog', href: '/catalog'},
      {text: 'orders', href: '/orders'},
      {text: 'account', href: '/account'},
    ];
```

#### [](#task-31)Task 3.1
Iterate over the entire `menuLinks` array and for each "link" object:

1. Create an `<a>` element.
2. On the new element, add an `href` attribute with its value set to the `href` property of the "link" object.
3. Set the new element's content to the value of the `text` property of the "link" object.
4. Append the new element to the `topMenuEl` element.

#### [](#congrats)Congrats!
![](https://i.imgur.com/pWu6yHO.png)

[](#dom-menu-lab---part-2)DOM "Menu" Lab - Part 2
===============
In the _DOM Events_ lesson we saw how to run a function, i.e., an event listener, when an event, such as a click, was dispatched.
This lab continues where Part 1 left off and provides practice defining event listeners used to manipulate the DOM in response to user interaction. It also provides additional practice styling DOM elements dynamically using JavaScript.

### [](#this-lab-is-a-deliverable)This lab is a deliverable.
[](#setup)Setup
---------------
1.  Continue to use the directory created in Part 1. This is what you should have thus far:

![](https://i.imgur.com/pWu6yHO.png)

2.  Insert an additional `<nav>` element within the `<header>` element in **index.
```html
  <header>
    <nav id="top-menu"></nav>
    <!-- Add the <nav> element below -->
    <nav id="sub-menu"></nav>
  </header>
```
  > Note: Other than the above changes, **DO NOT** modify **index.html** in any way.
    
3.  Add the following CSS to the bottom of **style.css**:
```css
  header, #top-menu {
    position: relative;
  }
  
  #top-menu {
    z-index: 20;
  }
  
  #sub-menu {
    width: 100%;
    z-index: 10;
    transition: top 0.5s ease-out;
  }
  
  #sub-menu a:hover {
    background-color: var(--top-menu-bg);
  }
  
  nav a.active {
    background-color: var(--sub-menu-bg);
    color: var(--main-bg);
  }
    
  > Note: Other than the above changes, **DO NOT** modify **style.css** in any way.
```
[](#tasks)Tasks
---------------
> Tasks 1.0 thru 3.1 were completed in Part 1.

#### [](#task-40)Task 4.0
Select and cache the `<nav id="sub-menu">` element in a variable named `subMenuEl`.

#### [](#task-41)Task 4.1
Set the height `subMenuEl` element to be `100%`.

#### [](#task-42)Task 4.2
Set the background color of `subMenuEl` to the value stored in the `--sub-menu-bg` CSS custom property.

#### [](#task-43)Task 4.3
Add the class of `flex-around` to the `subMenuEl` element.

#### [](#progress-check)Progress Check:
![](https://i.imgur.com/qkhBnoY.png)

#### [](#task-44)Task 4.4
Set the CSS `position` property of `subMenuEl` to the value of `absolute`.

#### [](#task-45)Task 4.5
Set the CSS `top` property of `subMenuEl` to the value of `0`.

#### [](#task-50)Task 5.0
Update the `menuLinks` array in **script.js** to this:

```js
var menuLinks = [
  {text: 'about', href: '/about'},
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

```
#### [](#task-51)Task 5.1
1. Select and cache the all of the `<a>` elements inside of `topMenuEl` in a variable named `topMenuLinks`.
2. Declare a global `showingSubMenu` variable and initialize it to `false`;

#### [](#task-52)Task 5.2
1. Attach a delegated 'click' event listener to `topMenuEl`.
2. The first line of code of the event listener function should call the event object's `preventDefault()` method.
3. The second line of code function should immediately return if the element clicked was not an `<a>` element.
4. `console.log` the content of the `<a>` to verify the handler is working.

#### [](#progress-check-1)Progress Check
Ensure that clicking **ABOUT**, **CATALOG**, etc. logs out **about**, **catalog**, etc. when a link is clicked.
Clicking anywhere other than on a link should do nothing.

#### [](#task-53)Task 5.3
Next in the event listener, if the clicked `<a>` link has a class of `active`:
1.  Remove the `active` class from the clicked `<a>` element.
2.  Set the `showingSubMenu` to `false`.
3.  Set the CSS `top` property of `subMenuEl` to `0`.
4.  `return` to exit the handler.

#### [](#task-54)Task 5.4
Next, the event listener should **remove** a class name of `active` from each `<a>` element in `topMenuLinks` - whether the `active` class exists or not.

**Hint:** Removing a non-existent class from an element does not cause an error, so just remove it!

#### [](#task-55)Task 5.5
Next, the event listener should **add** a class name of `active` to the `<a>` element that was clicked.

#### [](#task-56)Task 5.6
Set `showingSubMenu` to `true` if the clicked `<a>` element's "link" object within `menuLinks` has a `subLinks` property (all do, except for the "link" object for **ABOUT**), otherwise, set it to `false`.

**Hint:** Saving the "link" object in a variable will come in handy for passing its `subLinks` array in Task 5.7

#### [](#progress-check-2)Progress Check
Clicking any of the links should make that link "active" and clear the others:

![](https://i.imgur.com/k1yDkaq.png)

Clicking an "active" link should clear that link.

#### [](#task-57)Task 5.7
Next in the event listener...

**If** `showingSubMenu` is `true`:

1.  Call a `buildSubMenu` function passing to it the `subLinks` array for the clicked `<a>` element.
2.  Set the CSS `top` property of `subMenuEl` to `100%`.

**Otherwise if** (`showingSubMenu` is `false`):

3.  Set the CSS `top` property of `subMenuEl` to `0`.

#### [](#task-58)Task 5.8
Code the `buildSubMenu` function so that it:

1.  Clears the contents of `subMenuEl`.
2.  Iterates over the `subLinks` array passed as an argument; and for each "link" object:
3.  Create an `<a>` element.
4.   On the new element, add an `href` attribute with its value set to the `href` property of the "link" object.
5.   Set the new element's content to the value of the `text` property of the "link" object.
6.   Append the new element to the `subMenuEl` element.

#### [](#progress-check-3)Progress Check
Take the menu for a test drive!

![](https://i.imgur.com/5p0uTk6.png)

#### [](#task-60)Task 6.0
Attach a delegated 'click' event listener to `subMenuEl`.
1. The first line of code of the event listener function should call the event object's `preventDefault()` method.
2. The second line of code function should immediately return if the element clicked was not an `<a>` element.
3. `console.log` the content of the `<a>` to verify the handler is working.

#### [](#task-61)Task 6.1
Next, the event listener should:

1.  Set `showingSubMenu` to `false`.
2.  Set the CSS `top` property of `subMenuEl` to `0`.

#### [](#task-62)Task 6.2
Remove the class name of `active` from each `<a>` element in `topMenuLinks` - whether the `active` class exists or not.

#### [](#task-63)Task 6.3
Update the contents of `mainEl` to the contents of the `<a>` element, within an `<h1>`, clicked within `subMenuEl`.

#### [](#task-64)Task 6.4
If the **ABOUT** link is clicked, an `<h1>about</h1>` should be displayed.

#### [](#congrats)Congrats!
![](https://i.imgur.com/6SFmHl0.png)