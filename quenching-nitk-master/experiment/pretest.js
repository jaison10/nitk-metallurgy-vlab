
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
      question: "Quenching is the process of _______ ",
      answers: {
        a: "rapid cooling",
        b: "slow cooling",
        c: "rapid heating",
        d: "slow heating"
      },
      correctAnswer: "a"
    },{
      question: "Quenching medium is decided on the basis of________",
      answers: {
        a: "weight of the specimen",
        b: "material of the specimen",
        c: "thickness of the specimen",
        d: "application of the specimen"
      },
      correctAnswer: "c"
    },{
      question: "How many types of quenching are there?",
      answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "5"
      },
      correctAnswer: "b"
    },{
      question: "An alloy quenching past the nose of the C-curve in the isothermal transformation diagram will undergo______ transformation.",
      answers: {
        a: "martensitic",
        b: "perlitic",
        c: "austenitic",
        d: "ferritic"
      },
      correctAnswer: "a"
    },{
      question: "Quenching is generally carried out to_______ ",
      answers: {
        a: "remove brittleness",
        b: "remove rust",
        c: "freeze the highest temperature structure",
        d: "oxidise the surface of the component for good reason"
      },
      correctAnswer: "c"
    },{
      question: "Quenching is can also be used for______",
      answers: {
        a: "fibres",
        b: "polymers",
        c: "metallic glasses",
        d: "plastics"
      },
      correctAnswer: "c"
    },{
      question: "The heat transfer during quenching is related to heat transfer during________ ",
      answers: {
        a: "annealing",
        b: "boiling",
        c: "martempering",
        d: "hardening"
      },
      correctAnswer: "b"
    },{
      question: "If a quenching medium cools slower than the required rate, the final product will have different properties than desired.",
      answers: {
        a: "true",
        b: "false"
      },
      correctAnswer: "a"
    },{
      question: "If the quenching medium cools the specimen at a faster rate, cracks might occur in the specimen.",
      answers: {
        a: "true",
        b: "false"
      },
      correctAnswer: "a"
    },{
      question: "During quenching, there could be a mechanism like_____",
      answers: {
        a: "vacancy diffusion",
        b: "vacancy formation",
        c: "grain diffusion",
        d: "grain boundary distortion"
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
