export default class Calculator {
    #bill = 0;
    #numberOfPeople = 0;
    #tip = 0;

    #tipEl;
    #totalEl;

    constructor(tipEl, totalEl) {
        this.#tipEl = document.querySelector(tipEl);
        this.#totalEl = document.querySelector(totalEl);
    }

    reset() {
        this.#bill = 0;
        this.#numberOfPeople = 0;
        this.#tip = 0;
    }

    set bill(bill) {
        if (bill === this.#bill) {
            return;
        }

        this.#bill = bill;
    }

    set numberOfPeople(numberOfPeople) {
        if (numberOfPeople === this.#numberOfPeople) {
            return;
        }

        this.#numberOfPeople = numberOfPeople;
    }

    set tip(tip) {
        if (tip === this.#tip) {
            return;
        }

        this.#tip = tip;
    }

    render() {
        if (!this.#numberOfPeople) {
            this.clear();
            return;
        }

        const totalTip = (this.#bill * this.#tip) / 100;
        this.#tipEl.textContent = (totalTip / this.#numberOfPeople).toFixed(2);
        this.#totalEl.textContent = ((this.#bill + totalTip) / this.#numberOfPeople).toFixed(2);
    }
}
