let currentQIndex = 0;
let selectedAnswer = null;
let correctAnswers = 0;

//display the questions
function showQuestions(){
    let quistion = shuffledQuestions[currentQIndex];
    questionTitle.textContent = quistion.title;
    questionImage.src = quistion.image;
    answerContainer.innerHTML = "";
    quistion.answers.forEach((answer)=>{
        let btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick=()=>selectAnswer(btn,answer);
        answerContainer.appendChild(btn);
    });
    nextBtn.disabled = true;
}

//select the answar
function selectAnswer(button,answer){
    selectedAnswer = answer;
    let btns = answerContainer.querySelectorAll("button");
    btns.forEach((btn)=>btn.classList.remove("selected"));
    button.classList.add("selected");
    nextBtn.disabled = false;
}

//handel nextbtn
function nextButton(){
    let correctAnswer = shuffledQuestions[currentQIndex].correct;
    if(selectedAnswer === correctAnswer){
        correctAnswers++;
    }
    currentQIndex++;
    if(currentQIndex<shuffledQuestions.length){
        showQuestions();
    }else{
        endQuiz();
    }
};

//end the quiz
function endQuiz(){
    clearInterval(timerInterval);
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML=`
    <h2>Quiz Completed</h2>
    <div id="progress-circle"></div>
    <div class="score-txt">
    You got ${correctAnswers} out of ${shuffledQuestions.length} questions correct
    </div>
    `;
    let circle = new ProgressBar.Circle('#progress-circle',{
        color: '#76c7c0',
        strokeWidth: 6,
        trailWidth: 6,
        trailColor: '#eee',
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false,
            style: {
                color: '#000000',
                fontSize: '2rem',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }
        },
        step: function(state, circle) {
            const percentage = Math.round(circle.value() * 100);
            circle.setText(percentage + '%');
        }
    });
    const percentage = correctAnswers / shuffledQuestions.length;
    circle.animate(percentage);
}