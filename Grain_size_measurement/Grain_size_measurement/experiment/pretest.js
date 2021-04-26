
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
      question: "Which of the following is the size of brass grain?",
      answers: {
        a: "0.4mm",
        b: "0.04mm",
        c: "0.004mm",
        d: "0.0004mm"
      },
      correctAnswer: "b"
  },{
      question: "Quartz grains are generally fine or small in shape and size during analysis of quartz.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
  },{
      question: "What is NAE?",
      answers: {
        a: "Number of grains per square inch at 10X magnification.",
        b: "Number of grains per square inch at 100X magnification.",
        c: "Number of grains per square inch at 50X magnification.",
        d: "Number of grains per square inch at 500X magnification."
      },
      correctAnswer: "b"
  },{
      question: "In Jefferies Planimetric Method, In equation n=2^(G-1), G represents",
      answers: {
        a: "ASTM grain size number",
        b: "ASTM grain size number",
        c: "ASRN grain size number",
        d: "ASTM grain size number"
      },
      correctAnswer: "d"
  },{
      question: "The planimetric method which is a grain size measurement method describes…",
      answers: {
        a: "Isothermal transformation diagram",
        b: "Density of grains per cubic millimeter volume",
        c: "continuous cooling transformation diagram",
        d: "logarithm scale"
      },
      correctAnswer: "a"
  },{
      question: "The relation between average grain size and yield strength is formulated as: σ= σ0+k*d^(-0.5). Where k is a constant called____",
      answers: {
        a: "Hall-petch slope",
        b: "Hall-herald slope",
        c: "James-petch slope",
        d: "James-herald slope"
      },
      correctAnswer: "a"
  },{
      question: "In Germany in 1904, Emil Heyn published an intercept approach for measuring grain size. In this method_________ ",
      answers: {
        a: "True line length is divided by the number of grains intercepted by the line.",
        b: "True line length is divided by the number density of grains intercepted by the line.",
        c: "True line length is divided by the area density of grains intercepted by the line.",
        d: "True line length is divided by the average length of grains intercepted by the line."
      },
      correctAnswer: "a"
  },{
      question: "What is Grain intercept count?",
      answers: {
        a: "Determination of the number of times a test line touches individual grains on the polish plane.",
        b: "Determination of the number of times a test line does not touch individual grains on the polish plane.",
        c: "Determination of the number of times a test line cuts through individual grains on the polish plane."
      },
      correctAnswer: "c"
  }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
