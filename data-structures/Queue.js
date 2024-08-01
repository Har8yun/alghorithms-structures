export default class Queue {
    #items;
    #headIndex;
    #tailIndex;

    constructor() {
        this.#initializeData();
    }

    #initializeData() {
        this.#items = {};
        this.#headIndex = 0;
        this.#tailIndex = 0;
    }


    enQueue(item) {
        this.#items[this.#tailIndex] = item;
        this.#tailIndex++;
    }

    deQueue() {
        const removedElement = this.#items[this.#headIndex];
        delete this.#items[this.#headIndex];

        this.#headIndex++;

        return removedElement;
    }

    peek() {
        return this.#items[this.#headIndex];
    }

    get size() {
        return this.#tailIndex - this.#headIndex;
    }

    get isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.#initializeData();
    }
}