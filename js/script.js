const overlay = document.getElementById("overlay");
const menuLinks = overlay.querySelectorAll("a");

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');  /* Hamburger animation */
  menu.classList.toggle('active'); /* class 'active' signifies mobile menu is open */
  document.body.classList.toggle('menu-open');

  const isActive = menu.classList.contains("active");

  overlay.style.height = isActive ? "100%" : "0%"; /* Open or closes mobile overlay*/
  document.getElementById("hamburger-text").innerHTML = isActive ? "Close" : "Menu";
}


// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    const menuBtn = document.getElementById("hamburger-icon");
    overlay.style.height = "0%";
    document.getElementById("hamburger-text").innerHTML =  "Menu";
    menuBtn.classList.toggle("active");
    menuBtn.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    
  });
});


/* Drop down FAQ js */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active-faq");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
} 



/* JS for Top button */

// Get the button:
let mybutton = document.getElementById("TopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


/* js to make current page bold */

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#about-us-nav a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-page");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-page");
    }
  });
});


/* js to adjust auto-scroll for sticky-headers */

function updateScrollPadding() {
  const stickyHeaders = document.querySelectorAll('.sticky-header');
  let totalHeight = 0;

  stickyHeaders.forEach(header => {
    totalHeight += header.offsetHeight;
  });

  document.documentElement.style.setProperty(
    '--header-offset',
    totalHeight + 'px'
  );
}

// Run on load + resize
window.addEventListener('load', updateScrollPadding);
window.addEventListener('resize', updateScrollPadding);
