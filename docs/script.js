const questions = [
    {
        section: "Section 1 : Questions générales",
        question: "Quel est le mois de sensibilisation au cancer du sein ?",
        answers: [
            { text: "A) Octobre", correct: true, explanation: "En octobre, le cancer du sein est mis en lumière à travers le monde pour sensibiliser à son importance." },
            { text: "B) Novembre", correct: false },
            { text: "C) Décembre", correct: false },
        ],
    },
    {
        section: "Section 1 : Questions générales",
        question: "Qui peut développer un cancer du sein ?",
        answers: [
            { text: "A) Les femmes uniquement", correct: false },
            { text: "B) Les hommes uniquement", correct: false },
            { text: "C) Les femmes et les hommes", correct: true, explanation: "Le cancer du sein peut affecter les femmes et les hommes, bien que ce soit moins fréquent chez les hommes." },
        ],
    },
    {
        section: "Section 1 : Questions générales",
        question: "À quel âge les femmes devraient-elles commencer à effectuer des mammographies de dépistage régulières ?",
        answers: [
            { text: "A) 30 ans", correct: false },
            { text: "B) 40 ans", correct: true, explanation: "Les recommandations générales suggèrent de commencer les mammographies régulières à partir de l'âge de 40 ans." },
            { text: "C) 50 ans", correct: false },
        ],
    },
    {
        section: "Section 2 : Prévention et Dépistage",
        question: "Quels sont les facteurs de risque connus du cancer du sein ?",
        answers: [
            { text: "A) Manger des bonbons", correct: false },
            { text: "B) Le tabagisme", correct: false },
            { text: "C) L'âge, les antécédents familiaux et le sexe", correct: true, explanation: "Les principaux facteurs de risque du cancer du sein incluent l'âge, les antécédents familiaux et le sexe de la personne." },
        ],
    },
    {
        section: "Section 2 : Prévention et Dépistage",
        question: "Quel est le principal moyen de dépistage précoce du cancer du sein ?",
        answers: [
            { text: "A) Échographie", correct: false },
            { text: "B) Biopsie", correct: false },
            { text: "C) Mammographie", correct: true, explanation: "La mammographie est le principal moyen de dépistage précoce du cancer du sein, permettant de détecter les anomalies dans le tissu mammaire." },
        ],
    },
    {
        section: "Section 2 : Prévention et Dépistage",
        question: "Que signifie l'acronyme 'AUTOCHEK' en rapport avec le cancer du sein ?",
        answers: [
            { text: "A) Un groupe de soutien pour les patients atteints de cancer du sein", correct: false },
            { text: "B) Un programme de dépistage du cancer du sein", correct: true, explanation: "AUTOCHEK est un programme de dépistage du cancer du sein visant à promouvoir le dépistage précoce." },
            { text: "C) Une organisation caritative pour la recherche sur le cancer", correct: false },
        ],
    },
    {
        section: "Section 3 : Symptômes et Conscientisation",
        question: "Quel symptôme peut être un signe de cancer du sein ?",
        answers: [
            { text: "A) Douleur abdominale", correct: false },
            { text: "B) Changement de la taille, de la forme ou de la texture du sein", correct: true, explanation: "Un changement de la taille, de la forme ou de la texture du sein peut être un signe précoce de cancer du sein." },
            { text: "C) Toux persistante", correct: false },
        ],
    },
    {
        section: "Section 3 : Symptômes et Conscientisation",
        question: "Quelle est la couleur traditionnelle associée à la sensibilisation au cancer du sein ?",
        answers: [
            { text: "A) Bleu", correct: false },
            { text: "B) Vert", correct: false },
            { text: "C) Rose", correct: true, explanation: "La couleur rose est traditionnellement associée à la sensibilisation au cancer du sein." },
        ],
    },
    {
        section: "Section 3 : Symptômes et Conscientisation",
        question: "Pourquoi est-il important de promouvoir la sensibilisation au cancer du sein ?",
        answers: [
            { text: "A) Pour collecter des dons", correct: false },
            { text: "B) Pour encourager la prévention et le dépistage précoce", correct: true, explanation: "La sensibilisation au cancer du sein vise à encourager la prévention et le dépistage précoce, ce qui peut sauver des vies." },
            { text: "C) Pour vendre des produits de beauté", correct: false },
        ],
    },
];

const quizzContainer = document.getElementById("quizz-container");
const showAnswersButton = document.getElementById("show-answers-button");
const resultContainer = document.getElementById("result-container");

let currentQuestionIndex = 0;
let score = 0;

function startQuizz() {
    showQuestion(0);
}

function showQuestion(index) {
    const question = questions[index];
    if (question) {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<p>${question.section}</p><p>${question.question}</p>`;

        quizzContainer.innerHTML = "";
        quizzContainer.appendChild(questionElement);

        question.answers.forEach((answer, answerIndex) => {
            const answerElement = document.createElement("div");
            answerElement.classList.add("answer");
            answerElement.innerText = answer.text;
            answerElement.addEventListener("click", () => selectAnswer(answer, answerIndex));
            quizzContainer.appendChild(answerElement);
        });
    } else {
        showResult();
    }
}

function selectAnswer(answer, answerIndex) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    quizzContainer.style.display = "none";

    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<h2>Votre score est : ${score} / ${questions.length}</h2>`;

    questions.forEach((question, index) => {
        const questionIndex = index + 1;
        const answer = question.answers.find((a) => a.correct);
        const explanation = answer ? answer.explanation : "Aucune explication disponible.";

        resultContainer.innerHTML += `
            <p><strong>Question ${questionIndex}:</strong> ${question.question}</p>
            <p><strong>Réponse:</strong> ${explanation}</p>
            <hr>
        `;
    });

    showAnswersButton.style.display = "none";
}

showAnswersButton.addEventListener("click", showAnswers);

function showAnswers() {
    quizzContainer.style.display = "block";
    resultContainer.style.display = "none";
    showAnswersButton.style.display = "none";

    currentQuestionIndex = 0;
    score = 0;

    startQuizz();
}

window.addEventListener("load", startQuizz);
