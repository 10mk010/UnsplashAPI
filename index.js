'use strict';

const inputCont = document.getElementById("inputCont");
const input = document.getElementById("input");
const search = document.getElementById("search");
const count = document.getElementById("count");
const resultCont = document.getElementById("result");
const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your Unsplash API key


async function loadRandomImages(){
    const requestURL = "https://api.unsplash.com/photos/random";
    try {
        const response = await fetch(`${requestURL}?count=10&client_id=${API_KEY}`);
        const photos = await response.json();
        
        photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.urls.small;
            img.alt = photo.alt_description || 'Random Unsplash Image';
            img.className = 'random-image';
            resultCont.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching random images:', error);
    }
}

window.addEventListener('load', loadRandomImages())

async function getImg(e) {
    const requestURL = "https://api.unsplash.com/search/photos";
    e.preventDefault();
    resultCont.innerHTML = ''; 
    
    const searchTerm = input.value;
    const numberOfImages = count.value || 1;
    
    try {
        const response = await fetch(`${requestURL}?query=${searchTerm}&per_page=${numberOfImages}&client_id=${API_KEY}`);
        const data = await response.json();
        
        data.results.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.urls.small;
            img.alt = photo.alt_description || 'Unsplash Image';
            img.className = 'search-result-image';
            resultCont.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}


search.addEventListener("click", getImg);
