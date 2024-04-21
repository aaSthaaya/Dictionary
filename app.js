// console.log("Here are we!");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.querySelector('.result');
const sound = document.querySelector('#sound');
const btn = document.querySelector('#search-btn');


btn.addEventListener('click', () => {
    let inpWord = document.querySelector('#inp-word').value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>

                <button onclick = "playSound()">
                <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;

            // https://api.dictionaryapi.dev/media/pronunciations/en/cat-uk.mp3

            sound.setAttribute('src', `${data[0].phonetics[1].audio}`);
            console.log(sound,data,data[0].phonetics[1].audio);

        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

function playSound() {
    sound.play();
}




// document.addEventListener('DOMContentLoaded', () => {
//     const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//     const result = document.querySelector('.result');
//     const sound = document.querySelector('#sound');
//     const btn = document.querySelector('#search-btn');

//     btn.addEventListener('click', () => {
//         let inpWord = document.querySelector('#inp-word').value;
//         fetch(`${url}${inpWord}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 result.innerHTML = `
//                 <div class="word">
//                     <h3>${inpWord}</h3>
//                     <button onclick="playSound()">
//                         <i class="fa-solid fa-volume-high"></i>
//                     </button>
//                 </div>
//                 <div class="details">
//                     <p>${data[0].meanings[0].partOfSpeech}</p>
//                     <p>${data[0].phonetic}</p>
//                 </div>
//                 <p class="word-meaning">
//                     ${data[0].meanings[0].definitions[0].definition}
//                 </p>
//                 <p class="word-example">
//                     ${data[0].meanings[0].definitions[0].example || ""}
//                 </p>`;
                
//                 if (data[0].phonetics && data[0].phonetics.length > 0) {
//                     sound.src = `https:${data[0].phonetics[0].audio}`;
//                 } else {
//                     sound.removeAttribute('src');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
//             });
//     });

//     window.playSound = function() {
//         if (sound.src) {
//             sound.play();
//         } else {
//             console.error('No valid audio source found.');
//         }
//     };
// });
