
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
      question: "In calibration we use a _______to determine the true linear magnification for each objective, eyepiece and bellows",
      answers: {
        a: " stage micrometer",
        b: "stage nanometer",
        c: "stage thermometer",
        d: "stage millimeter"
      },
      correctAnswer: "a"
    },{
      question: "NA =f(N Inside +N intercepted/2). In this equation ‘f’ represents …..",
      answers: {
        a: "James’ multiplier",
        b: "Thomsons’ multiplier",
        c: "Jeffries’ multiplier",
        d: "Albert multiplier"
      },
      correctAnswer: "c"
    },{
      question: "Which of the following is a precaution before measurement in the Hilliard Single Circle procedure.?",
      answers: {
        a: "Test circle radius must be smaller than the largest observed grain.",
        b: "Test circle diameter should never be smaller the the largest observed grain.",
        c: "Test circle diameter must be equal to the largest observed grain.",
        d: "Test circle diameter must be smaller than the smallest observed grain."
      },
      correctAnswer: "b"
    },{
      question: "In Abrams Three-Circle procedure , The test pattern consists of three concentric and equally spaced circles of circumference____",
      answers: {
        a: "500mm",
        b: "400mm",
        c: "600mm",
        d: "300mm"
      },
      correctAnswer: "a"
    },{
      question: "The precision and bias of grain size measurements depends on….",
      answers: {
        a: "degree of hardness of the specimens selected and the areas on the polish planes",
        b: "density of the specimens selected and the areas on the polish planes",
        c: "Representativeness of the specimens selected and the areas on the polish planes",
        d: "thickness of the specimens selected and the areas on the polish planes"
      },
      correctAnswer: "c"
    },{
      question: "The region closest to the weld metal will have larger diameter and is called…..",
      answers: {
        a: "Fine grain heat affected zone",
        b: "Hot grain heat affected zone",
        c: "Coarse grain heat affected zone",
        d: "cold grain heat affected zone"
      },
      correctAnswer: "c"
    },{
      question: ")Which of the following instrument can be used for measuring Grain size? ",
      answers: {
        a: "Electrical microscope",
        b: "Optical microscope",
        c: "Compound microscope",
        d: "laser microscope"
      },
      correctAnswer: "b"
    },{
      question: "What is the approximate size of ferrite grain?",
      answers: {
        a: "10 μm",
        b: "1000 μm",
        c: "50 μm",
        d: "500 μm"
      },
      correctAnswer: "a"
    }
    // ,{
    //     question: "For hardening of steel by quenching, the steel is cooled in ________",
    //     answers: {
    //       a: "furnace",
    //       b: "still air",
    //       c: "oil bath",
    //       d: "cooling tower"
    //     },
    //     correctAnswer: "c"
    // },{
    //     question: "The cooling rate must be _______ the critical cooling rate for hardening of steel by quenching.",
    //     answers: {
    //       a: "higher than",
    //       b: "lower than",
    //       c: "equal to",
    //       d: "half of"
    //     },
    //     correctAnswer: "a"
    // }    
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
