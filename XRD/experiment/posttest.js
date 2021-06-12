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
            question: " Plot drawn in x-ray diffraction spectra analysis is _______ vs _________",
            answers: {
                a: "Intensity Vs angle",
                b: "interatomic distance vs angle",
                c: "Intensity vs l",
                d: "l vs Angle"
            },
            correctAnswer: "b"
        },
        {
            question: " Which type of X-rays are emitted from an atom when an electron is removed from K- shell are",
            answers: {
                a: "K-lines",
                b: "L-lines",
                c: "M-lines",
                d: "P-lines"
            },
            correctAnswer: "a"
        },
        {
            question: "One of the widely used target material for generation of X-ray spectral line is",
            answers: {
                a: "Zinc",
                b: "Gold",
                c: "Silicon dioxide",
                d: "Molybdenum"
            },
            correctAnswer: "d"
        },
        {
            question: "The minimum wavelength of X-radiation from a metal ________ as the applied voltage increases",
            answers: {
                a: "Increases",
                b: "Remains same",
                c: "Decreases",
                d: "Variable with metal"
            },
            correctAnswer: "c"
        },
        {
            question: "The most common instrument used for photographic recording of diffraction patterns is?",
            answers: {
                a: "Gamma camera",
                b: "Debye-Scherrer powder camera",
                c: "Optical microscope",
                d: "Scintillation counter"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following information about the compounds present in a solid sample do we get from an X-ray diffractometer? ",
            answers: {
                a: "Quantitative and qualitative",
                b: "Quantitative",
                c: "Theoretical",
                d: "Either quantitative or qualitative"
            },
            correctAnswer: "a"
        },
        {
            question: "The frequency of X-radiation from a target material __________, as the atomic number increases.",
            answers: {
                a: "Decreases",
                b: "Remains same",
                c: "Variable with metal",
                d: "Increases"
            },
            correctAnswer: "d"
        },
        {
            question: "Longer wavelengths of Ka line between copper and molybdenum are produced by?",
            answers: {
                a: "Molybdenum",
                b: "Copper",
                c: "Both",
                d: "None"
            },
            correctAnswer: "b"
        },
        {
            question: "Bragg’s equation is",
            answers: {
                a: "nλ = 2",
                b: "n = 2d",
                c: "nλ = 2d sinθ",
                d: "nλ = 2f"
            },
            correctAnswer: "c"
        },
        {
            question: "How are x-rays produced?",
            answers: {
                a: "Loss of inner shell e– one of the outer e– will fall into the vacant orbital with the simultaneous emission of X-ray photon",
                b: "By heating electrons by UV radiation.",
                c: "Knocking only e-",
                d: "None of the above"
            },
            correctAnswer: "a"
        },
        {
            question: "X-Ray wavelength lies between",
            answers: {
                a: "10 ^ (-2) - 10nm",
                b: "100 ^ (-2) - 1000nm",
                c: "1 ^ (-2) - 10nm",
                d: "10 ^ 2 - 1000nm"
            },
            correctAnswer: "a"
        },
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();