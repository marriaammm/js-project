let quizContainer = document.getElementById("quiz-container");
let timerBar = document.getElementById("timer-bar");
let timeLeftTxt = document.getElementById("time-left-text");
let questionTitle = document.getElementById("q-title");
let questionImage = document.getElementById("q-image");
let answerContainer = document.getElementById("ans-container");
let nextBtn = document.getElementById("next-btn");
let resultContainer = document.getElementById("result");

Swal.fire({
    title: "Enter Your Name",
    input: "text",
    inputAttributes: {
        autocapitalize: "off"
    },
    showCancelButton: false,
    confirmButtonText: "Start",
    didOpen:()=>{
        let inputField = Swal.getInput();
        let confirmButton = Swal.getConfirmButton();
        confirmButton.style.backgroundColor = "#102221";
        confirmButton.style.color = "white";
        confirmButton.style.border = "none"; 
        confirmButton.disabled = true;
        inputField.addEventListener('input',()=>{
            confirmButton.disabled = inputField.value === '';
        });
    }
}).then((result)=>{
    if(result.isConfirmed){
        quizContainer.classList.remove("hidden");
        startTimer(60);
        showQuestions();
    }
});

nextBtn.onclick = nextButton;