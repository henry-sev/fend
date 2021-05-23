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
const header = document.querySelector('.page__header')

//add navigation items
const fragment = document.createDocumentFragment();
sections.forEach(section => {
  const navItem = document.createElement('li');

  navItem.classList.add('menu__link')
  navItem.textContent = section.dataset.nav;
  navItem.setAttribute("data-link", section.id)

  fragment.appendChild(navItem);
})

navbarList.appendChild(fragment);

//scroll
navbarList.addEventListener('click', (e) => {
  const linkId = e.target.dataset.link;
  const section = document.getElementById(linkId);

  section.scrollIntoView({behavior: "smooth"});
  setActiveSection(linkId);
})

//set active state
function setActiveSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  })
}

//Hide navigation bar while not scrolling
let timeout = false;
window.addEventListener('scroll', () => {
  header.classList.remove("slip-away");
  if (timeout) {clearTimeout(timeout)}
  timeout = setTimeout(() => {
    console.log('hello');
    header.classList.add("slip-away");
  }, 1000);
})

//determins whether an element is in viewport
function isInviewPort(element) {
  const viewWidth = window.innerWidth;
  const viewHeight = window.innerHeight;
  const {top, right, bottom, left} = element.getBoundingClientRect();

  if (top >=0 && left >= 0 && bottom <= viewHeight && right <= viewWidth) {
    return true;
  }
  return false;
}

