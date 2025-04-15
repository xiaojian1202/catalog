/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

import { games } from "./data.js";

// This is an array of strings (TV show titles)
/*let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
  "The Office",
];*/
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < games.length; i++) {
    const curr = games[i];
    /*let name = games[i].name;
    let description = games[i].description;
    let genre = games[i].genre;
    let steam = games[i].ratings[0];
    let imdb = games[i].ratings[1];
    let metacritic = games[i].ratings[2];
    let publisher = games[i].publisher;
    let country = games[i].country;
    let releaseDate = games[i].releaseDate;
    let platforms = games[i].platforms;
    let price = games[i].price;
    let imgURL = games[i].imageURL;*/
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    /*let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }*/
      
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, curr); // Edit the contents of the card
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, game) {
  card.style.display = "block";

  //Updates the name of the card
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = game.name;

  //Updates image of the card
  const cardImage = card.querySelector("img");
  cardImage.src = game.imageURL;
  cardImage.alt = game.name + " Game Cover";

  //Update genre of the card
  const cardGenre = card.querySelector(".card-genres");
  for (let i=0; i<game.genre.length; i++){
    const genreName = document.createElement("span");
    genreName.classList.add("genre-name");
    genreName.textContent = game.genre[i];
    cardGenre.appendChild(genreName);
  }

  //Update description of the card
  const cardDescription = card.querySelector(".card-description");
  if (cardDescription) {
    cardDescription.textContent = game.description;
  }

  //Update price of the card
  const cardPrice = card.querySelector(".price");
  if (cardPrice) {
    cardPrice.textContent = game.price;
  }

  //Update ratings of the card
  const cardRatings = card.querySelector(".card-ratings");
  const reviewText = document.createElement("span");
  reviewText.classList.add("review-text");
  reviewText.textContent =  game.ratingSteam[0];
  cardRatings.appendChild(reviewText);

  const reviewCount = document.createElement("span");
  reviewCount.classList.add("review-count");
  reviewCount.textContent = game.ratingSteam[1];
  cardRatings.appendChild(reviewCount);

  //Update publisher of the card
  const cardPublisher = card.querySelector(".publisher");
  if (cardPublisher) {
    cardPublisher.textContent = "Publisher: " + game.publisher;
  }

  //Update country of the card
  const cardDate = card.querySelector(".release-date");
  if (cardDate) {
    cardDate.textContent = "Release: " + game.releaseDate;
  }

  //Update platforms of the card
  const cardPlatforms = card.querySelector(".platforms");
  for (let i=0; i<game.platforms.length; i++){
    const platform = document.createElement("span");
    platform.classList.add("platform");
    platform.textContent = game.platforms[i] + " ";
    cardPlatforms.appendChild(platform);
  }

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", game.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  games.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
