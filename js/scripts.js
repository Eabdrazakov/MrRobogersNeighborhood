//Business Logic

function createNumber(number) {
    let result = [];
    for (let i = 0; i <= number; i++) {
        let strNum = i.toString();
        if (strNum.includes("3")) {
            result.push("Won't you be my neighbor?")
        } else if (strNum.includes("2")) {
            result.push("Boop!")
        } else if (strNum.includes("1")) {
            result.push("Beep")
        } else {
            result.push(i)
        }
    }
    return result;
};

// const number = "14";
// console.log(createNumber(number));
// const number1 = "18";
// console.log(createNumber(number1));
// const number2 = "5";
// console.log(createNumber(number2));



//UI Logic

function resetForm() {
    const form = document.getElementById("form");
    form.reset();
}

function classHidden() {
    document.querySelector("#error").setAttribute("class", "hidden");
};

function numberChecker(number) {
    if (number < 0) {
        document.querySelector("#error").removeAttribute("class");
        return
    }
};


function finalNumber(e) {
    e.preventDefault();
    classHidden();
    const input = document.getElementById("inputNumber").value;
    const number = createNumber(input);
    const numCheck = numberChecker(input);

    document.getElementById("finalResult").innerText = number;

    resetForm();
};

window.addEventListener("load", function () {
    document.getElementById("form").addEventListener("submit", finalNumber);
});