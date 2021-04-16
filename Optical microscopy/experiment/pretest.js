// Don't touch the below code

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    // Don't touch the above code




    // Write your MCQs here --- Start --- --------------------

    const myQuestions = [{
            question: "What is the line that defines the solubility limit of A in B and B in A from the figure?",
            answers: {
                a: "Solidus line",
                b: "Liquidus line",
                c: "Solidus line and Liquidus line",
                d: "Solvus line"
            },
            correctAnswer: "d"
        },
        {
            question: "Three phases (L+α+β) coexist at point E. This point is called ___________. ",
            answers: {
                a: "Peritectic point",
                b: "Eutectic point",
                c: "Eutectic point or composition",
                d: "Eutectoid point"
            },
            correctAnswer: "c"
        },
        {
            question: "In hypoeutectic alloys micro structure at room temperature consists of",
            answers: {
                a: "Proeutectic β and α",
                b: "Proeutectic α and eutectic mixture (α+β)",
                c: "Eutectic mixture (α+β)",
                d: "Proeutectic β and eutectic mixture (α+β)"
            },
            correctAnswer: "b"
        },
        {
            question: "Why Pb-Sn eutectic alloys are used for soldering purpose?",
            answers: {
                a: "The melting point at eutectic point is maximum",
                b: "The melting point at the eutectic point is constant",
                c: "The boiling point at the eutectic point is maximum",
                d: "The melting point at the eutectic point is minimum"
            },
            correctAnswer: "d"
        },
        {
            question: "Crystals of which material begin to form at point a from the figure?",
            answers: {
                a: "Crystals of proeutectic β",
                b: "Crystals of proeutectic α",
                c: "Crystals of eutectic (α+β)",
                d: "Crystals of proeutectic α and β"
            },
            correctAnswer: "b"
        },
        {
            question: "At any point b, the α fraction is given by the lever rule as",
            answers: {
                a: "bn/mn",
                b: "mn/bn",
                c: "ab/be",
                d: "be/ab"
            },
            correctAnswer: "a"
        },
        {
            question: "The inflection in the cooling curve between points a and e is due to",
            answers: {
                a: "Low temperature",
                b: "Latent heat",
                c: "High temperature",
                d: "Specific heat"
            },
            correctAnswer: "b"
        },
        {
            question: "At the eutectic point (e) the eutectic reaction proceeds at a constant temperature as ",
            answers: {
                a: "F = 0",
                b: "F = 1 ",
                c: "F = 2 ",
                d: "F = 3"
            },
            correctAnswer: "a"
        },
        {
            question: "Any composition left of point c or right of a point will cool and solidify like a",
            answers: {
                a: "Eutectic",
                b: "Isomorphous system",
                c: "Proeutectic",
                d: "Eutectoid"
            },
            correctAnswer: "b"
        },
        {
            question: "A 34.6% Pb-Sn alloy is cooled just below the eutectic temperature (183°C). What is the fraction of proeutectic α and eutectic mixture (α+β)?",
            answers: {
                a: "70% and 30%",
                b: "36% and 64%",
                c: "30% and 70%",
                d: "64% and 36%"
            },
            correctAnswer: "d"
        },
        {
            question: "On heating, one solid phase results in another solid phase and a liquid phase during _____________ reaction.",
            answers: {
                a: "Eutectoid",
                b: "Peritectic",
                c: "Eutectic",
                d: "Peritectoid"
            },
            correctAnswer: "b"
        },
        {
            question: "A first solid phase results in a second solid phase and another third solid phase on cooling during _______________ reaction.",
            answers: {
                a: "Eutectoid",
                b: "Peritectic",
                c: "Eutectic",
                d: "Peritectoid"
            },
            correctAnswer: "a"
        }
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();