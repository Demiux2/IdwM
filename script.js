const dictionary = [
    {
        word: "hello",
        image: "images/hello.png",
        pronunciation: "huh-loh",
        ipa: "həˈloʊ",
        translation: "hola"
    },
    {
        word: "world",
        image: "images/world.png",
        pronunciation: "wurld",
        ipa: "wɜrld",
        translation: "mundo"
    },
    // Agrega más palabras aquí
];

function searchWord() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';

    const filteredWords = dictionary.filter(entry => entry.word.toLowerCase().includes(searchValue));

    filteredWords.forEach(entry => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('word');

        wordDiv.innerHTML = `
            <a href="word.html?word=${entry.word}">
                <h2>${entry.word}</h2>
            </a>
        `;

        wordContainer.appendChild(wordDiv);
    });
}
