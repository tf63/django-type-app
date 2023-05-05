const sentenceElement = document.getElementById("sentence");
const correctElement = document.getElementById("correct");
const incorrectElement = document.getElementById("incorrect");

let sentence = "";
let correct = 0;
let incorrect = 0;

function setSentence() {
    axios.get("https://baconipsum.com/api/?type=all-meat&sentences=1")
        .then(response => {
            sentence = response.data[0];
            sentenceElement.innerText = sentence;
        })
        .catch(error => {
            console.log(error);
        });
}

function checkInput(event) {
    const key = event.key;
    const input = sentence.substring(0, 1);
    if (key === input) {
        sentence = sentence.substring(1);
        sentenceElement.innerText = sentence;
        correct++;
        correctElement.innerText = correct;
        if (sentence === "") {
            setSentence();
        }
    } else {
        incorrect++;
        incorrectElement.innerText = incorrect;
    }
}

setSentence();
window.addEventListener("keydown", checkInput);
