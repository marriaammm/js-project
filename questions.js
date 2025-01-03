let questions = [
    //1
    {
    title: "Who was the first President of the United States?",
    image: "images/q1.jpg",
    answers: ["Thomas Jefferson", "John Adams", "George Washington","Benjamin Franklin"],
    correct: "George Washington",
    },
    //2
    {
    title: "Which ancient civilization built the pyramids?",
    image: "images/q2.jpg",
    answers: ["Romans", "Egyptians", "Mayans","Greeks"],
    correct: "Egyptians",
    },
    //3
    {
    title: "Who was the first man to walk on the moon?",
    image: "images/q3.jpg",
    answers: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin","Michael Collins"],
    correct: "Neil Armstrong",
    },
    //4
    {
    title: "In which year did the Titanic sink?",
    image: "images/q4.jpg",
    answers: ["1905", "1912", "1923","1898"],
    correct: "1912",
    },
    //5
    {
    title: "Who was the British Prime Minister during World War II?",
    image: "images/q5.jpg",
    answers: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee","Margaret Thatcher"],
    correct: "Winston Churchill",
    },
    //6
    {
    title: "What year did World War I begin?",
    image: "images/q6.jpg",
    answers: ["1914", "1918", "1920","1939"],
    correct: "1914",
    },
    //7
    {
    title: "Who discovered America in 1492?",
    image: "images/q7.jpg",
    answers: ["Ferdinand Magellan", " Christopher Columbus", "Amerigo Vespucci","Vasco da Gama"],
    correct: "Christopher Columbus",
    },
    //8
    {
    title: "Who was the first female Prime Minister of the United Kingdom?",
    image: "images/q8.jpg",
    answers: ["Theresa May", "Angela Merkel", "Margaret Thatcher","Elizabeth II"],
    correct: "Margaret Thatcher",
    },
    //9
    {
    title: "Which empire was ruled by Genghis Khan?",
    image: "images/q9.jpg",
    answers: ["Roman Empire", "Ottoman Empire", "Mongol Empire","Persian Empire"],
    correct: "Mongol Empire",
    },
    //10
    {
    title: "Which American civil rights leader delivered the 'I Have a Dream' speech?",
    image: "images/q10.jpg",
    answers: ["Malcolm X", "Rosa Parks", "Martin Luther King Jr.","Frederick Douglass"],
    correct: "Martin Luther King Jr.",
    },
];
let shuffledQuestions = questions.map(q=>(
    { ...q, answers: q.answers.sort(() => Math.random() - 0.5) }))
    .sort(() => Math.random() - 0.5);