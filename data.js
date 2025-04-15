
// This file contains data for an object that will be used to create cards
// Each object will contain a name, descripton, imageURL, genre, ratings, publisher, country, release date, platforms, price
// Info for each property will be added from "STEAM" except for image and ratings
// Images will pulled from Wikipedia
export const games = [
    {
        name: "Black Myth Wukong",
        description: "An action RPG based on the classic Chinese novel Journey to the West. Players control Wukong, a monkey king with various abilities, as they battle mythical creatures and explore a vibrant world.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Black_Myth_Wukong_cover_art.jpg/250px-Black_Myth_Wukong_cover_art.jpg",
        genre: [ "Action", "Action RPG", "Mythology", "Souls-like", "3D"],
        price: "$59.99",
        ratingSteam: ["Overwhelmingly Positive", "800k+ reviews"],
        publisher: "Game Science",
        releaseDate: "2024",
        platforms: ["PC", "PS5"],
    },

    {
        name: "Grand Theft Auto V",
        description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png",
        genre: ["Action", "Crime", "Mature", "Multiplayer", "Open World"],
        price: "$29.99",
        ratingSteam: ["Very Positive", "1M+ reviews"],
        publisher: "Rockstar Games",
        releaseDate: "2013",
        platforms: ["PC", "PS3", "PS4", "PS5", "Xbox 360", "Xbox One", "Xbox Series X/S"],
    },

    {
        name: "Red Dead Redemption 2",
        description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/250px-Red_Dead_Redemption_II.jpg",
        genre: ["Adventure", "Open World", "Story Rich", "Western"],
        price: "$59.99",
        ratingSteam: ["Very Positive", "650k+"],
        publisher: "Rockstar Games",
        releaseDate: "2018",
        platforms: ["PC", "PS4", "Xbox One", "Stadia"],
    }
];
