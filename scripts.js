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

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  const sortValue = document.getElementById("sort-options").value;
  const sortedCards = sortCards(sortValue);
  console.log("selected sorting value:", sortValue);

  for (let i = 0; i < sortedCards.length; i++) {
    const curr = sortedCards[i];
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
document.getElementById("sort-options").addEventListener("change", function () {
  showCards(); // Refresh the cards when the sorting option changes
});

function sortCards(value) {
  var cloneGames = [...games]; // Clone the games array

  switch (value) {
    case "price-asc":
      cloneGames.sort(function (a, b) {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        console.log("Compare Prices:", a.price, b.price);
        return priceA - priceB;
      });
      break;

    case "price-desc":
      cloneGames.sort(function (a, b) {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        console.log("Compare Prices:", a.price, b.price);
        return priceB - priceA;
      });
      break;

    case "release-asc":
      cloneGames.sort(function (a, b) {
        console.log("Compare Date:", a.releaseDate, b.releaseDate);
        return a.releaseDate - b.releaseDate;
      });
      break;

    case "release-desc":
      cloneGames.sort(function (a, b) {
        console.log("Compare Date:", a.releaseDate, b.releaseDate);
        return b.releaseDate - a.releaseDate;
      });
      break;

    case "rating-desc":
      const ratingOrder = {
        "Overwhelmingly Positive": 5,
        "Very Positive": 4,
        "Mostly Positive": 3,
        "Mixed": 2,
        "Mostly Negative": 1,
        "Very Negative": 0,
      }

      cloneGames.sort(function (a, b) {
        const ratingA = ratingOrder[a.ratingSteam[0]];
        const ratingB = ratingOrder[b.ratingSteam[0]];
        console.log("Compare Prices:", ratingA, ratingB);
        return ratingB - ratingA;
      });
      break;

    case "alphabet-asc": {
      cloneGames.sort(function (a, b) {
        console.log("Compare Names:", a.name, b.name);
        return a.name.localeCompare(b.name);
      });
      break;
    }
  
    default:
      break;
  }

  console.log("")
  return cloneGames;
}

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

