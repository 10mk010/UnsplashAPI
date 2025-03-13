'use strict';

const inputCont = document.getElementById("inputCont");
const input = document.getElementById("input");
const search = document.getElementById("search");
const result = document.getElementById("result");
const requestURL = "https://api.unsplash.com/photos/random/?client_id=KwKGWgWIHGdayOQ9tMSVNzmSw0lwjvXCFKhisnRMXmI";

search.addEventListener("click", async (e) => {
    e.preventDefault();
    let randomImage = await fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
        return data.urls.small
    });
    const img = document.createElement("img");
    img.src = randomImage;
    result.append(img);
});


