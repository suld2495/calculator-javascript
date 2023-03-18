import Calculator from "./Calculator.js";
import { numberFomatter } from "./utils/formatter.js";

const calculator = new Calculator('.tip span:last-child', '.total span:last-child');

const $bill = document.querySelector('.bill');
const $people = document.querySelector('.people');
const $tips = document.querySelector('.tips');
let $tip = null;

const $reset = document.querySelector('.reset');

$bill.addEventListener('input', (e) => {
    const num = numberFomatter(e.target.value);
    e.target.value = num;
    calculator.bill = num;
    calculator.render();
});

$people.addEventListener('input', (e) => {
    num = numberFomatter(e.target.value);
    e.target.value = num;
    calculator.numberOfPeople = num;
    calculator.render();
});

$reset.addEventListener('click', () => {
    calculator.reset(); 
});

$tips.addEventListener('click', ({ target }) => {
    if (!target.matches('button')) {
        return;
    }

    if (!$tip) {
        $tip = target;
        $tip.classList.add('selected');
        calculator.tip = Number($tip.dataset.percent);
        return;
    }

    $tip.classList.remove('selected');

    if ($tip === target) {
        $tip = null;
    } else {
        $tip = target;
        $tip.classList.add('selected');
    }

    calculator.tip = Number($tip.dataset.percent);
});