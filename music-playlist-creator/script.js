import data from './data/data.js';

// Element definitions
const modal = document.getElementById('playlist-modal');
const modalContent = document.querySelector('.modal-content');

let playlists = data.playlists;
let playlistCardsContainer = document.getElementsByClassName("playlist-cards")[0];
let playlistSongsContainer = document.getElementsByClassName("playlist-songs")[0];
let modalContentContainer = document.getElementsByClassName("modal-content");
let modalDisplayContainer = document.getElementsByClassName("modal-display")[0];
console.log(playlistCardsContainer);

// Opening the modal on click
const openModal = (clicked) => {
    modalContentContainer.innerHTML = '';
    //console.log(clicked);
    //const = clickedCard(playlistCardsContainer)
    populateModal(clickedCard(playlistCardsContainer));
    modal.style.display = "flex";
};

const clickedCard = (playlistCardsContainer) => {
    // playlistCards is expected to be an HTML collection
    console.log(playlistCardsContainer.length);
    // we want to find the clicked playlist
    let foundPlaylist;
    for (let i = 0; i < playlistCardsContainer.length; i++) {
        if (playlistCard[i].event.target.id.includes("playlist-card")) {
                    foundPlaylist = document.getElementById(card.id);
                    console.log(foundPlaylist);
        };
    }
    return foundPlaylist;
    // what are we returning here?
}

// PLAN
// create function to make html elements - done
// write the code to add event listener to the playlist cards
document.querySelectorAll(".playlist-cards").forEach((playlistCard) => {
    playlistCard.addEventListener('click', (event) => {
        openModal(clickedCard());
    });
});
// in the callback of the event listener, look at event.target.id to match playlist-card
// in the callback function:
// - find playlist id
// - with the id, grab the playlist object that we want
// - pass the playlist object into populatemodal

// Function to populate the modal with intro information
function populateModal(clickedCard) {
    console.log(clickedCard);
    // Clear existing song list items
    modalContentContainer.innerHTML = '';
    // Create HTML elements for displaying playlist information
    let createdPlaylistDisplay = document.createElement("div");
    createdPlaylistDisplay.innerHTML = createModalHeader(clickedCard);

    createdPlaylistDisplay.classList.add("playlist-display");
    // console.log(createdPlaylistHtml);
    modalDisplayContainer.appendChild(createdPlaylistDisplay);
    //populatePlaylist(playlist);
}

// Populating the Page with Playlists
function populatePage(playlists) {
    // console.log(playlists);
    playlists.forEach((playlist, idx) => {
        let createdPlaylistHtml = document.createElement("div");
        createdPlaylistHtml.innerHTML = createPlaylistCardHtml(playlist);

        createdPlaylistHtml.classList.add("playlist-card");

        // Set a unique ID using idx and a prefix
        createdPlaylistHtml.id = `playlist-card-${idx}`;
        createdPlaylistHtml.onclick
        // console.log(createdPlaylistHtml);
        playlistCardsContainer.appendChild(createdPlaylistHtml);
    });
};


// Populating the Playlist with Songs
function populatePlaylist(relevantData) {
    // console.log(data);
    let playlistSongs = relevantData.songs;
    // console.log(songs);
    // console.log(playlistSongs);

    if (!playlistSongsContainer) {
        console.error('Playlist songs container element is invalid or undefined');
        return;
    }

    playlistSongs.forEach((song) => {
        let createdSongHtml = document.createElement("div");
        createdSongHtml.innerHTML = createSongCardHtml(song);
        createdSongHtml.classList.add("song-card");

        // console.log(createdSongHtml);
        playlistSongsContainer.appendChild(createdSongHtml);
    });
}

function createPlaylistCardHtml(playlist) {
    return `
            <img class="playlist-images" src=${playlist.playlist_art} alt="Our Sixth Song">
            <div class="playlist-info orange-text">
                <p class="playlist-title orange-text">Album: ${playlist.playlist_name}</p>
                <p class="playlist-artist orange-text">Created By: ${playlist.playlist_creator}</p>
                <span><p class="like-button">&hearts;</p></span>
                <span><p class="like-count orange-text">${playlist.likeCount}</p></span>
            </div>
            `;
};

// grab the parent of all the playlist cards
// create an event listener for each playlist card

function createSongCardHtml(song) {
    return `
            <img class="song-images" src=${song.cover_art} alt="Our Sixth Song">
            <div class="song-info orange-text">
                <p class="song-title orange-text">Title: ${song.title}</p>
                <p class="song-artist orange-text">Created By: ${song.artist}</p>
                <p class="song-album orange-text">Album: ${song.album}</p>
                <span><p class="like-button">&hearts;</p></span>
                <span><p class="song-duration orange-text">songTime: ${song.duration}</p></span>
            </div>
            `;
}

function createModalHeader(playlist) {
    // Add a close button to the modal
    console.log(playlist);
    const closeButton = document.createElement('button');
    closeButton.textContent = '&times;';
    closeButton.addEventListener('click', () => {
        modalContent.innerHTML = '';
        modal.style.display = "none";
    });
    modalContent.appendChild(closeButton);

    return `
            <img class="modal-playlist-image" src=${playlist.playlist_art} alt="Our Sixth Song">
            <div class="modal-playlist-info orange-text">
                <p class="modal-playlist-title orange-text">Album: ${playlist.playlist_name}</p>
                <p class="modal-playlist-artist orange-text">Created By: ${playlist.playlist_creator}</p>
                <span><i class="fa-regular fa-heart"></i></span>
                <span><p class="like-count orange-text">${playlist.likeCount}</p></span>
            </div>
            `;
}


// Function calls
populatePage(playlists);
openModal(playlistCardsContainer);
