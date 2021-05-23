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
const sections = document.querySelectorAll('section');
const navbarList = document.querySelector('#navbar__list');
const header = document.querySelector('.page__header');

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
const fragment = document.createDocumentFragment();

sections.forEach(section => {
  const navItem = document.createElement('li');

  navItem.classList.add('menu__link')
  navItem.textContent = section.dataset.nav;
  navItem.setAttribute("data-link", section.id)

  fragment.appendChild(navItem);
})

navbarList.appendChild(fragment);

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


//scroll
navbarList.addEventListener('click', (e) => {
  const linkId = e.target.dataset.link;
  const section = document.getElementById(linkId);

  section.scrollIntoView({behavior: "smooth"});
  // setActiveSection(linkId);
})

//set active state
// function setActiveSection(id) {
//   sections.forEach(section => {
//     if (section.id === id) {
//       section.classList.add('your-active-class');
//     } else {
//       section.classList.remove('your-active-class');
//     }
//   })
// }

//Hide navigation bar while not scrolling
let timeout = false;
window.addEventListener('scroll', () => {
  header.classList.remove("slip-away");
  onStopScroll(header);
  activeTopSection(sections);
})

//
function onStopScroll(element) {
  if (timeout) {clearTimeout(timeout)}

  timeout = setTimeout(() => {
    header.classList.add("slip-away");
  }, 1000);
}

//find section which closest to the top
function findTopSection(sections) {
  const viewWidth = window.innerWidth;
  const viewHeight = window.innerHeight;
  let max = viewHeight;
  let topSection = null;

  sections.forEach(section => {
    const {top, right, bottom, left} = section.getBoundingClientRect();
    if (top >=0 && left >= 0 && bottom <= viewHeight && right <= viewWidth) {
      if (top < max) {
        max = top;
        topSection = section;
      }
    }
  })
  return topSection;
}

//active section which closest to the top
function activeTopSection(sections) {
  const topSection = findTopSection(sections);

  if (topSection) {
    sections.forEach(section => {
      if (section.id === topSection.id) {
        section.classList.add('your-active-class');
        activeNavItemBySec(section);
      } else {
        section.classList.remove('your-active-class');
      }
    })
  }
}

//active navigation itme by section
function activeNavItemBySec(section) {
  navbarList.childNodes.forEach(navItem => {
    if (navItem.dataset.link === section.id) {
      navItem.classList.add('on-hover');
    } else {
      navItem.classList.remove('on-hover');
    }
  })
}

