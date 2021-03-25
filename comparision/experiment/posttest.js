
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
        question: "What is the temperature in a core box typically?",
        answers: {
          a: "120°C – 160°C",
          b: "180°C – 260°C ",
          c: "200°C – 270°C ",
          d: "290°C – 350°C"
        },
        correctAnswer: "b"
    },
    {
        question: "Up to what mass of grey cast irons can shell moulds take?",
        answers: {
          a: "300 kg",
          b: "400 kg ",
          c: "500 kg ",
          d: "600 kg"
        },
        correctAnswer: "c"
    },
    {
        question: "What should be the range of percentage of carbon (C) in iron (Fe) to be called as cast iron?",
        answers: {
          a: "0.1-0.5",
          b: "0.5-1.0 ",
          c: "1.0-2.0 ",
          d: "2.0-5.0"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following types of iron represents purest form of iron in the manufacturing process?",
        answers: {
          a: "Pig iron",
          b: "White cast iron ",
          c: "Wrought iron ",
          d: "Grey cast iron"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following types of cast iron includes black flakes of graphite in it?",
        answers: {
          a: "White cast iron",
          b: "Grey cast iron ",
          c: "Ductile cast iron ",
          d: "Malleable cast iron"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the permissible percentage of Sulphur and Phosphorous content in steel?",
        answers: {
          a: "0.1%, 0.12%",
          b: "1.0%, 3.0% ",
          c: "3.0%, 1.0% ",
          d: "1.0%, 1.0%"
        },
        correctAnswer: "a"
    },
    {
        question: "What happens when Manganese is added to steel?",
        answers: {
          a: "decreases strength and hardness of steel",
          b: "improves corrosion resistance ",
          c: "decreases ductility ",
          d: "improves strength and hardness of steel"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is the effect of increased content of Sulphur and Phosphorus in Steel?",
        answers: {
          a: "yields high strength",
          b: "affects weldability ",
          c: "increases resistance to corrosion ",
          d: "improves resistance to high temperature"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following properties are affected due to addition of carbon and manganese to steel?<br>i.  tensile strength and yield property<br>ii.  Ductility<br>iii.  Welding<br>iv.  Corrosion resistance<br>",
        answers: {
          a: "i and ii only",
          b: "i and iii only ",
          c: "i, ii, iii only ",
          d: "i and iv only"
        },
        correctAnswer: "c"
    },
    {
        question: "Chrome and Nickel are added to Steel to improve_________",
        answers: {
          a: "corrosion resistance and high temperature resistance",
          b: "strength ",
          c: "ductility ",
          d: "weldability"
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
