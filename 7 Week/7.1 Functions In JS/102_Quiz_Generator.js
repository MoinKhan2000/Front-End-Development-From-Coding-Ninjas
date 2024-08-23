function main() {
    const questions = [
        "Question1",
        "Question2",
        "Question3",
        "Question4",
        "Question5"
    ];

    function shuffle(arr) {
        return function () {
            const newArr = arr.slice();

            for (let i = newArr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            }
            return newArr;
        };
    }

    const func = shuffle(questions);

    const shuffledArray1 = func();
    const shuffledArray2 = func();

    console.log("shuffleArray1:", shuffledArray1);
    console.log("shuffleArray2:", shuffledArray2);

}

main();
