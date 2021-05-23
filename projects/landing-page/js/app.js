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
const topBtn = document.querySelector('.top-button');
const body = document.body;
let timeout = false;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//find section which closest to the top
function findTopSection () {
  let topSection = null;
  sections.forEach(section => {
    if (window.pageYOffset + 1 >= section.offsetTop) {
      topSection = section;
    }
  })
  return topSection;
}

//active navigation item by section
function activeNavItemBySec(section) {
  navbarList.childNodes.forEach(navItem => {
    if (navItem.dataset.link === section.id) {
      navItem.classList.add('on-hover');
    } else {
      navItem.classList.remove('on-hover');
    }
  })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
  const fragment = document.createDocumentFragment();

  sections.forEach(section => {
    const navItem = document.createElement('li');
    navItem.classList.add('menu__link')
    navItem.textContent = section.dataset.nav;
    navItem.setAttribute("data-link", section.id)
    fragment.appendChild(navItem);
  })

  navbarList.appendChild(fragment);
}

// Hide navigation bar while not scrolling
function onStopScroll() {
  if (timeout) {clearTimeout(timeout)}

  timeout = setTimeout(() => {
    header.classList.add("slip-away");
  }, 1000);
}

// Add class 'active' to section when near top of viewport
function activeTopSection(sections) {
  const topSection = findTopSection();

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

// Scroll to anchor ID using scrollTO event
function scrollToSection(e) {
  const linkId = e.target.dataset.link;
  const section = document.getElementById(linkId);

  section.scrollIntoView({behavior: "smooth"});
}

//Display the scroll-to-top button
function showScrollTop() {
  if (window.scrollY >= window.innerHeight) {
    topBtn.classList.add('to-top');
  } else {
    topBtn.classList.remove('to-top');
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()

// Scroll to section on link click
navbarList.addEventListener('click', scrollToSection);

// Set sections as active
window.addEventListener('scroll', () => {
  header.classList.remove("slip-away");
  onStopScroll();
  activeTopSection(sections);
  showScrollTop();
})

//Scroll to the top of the page
topBtn.addEventListener('click', () => {
  document.body.scrollIntoView({behavior: "smooth"})
})

