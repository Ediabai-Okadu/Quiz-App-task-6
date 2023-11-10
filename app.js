let quizData = [
  {
    question:
      "Which attribute must have a unique value each time it is used in an HTML document?",
    options: ["title", "class", "id"],
    answer: "id",
  },

  {
    question: "Which choice is not part of CSS box model",
    options: ["paragraph", "border", "padding"],
    answer: "paragraph",
  },
  {
    question: "The correct syntax to give a line over text is -",
    options: [
      "text-decoration:line-through",
      "text-decoration:underline",
      "text-decoration:overline",
    ],
    answer: "text-decoration:overline",
  },
  {
    question:
      "Which of the following CSS property is used to specify the type of quotation mark?",
    options: ["z-index property", "quotes-property", "hyphens property"],
    answer: "quotes-property",
  },

  {
    question:
      "The CSS property which is used to define the set the difference between two lines of your content is -",
    options: [
      "line-height-property",
      " max-height property",
      "min-height property",
    ],
    answer: "line-height-property",
  },
  {
    question:
      "Which of the following CSS property is used to represent the overflowed text which is not visible to the user?",
    options: ["text-overflow", "text-shadow", "text-stroke"],
    answer: "text-overflow",
  },
  {
    question:
      "The CSS property used to set the maximum height of the element's content box is -",
    options: ["max-height-property", "max-width property", "height property"],
    answer: "max-height-property",
  },
  {
    question:
      "The CSS property used to make the rounded borders, or rounded corners around an element is -",
    options: ["border-collapse", "border-spacing", "border-radius"],
    answer: "border-radius",
  },
  {
    question:
      "The CSS property used to specify the transparency of an element is -",
    options: ["opacity", "visibility", " filter"],
    answer: "opacity",
  },
  {
    question:
      "Which of the following property is used as the shorthand property of margin properties?",
    options: ["margin-left", "margin", "margin-right"],
    answer: "margin",
  },
];

let displayData = document.querySelector(".display-data");

function quizApp() {
  let rightOpt = 50;
  let wrongOpt = 0;
  let result = 0;

  let quizArray = quizData.map((quiz, index) => {
    return `<div class="container my-3 py-2 justify-content-between">
              <div class="content-box rounded shadow">
                <div class="d-flex p-3">
                <span class="me-2 fs-4">${index + 1}</span>
                <p class="question fs-4 " style="font-size: 20px">${
                  quiz.question
                }</p>
                </div>
                <select name="" id="select-item" class="w-75 mx-3 p-3 fs-5">
                  <option class="choice" value="" select-disabled>Select an answer</option>
                  ${quiz.options.map((option) => {
                    return `<option class="choice" value=${option}>${option}</option>`;
                  })}
                </select>
                <div class="text-center py-4 ">
                <span class="selected me-3">Selected answer:</span>
                <span class="correct mx-3 ">Correct answer:</span>
                <span class="status mx-3">Status:</span>
              </div>
              </div>           
            </div>`;
  });

  displayData.innerHTML = quizArray.join(" ");

  let selectElement = document.querySelectorAll("select");

  selectElement.forEach((select, index) => {
    select.addEventListener("change", (event) => {
      let choice = event.target.value;
      let chosenOpt = document.querySelectorAll(".selected")[index];
      chosenOpt.innerHTML = `Selected answer: ${choice}`;
      let rightAns = document.querySelectorAll(".correct")[index];
      rightAns.innerHTML = `Correct answer: ${quizData[index].answer}`;

      if (quizData[index].answer === choice) {
        document.querySelectorAll(".status")[
          index
        ].innerHTML = `Status: You are Right!!`;
        result += rightOpt;
        document.querySelector(".result").innerHTML = `${result}/500`;
      } else {
        document.querySelectorAll(".status")[
          index
        ].innerHTML = `Status: Better Luck Next Time`;
        result += wrongOpt;
        document.querySelector(".result").innerHTML = `${result}/500`;
      }
    });
  });
}

quizApp();
