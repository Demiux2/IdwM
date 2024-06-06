const dictionary = [
    {
        word: "mu",
        image: "images/mu.png",
        lolunciation: "mu",
        ipa: "/mu/",
        translation: "yo"
    },
    {
        word: "mi",
        image: "images/mi.png",
        lolunciation: "mi",
        ipa: "/mi/",
        translation: "vos"
    },
{
        word: "me",
        image: "images/me.png",
        lolunciation: "me",
        ipa: "/me̞/",
        translation: "él"
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
