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
            question: "X-ray diffractometers are not used to identify which of these physical properties?",
            answers: {
                a: "Metals",
                b: "Polymeric materials",
                c: "Ceramics",
                d: "Liquids"
            },
            correctAnswer: "d"
        },
        {
            question: "In a powder diffractometer, the sharpness of the lines is greatly determined by? ",
            answers: {
                a: "Quality of the sample, size of the slit",
                b: "Thickness of the slit, amount of the sample",
                c: "Quality of the slit, size of the sample",
                d: "Composition of the sample"
            },
            correctAnswer: "c"
        },
        {
            question: "The atomic numbers of the zirconium, molybdenum, palladium and tin are 40, 42, 46 and 50 respectively, then the suitable filter for x-radiation from molybdenum is",
            answers: {
                a: "Palladium",
                b: "Zirconium",
                c: "Tin",
                d: "Uranium"
            },
            correctAnswer: "b"
        },
        {
            question: "The material used to construct the filter in X-ray diffraction is",
            answers: {
                a: "Metal with next higher atomic number",
                b: "Quartz",
                c: "Polymers",
                d: "Metal with next lower atomic number"
            },
            correctAnswer: "d"
        },
        {
            question: "The detector in X-ray diffraction that detects the visible radiation is",
            answers: {
                a: "Proportional counter",
                b: "Scintillation counter ",
                c: "Silicon diode",
                d: "Quartz"
            },
            correctAnswer: "b"
        },
        {
            question: "In gas phase detectors in XRD, high voltage is applied in the region of",
            answers: {
                a: "Geiger counter region",
                b: "Ionization region",
                c: "Proportional region",
                d: "Passivation region"
            },
            correctAnswer: "a"
        },
        {
            question: "Are the intensities of the diffraction peaks of a given compound in a mixture proportional to the fraction of the material in the mixture in diffractometers?",
            answers: {
                a: "No",
                b: "Yes",
            },
            correctAnswer: "b"
        },
        {
            question: "Line intensities in diffractometers depend on ______ and kind of atomic reflection centres in each set of plates. ",
            answers: {
                a: "Number",
                b: "Position ",
                c: "Length ",
                d: "Distance between lines"
            },
            correctAnswer: "a"
        },
        {
            question: "When certain geometric requirements are satisfied, X-rays scattered from a crystalline solid can constructively interfere with each other and produce a diffracted beam.",
            answers: {
                a: "False",
                b: "True",
            },
            correctAnswer: "b"
        },
        {
            question: "The X-ray diffraction is based upon",
            answers: {
                a: "Quantum equation",
                b: "Boltzmann equation",
                c: "Pascal equation",
                d: "Bragg’s equation"
            },
            correctAnswer: "d"
        },
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();