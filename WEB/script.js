const questions = [
    {
        question: "Quel est l'organe principal affecté par le cancer du sein ?",
        réponses: ["Le sein", "Le poumon", "Le foie"],
        réponse_correcte: 0
    },
    {
        question: "Quel est le mois de sensibilisation au cancer du sein ?",
        réponses: ["Mai", "Octobre", "Décembre"],
        réponse_correcte: 1
    },
    {
        question: "Quel pourcentage de cancers du sein sont diagnostiqués à un stade précoce ?",
        réponses: ["10%", "50%", "70%"],
        réponse_correcte: 2
    }
    // Ajoutez ici d'autres questions avec le même format
];

let questionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const scoreText = document.getElementById("score");

function afficherQuestion() {
    if (questionIndex < questions.length) {
        const question = questions[questionIndex];
        questionText.textContent = question.question;
        answersDiv.innerHTML = "";
        question.réponses.forEach((réponse, index) => {
            const answerButton = document.createElement("button");
            answerButton.textContent = réponse;
            answerButton.addEventListener("click", () => vérifierRéponse(index));
            answersDiv.appendChild(answerButton);
        });
    } else {
        questionText.textContent = "Jeu terminé !";
        answersDiv.innerHTML = "";
        nextButton.style.display = "none";
    }
}

function vérifierRéponse(index) {
    if (index === questions[questionIndex].réponse_correcte) {
        score++;
    }
    questionIndex++;
    afficherQuestion();
    if (questionIndex === questions.length) {
        scoreText.textContent = `Score final : ${score}/${questions.length}`;
    }
}

nextButton.addEventListener("click", afficherQuestion);

afficherQuestion();
