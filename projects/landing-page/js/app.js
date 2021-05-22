/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const sections = document.querySelectorAll('section');

const navbarList = document.querySelector('#navbar__list');

const fragment = document.createDocumentFragment();
sections.forEach(section => {
  const navItem = document.createElement('li');

  navItem.classList.add('menu__link')
  navItem.textContent = section.dataset.nav;
  navItem.setAttribute("data-link", section.id)

  fragment.appendChild(navItem);
})

navbarList.appendChild(fragment);


navbarList.addEventListener('click', (e) => {
  const linkId = e.target.dataset.link;
  const section = document.getElementById(linkId);

  section.scrollIntoView({behavior: "smooth"});
})