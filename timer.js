let timerInterval;

function startTimer(duration){
    let timeLeft = duration;
    timerBar.style.width = "100%";
    timerInterval = setInterval(()=>{
        timeLeft--;
        timeLeftTxt.textContent = timeLeft;
        timerBar.style.width = (timeLeft/duration)*100+ "%";
        if(timeLeft <= 0){
            clearInterval(timerInterval);
            timeLeftTxt.textContent = "0";
            endQuiz();
        }
    },1000);
}