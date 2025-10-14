const events = [
  {
    "img": "img/praying-over-bible.avif",
    "alt": "Someone praying.",
    "name": "Prayer Meeting",
    "date": "Tuesday 2pm",
    "description": "We get together at the church each week for our prayer meetings on a Tuesday afternoon for an hour, 2:00pm - 3:00pm. Here we pray for each other, our church, and the world. Everyone welcome."
  },
  {
    "img": "img/coffee-stock-img.jpg",
    "alt": "Cup of coffee.",
    "name": "Coffee Morning",
    "date": "Wednesday 10am",
    "description": "Our coffee Morning runs every Wednesday from 10am to 12 noon at the church hall. All are welcome for coffee, chat and games. A little time is given to a short Bible story with discussion and a prayer at the end."
  },
  {
    "img": "img/board-games-stock-img.jpg",
    "alt": "Board games.",
    "name": "Games Night",
    "date": "Wednesday 7:30-9:30pm",
    "description": "Games night at the church hall on Wednesday 7:30 pm to 9:30pm."
  },
  {
    "img": "img/stock-reading-bible-together.jpg",
    "alt": "People reading the Bible together.",
    "name": "Growth Groups",
    "date": "Thursday 10:15am & 7:45pm",
    "description": "We get together each week for our Growth Group meetings. We start informally with tea and biscuits, and follow this with a Bible study and prayer. One group meets at 10am on Thursday in the church hall. Another group meets at 7:45pm in a member's home."
  },
  {
    "img": "img/friday_club_img.avif",
    "alt": "Children at Friday Club.",
    "name": "Friday Club",
    "date": "Friday 6:30pm",
    "description": "This is held every Friday evening (term-time) from 6:30pm for one hour in the church's back hall for Primary School aged children."
  }
]

const template = document.getElementById("activity-template");
const container = document.getElementById("activities-container");

events.forEach(event => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("img").src = event.img;
  clone.querySelector("img").alt = event.alt;
  clone.querySelector("h3").textContent = event.name;
  clone.querySelector("h4").textContent = event.date;
  clone.querySelector("p").textContent = event.description;
  container.appendChild(clone);
});





// Leadership section templating

const leaders = [
  {
    "img": "img/michael.avif",
    "alt": "Image of pastor Michael and wife Suzanne.",
    "name": "Michael & Suzanne",
    "role": "Pastor",
    "bio": "My name is Michael Lawrence, and I’m married to Suzanne. I was born in Burnley, Lancashire. I’ve lived in	Great Blakenham since January 2014. We have 4 children: Natalie, Tim, Aimee and Benjamin. I was brought up in a Christian home with two brothers and two sisters. I knew all about Jesus from going to church and children’s clubs. At the age of 7 I asked Jesus to be my Saviour. I have been involved with WEC Camps since the age of 18, which are Christian Camps for 9-17 year olds with an emphasis on World Mission. These have been some of the best holidays I have had, making lots of friends and eventually serving with WEC International, in the Youth Office, full time for 10 years before moving to Suffolk.",
  },
  {
    "img": "img/luke.avif",
    "alt": "Image of elder Luke and wife Anna.",
    "name": "Luke & Anna",
    "role": "Elder",
    "bio": "Born and bred in Suffolk, we met at Mickfield Evangelical Church and got married in 2009. We were part of the church rejuvenation team that joined gbbc in 2012. Our daughter was 9 months old and she was the only child in the church at the time. It's wonderful to see how God has blessed the church with lots more children since then. We are passionate about sharing the good news of Jesus which we have had opportunity to do through our children's club every Friday evening. We also have a son, Eddie, a labrador called Ron and a cocker spaniel called Gertie!", 
  },
]

const leader_template = document.getElementById("leader-template");
const leader_container = document.getElementById("leaders-container");

leaders.forEach(leader => {
  const clone = leader_template.content.cloneNode(true);
  clone.querySelector("img").src = leader.img;
  clone.querySelector("img").alt = leader.alt;
  clone.querySelector("h3").textContent = leader.name;
  clone.querySelector("h4").textContent = leader.role;
  clone.querySelector("p").textContent = leader.bio;
  leader_container.appendChild(clone);

});





// Partnerships section templating

const partners = [
  {
    "img": "img/mec-church.avif",
    "alt": "Logo of Mickfield Evangelical Church.",
    "name": "Mickfield Evangelical Church",
    "abreviation": "(MEC)",
    "bio": 'We are currently partnered with Mickfield Evangelical Church, which is where our Sunday evening services are held. Please visit their website to find out more about them: <a href="https://mickfieldec.co.uk/" target="_blank">https://mickfieldec.co.uk/</a>',
  },
  {
    "img": "img/eagbc-logo.avif",
    "alt": "Logo of the Association of Grace Baptist Churches.",
    "name": "The Association Of Grace Baptist Churches (East Anglia)",
    "abreviation": "(EAGBC)",
    "bio": 'Great Blakenham Baptist Church is affiliated with the Association of Grace Baptist Churches (East Anglia) who seek to promote fellowship between churches for encouragement, evangelism and the glory of God. More information is available on their website: <a href="https://www.grace-ea.uk/" target="_blank">https://www.grace-ea.uk/</a>', 
  },
  {
    "img": "img/fiec-logo.avif",
    "alt": "Logo of the FIEC.",
    "name": "Fellowship Of Independent Evangelical Churches",
    "abreviation": "(FIEC)",
    "bio": 'Great Blakenham Baptist Church also has links with the Fellowship of Independent Evangelical Churches (FIEC) who unite independent churches through the gospel to work together to reach Britain: <a href="https://fiec.org.uk/" target="_blank">https://fiec.org.uk/</a>',
  },
]

const partner_template = document.getElementById("partner-template");
const partner_container = document.getElementById("partners-container");

partners.forEach(partner => {
  const clone = partner_template.content.cloneNode(true);
  clone.querySelector("img").src = partner.img;
  clone.querySelector("img").alt = partner.alt;
  clone.querySelector("h3").textContent = partner.name;
  clone.querySelector("h4").textContent = partner.abreviation;
  clone.querySelector("p").innerHTML = partner.bio;
  partner_container.appendChild(clone);

});





// Missionaries section templating

const missionaries = [
  {
    "img": "img/albania.avif",
    "alt": "Logo of Albanian Evangelical Mission.",
    "name": "Albanian Evangelical Mission",
    "link": "https://aemission.org/",
  },
  {
    "img": "img/asialink.avif",
    "alt": "Logo of Asia Link.",
    "name": "Asia Link",
    "link": "https://www.asialink.org/",
  },
  {
    "img": "img/zambesi-new-logo.png",
    "alt": "Logo of Zambesi Mission",
    "name": "Zambesi Mission",
    "link": "https://zambesimission.org/",
  },
  {
    "img": "img/gbm-updated-logo.jpg",
    "alt": "Logo of Grace Baptist Mission.",
    "name": "Grace Baptist Mission",
    "link": "https://www.gbm.org.uk/",
  },
  {
    "img": "img/FIND-new-logo.png",
    "alt": "Logo of Families In Need.",
    "name": "Families In Need",
    "link": "https://www.findipswich.org.uk/",
  },
  {
    "img": "img/slavic.avif",
    "alt": "Logo of Slavic Gospel Association.",
    "name": "Slavic Gospel Association",
    "link": "https://sga.org.uk/",
  },
 
]

const missionary_template = document.getElementById("missionary-template");
const missionary_container = document.getElementById("missionaries-container");

missionaries.forEach(missionary => {
  const clone = missionary_template.content.cloneNode(true);
  clone.querySelector("img").src = missionary.img;
  clone.querySelector("img").alt = missionary.alt;
  clone.querySelector("h3").textContent = missionary.name;
  clone.querySelector("a").href = missionary.link;
  missionary_container.appendChild(clone);
});




// mobile menu / burger menu

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


// need to adjust scrolling because of sticky header -> and header height can differ depending on desktop/mobile.

const header = document.querySelector('header');
const observer = new ResizeObserver(entries => {
  document.documentElement.style.setProperty('--header-height', `${entries[0].contentRect.height}px`);
});
observer.observe(header);



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
