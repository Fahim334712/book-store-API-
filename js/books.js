
const searchBooks = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);

    fetch(url)
        .then(ras => ras.json())
        .then(data => displaySearchResult(data));




}
searchBooks();
const displaySearchResult = data => {
    const totalResult = document.getElementById('total-result');
    totalResult.innerText = `${data.numFound} results `;
    totalResult.style.display = 'block';
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';
    data.docs.forEach(book => {
        const image = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        // const tittle = `https://covers.openlibrary.org/b/id/${book.numFound}-M.jpg`;
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="fw-bold" >Author : ${book.author_name}</p>
                    <p class="fw-bold" >Published : ${book.publish_date}</p>
    
                    <p class="card-text">This is a longer card with supporting text below as a   natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}