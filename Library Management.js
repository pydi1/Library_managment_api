let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchResultsEl = document.getElementById("searchResults");
let url;
let searchInputVal = "";
let resultsEl = [];

function createAppendBook(item) {
    console.log(item);
    spinnerEl.classList.add("d-none");


    let {

        author,
        imageLink,
        title
    } = item;
    //  title = formData.title;
    // author = formData.author;
    //  imageLink = formData.imageLink;
    console.log(title);
    console.log(author);
    console.log(imageLink);
    searchResultsEl.classList.add("p-4");
    let heading = document.createElement("h1");
    heading.textContent = "Popular Books";

    heading.style.color = "black";
    searchResultsEl.appendChild(heading);
    let divEl = document.createElement("div");
    divEl.classList.add("p-3");
    let image = document.createElement("img");
    image.src = imageLink;
    divEl.appendChild(image);

    let para = document.createElement("p");
    para.textContent = author;
    divEl.appendChild(para);

    searchResultsEl.appendChild(divEl);


}


function displaySearchResults(resultsEl) {
    searchResultsEl.textContent = "";
    console.log(resultsEl);
    for (let item of resultsEl) {
        createAppendBook(item);

    }

}







searchInputEl.addEventListener("keydown", function(event) {

    if (event.target.value !== "" && event.key === "Enter") {

        url = "https://apis.ccbp.in/book-store?title=" + event.target.value;
        console.log(url);
        console.log(event.target.value);

        let options = {
            method: "GET",
        };
        spinnerEl.classList.remove("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.remove("d-none");
                resultsEl = jsonData.search_results;
                //console.log(resultEl);
                displaySearchResults(resultsEl);
            });
    }
});