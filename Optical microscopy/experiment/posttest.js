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
            question: "A first solid phase results in a second solid plus another third solid phase upon heating during ___________ reaction.",
            answers: {
                a: "Eutectoid",
                b: "Peritectoid",
                c: "Peritectic",
                d: "Eutectic"
            },
            correctAnswer: "b"
        },
        {
            question: "Which phase will crystallize first just below the liquidus line?",
            answers: {
                a: "(L+α) phase",
                b: "(L+β) phase",
                c: "α phase",
                d: "β phase"
            },
            correctAnswer: "c"
        },
        {
            question: "At what temperature, all liquid and α will convert to β?",
            answers: {
                a: "Eutectic temperature",
                b: "Eutectoid temperature",
                c: "Peritectoid temperature",
                d: "Peritectic temperature"
            },
            correctAnswer: "d"
        },
        {
            question: "Any composition left and right of P will generate",
            answers: {
                a: "Excess of liquid and α",
                b: "Excess of liquid and β",
                c: "Excess of α and liquid",
                d: "Excess of β and liquid"
            },
            correctAnswer: "c"
        },
        {
            question: "How much copper is present in deoxidized copper?",
            answers: {
                a: "> 99.9%",
                b: "> 99.85%",
                c: "> 99.5%",
                d: "> 99.35%"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the melting point of Copper? ",
            answers: {
                a: "1084",
                b: "600",
                c: "419",
                d: "2562"
            },
            correctAnswer: "a"
        },
        {
            question: "Brass is an alloy of copper and",
            answers: {
                a: "Tin",
                b: "Tin and zinc",
                c: "Nickel",
                d: "Zinc"
            },
            correctAnswer: "d"
        },
        {
            question: "α brasses contain _______ of zinc.",
            answers: {
                a: "0%",
                b: "<=36%",
                c: ">36%",
                d: "100%"
            },
            correctAnswer: "b"
        },
        {
            question: "Yellow metal is more commonly known as",
            answers: {
                a: "Cartridge brass",
                b: "Naval brass",
                c: "Muntz metal",
                d: "Admiralty brass"
            },
            correctAnswer: "c"
        },
        {
            question: "Which brass alloy has high tensile strength and can be used for cast molding?",
            answers: {
                a: "Manganese brass",
                b: "Free cutting brass",
                c: "Standard brass",
                d: "Gilding metal"
            },
            correctAnswer: "a"
        },
        {
            question: "Which brass alloy is used to make imitation jewelry and decorative work?",
            answers: {
                a: "Gilding metal",
                b: "Standard brass",
                c: "Admiralty brass",
                d: "Free cutting brass"
            },
            correctAnswer: "a"
        },
        {
            question: "Which brass alloy is suitable for high-speed machining?",
            answers: {
                a: "Gilding metal",
                b: "Leaded brass",
                c: "High tensile brass",
                d: "Muntz metal"
            },
            correctAnswer: "b"
        }
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();