const getNumber = () => Math.round(Math.random() * 100);



const playRound = () => {
    const numberOne = getNumber();
    const numberTwo = getNumber();

    const userAnswer = Number(prompt(`Чему равно ${numberOne} + ${numberTwo} ?`));

    const sum = numberOne + numberTwo;


    if (userAnswer === sum) {
        alert('Верно!');
        return true
    } else {
        alert('Лучше пересчитать!');
        return false
    }
}

const playGame = (rounds) => {
    for (let i = 0; i < rounds; i++) {
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