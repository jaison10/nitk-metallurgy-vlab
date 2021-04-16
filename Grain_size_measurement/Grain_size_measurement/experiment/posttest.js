
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

  const myQuestions = [
    {
        question: "Vapour-jacket cooling stage of quenching process occurs______ ",
        answers: {
          a: "below boiling point",
          b: "above boiling point",
          c: "below melting point",
          d: "at recrystallisation temperature"
        },
        correctAnswer: "b"
    },{
        question: "Which stage of quenching is slowest?",
        answers: {
          a: "vapour-jacket",
          b: "vapour-transport cooling",
          c: "liquid cooling",
          d: "they are all equally slow"
        },
        correctAnswer: "c"
    },{
        question: "Which quenching medium is used for quenching of carbon and low alloy steels?",
        answers: {
          a: "vegetable oil",
          b: "water",
          c: "air",
          d: "animal oil"
        },
        correctAnswer: "b"
    },{
        question: "Which among the following media of quenching the slowest?",
        answers: {
          a: "caustic soda",
          b: "sodium chloride",
          c: "mineral oil",
          d: "air"
        },
        correctAnswer: "d"
    },{
        question: "________ is used to predict quenching reactions in steels.",
        answers: {
          a: "isothermal transformation diagram",
          b: "iron-iron carbide equilibrium diagram",
          c: "continuous cooling transformation diagram",
          d: "logarithm scale"
        },
        correctAnswer: "a"
    },{
        question: "Examination of transformation time after quenching is done______",
        answers: {
          a: "at room temperature",
          b: "below melting point",
          c: "above eutectoid temperature",
          d: "above boiling temperature"
        },
        correctAnswer: "a"
    },{
        question: "Isothermal transformation of eutectoid steel between 723⁰C and 550⁰C produces _________ microstructure.",
        answers: {
          a: "pearlite",
          b: "bainite",
          c: "ferrite",
          d: "cementite"
        },
        correctAnswer: "a"
    },{
        question: "Rapid quenching of eutectoid steel ________ transforms the austenite into martensite.",
        answers: {
          a: "at room temperature",
          b: "below 320⁰C",
          c: "at 550⁰C",
          d: "above 723⁰C"
        },
        correctAnswer: "d"
    },{
        question: "For hardening of steel by quenching, the steel is cooled in ________",
        answers: {
          a: "furnace",
          b: "still air",
          c: "oil bath",
          d: "cooling tower"
        },
        correctAnswer: "c"
    },{
        question: "The cooling rate must be _______ the critical cooling rate for hardening of steel by quenching.",
        answers: {
          a: "higher than",
          b: "lower than",
          c: "equal to",
          d: "half of"
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
