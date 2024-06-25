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
    {
        word: "më ",
        image: "images/më.png",
        lolunciation: "më ",
        ipa: "/mə/",
        translation: "ella"
    },
    {
        word: "muk ",
        image: "images/muk.png",
        lolunciation: "muk ",
        ipa: "/muk/",
        translation: "nosotros/as"
    },
    {
        word: "mik ",
        image: "images/mik.png",
        lolunciation: "mik ",
        ipa: "/mik/",
        translation: "vosotros/as"
    },
    {
        word: "mek ",
        image: "images/mek.png",
        lolunciation: "mek ",
        ipa: "/me̞k/",
        translation: "ellos"
    },
    {
        word: "mëk ",
        image: "images/mëk.png",
        lolunciation: "mëk ",
        ipa: "/mək/",
        translation: "ellas"
    },
    {
        word: "mok ",
        image: "images/mok.png",
        lolunciation: "mok ",
        ipa: "/mok/",
        translation: "ellos/ellas (grupo mixto)"
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
