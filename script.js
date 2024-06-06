const dictionary = [
    {
        word: "mu",
        image: "images/mu.png",
        pronunciation: "mu",
        ipa: "mu",
        translation: "yo"
    },
    {
        word: "mi",
        image: "images/mi.png",
        pronunciation: "mi",
        ipa: "mi",
        translation: "vos"
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
