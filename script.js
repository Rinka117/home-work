const getNumber = () => Math.round(Math.random() * 100);



const playRound = () => {
    const numberOne = getNumber();
    const numberTwo = getNumber();

    const userAnswer = +prompt(`Чему равно ${numberOne} + ${numberTwo} ?`);

    const amount = (numberOne, numberTwo) => numberOne + numberTwo;

    if (userAnswer === amount) {
        alert('Верно!');
        return true
    } else {
        alert('Лучше пересчитать!');
        return false
    }
}

const playGame = (rounds) => {
    for (let i = 0; i < 3; i++) {
        const isCorrect = playRound();

        if (!isCorrect) {
            alert('Игра окончена!');
            return;
        }
    }
    alert('Вы выиграли!');
}



const button = document.querySelector('button');
button.addEventListener('click', () => playGame(3));