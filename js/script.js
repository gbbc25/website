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
const container = document.getElementById("whats-on-section-container");

events.forEach(event => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("img").src = event.img;
  clone.querySelector("img").alt = event.alt;
  clone.querySelector("h3").textContent = event.name;
  clone.querySelector("h4").textContent = event.date;
  clone.querySelector("p").textContent = event.description;
  container.appendChild(clone);
});