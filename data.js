
// This file contains data for an object that will be used to create cards
// Each object will contain a name, descripton, imageURL, genre, ratings, publisher, country, release date, platforms, price
// Info for each property will be added from "STEAM" except for image and ratings
// Images will pulled from Wikipedia
export const games = [
    {
        name: "Black Myth Wukong",
        description: "An action RPG based on the classic Chinese novel Journey to the West. Players control Wukong, a monkey king with various abilities, as they battle mythical creatures and explore a vibrant world.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Black_Myth_Wukong_cover_art.jpg/250px-Black_Myth_Wukong_cover_art.jpg",
        genre: ["Action", "Action RPG", "Mythology", "Souls-like", "3D"],
        price: "$59.99",
        ratingSteam: ["Overwhelmingly Positive", "800k+ reviews"],
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
        releaseDate: "2018",
        platforms: ["PC", "PS4", "Xbox One", "Stadia"],
    },

    {
        name: "The Witcher 3: Wild Hunt",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        genre: ["Open World", "RPG", "Story Rich", "Atmospheric"],
        price: "$39.99",
        ratingSteam: ["Overwhelmingly Positive", "750k+"],
        releaseDate: "2015",
        platforms: ["PC", "PS5", "PS4", "Nintendo Switch", "Xbox One", "Xbox Series X/S"]
    },

    {
        name: "Cyber Punk 2077",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        genre: ["Cyberpunk", "Open World", "Nudity", "RPG", "Sci-fi"],
        price: "$59.99",
        ratingSteam: ["Very Positive", "700k+"],
        releaseDate: "2020",
        platforms: ["PC", "PS5", "PS4", "Xbox One", "Xbox Series X/S", "Nintendo Switch"]
    },

    {
        name: "Sekiro: Shadows Die Twice",
        description: "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
        genre: ["Souls-like", "Difficult", "Action", "Singleplayer", "Ninja"],
        price: "$59.99",
        ratingSteam: ["Overwhelmingly Positive", "200k+"],
        releaseDate: "2019",
        platforms: ["PC", "PS4", "Xbox One", "Stadia"]
    },

    {
        name: "Terraria",
        description: "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg",
        genre: ["Open World", "Survival", "Sandbox", "2D"],
        price: "$9.99",
        ratingSteam: ["Overwhelmingly Positive", "1M+"],
        releaseDate: "2011",
        platforms: ["PC", "PS3", "PS4", "Mobile", "Xbox 360", "Xbox One", "3DS", "Stadia"]
    },

    {
        name: "Baldur's Gate 3",
        description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
        genre: ["RPG", "Character Customization", "Choices Matter", "Story Rich"],
        price: "$59.99",
        ratingSteam: ["Overwhelmingly Positive", "650k+"],
        releaseDate: "2023",
        platforms: ["PC", "PS5", "Xbox Series X/S"]
    },

];
