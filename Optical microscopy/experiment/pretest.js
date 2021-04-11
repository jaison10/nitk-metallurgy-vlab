
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
      question: "The melting point of mild steel is approximately",
      answers: {
        a: "500 degree centigrade",
        b: "800 degree centigrade ",
        c: "1000 degree centigrade ",
        d: "1500 degree centigrade"
      },
      correctAnswer: "d"
    },
  {
      question: "Mild steel is also known as_________",
      answers: {
        a: "low nickel steel",
        b: "low iron steel ",
        c: "low carbon steel ",
        d: "low manganese steel"
      },
      correctAnswer: "c"
    },
  {
      question: "What is the effect of silicon on the structure of cast iron?<br>i. Blowholes are present in the castings<br>ii. Increases fluidity<br>iii. Influences the solidification of liquid alloys<br>iv. Reacts with iron to form iron sulphide<br>",
      answers: {
        a: "1 and 2",
        b: "2 and 3 ",
        c: "3 and 4 ",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
  {
      question: "Fire resistant steels are also called as____________",
      answers: {
        a: "Stainless steel",
        b: "Weathering steel ",
        c: "High strength steel ",
        d: "Thermomechanically treated steel"
      },
      correctAnswer: "d"
    },
  {
      question: "In mottled cast iron, slow cooling rate is used to obtain_____________",
      answers: {
        a: "white cast iron",
        b: "grey cast iron ",
        c: "Both a. and b ",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
  {
      question: "What is weathering steel?",
      answers: {
        a: "low-alloy atmospheric corrosion-resistant steel",
        b: "low-carbon steel ",
        c: "high strength quenched and tempered steel ",
        d: "fire resistant steel"
      },
      correctAnswer: "a"
    },
  {
      question: "What is the effect of increased carbon content on chilled cast iron?",
      answers: {
        a: "Chilling depth increases",
        b: "Hardness of chilled zone increases ",
        c: "Both a. and b ",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
  {
      question: "Presence of which material in a grey cast iron causes reduced ductility?",
      answers: {
        a: "Graphite",
        b: "Aluminium ",
        c: "Coke ",
        d: "Zinc"
      },
      correctAnswer: "a"
    },
  {
      question: "What is the tensile strength of thick gray cast iron?",
      answers: {
        a: "71 MPa",
        b: "83 MPa ",
        c: "95 MPa ",
        d: "107 MPa"
      },
      correctAnswer: "b"
    },
    {
        question: "Up to what thickness can hot box process can be used for production?",
        answers: {
          a: "10 mm- 40 mm",
          b: "30 mm- 50 mm ",
          c: "40 mm- 80 mm ",
          d: "70 mm- 100 mm"
        },
        correctAnswer: "d"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
