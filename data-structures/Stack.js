/**
 * LIFO
 * Stacks in Data Structures is a linear type of data structure that follows the LIFO (Last-In-First-Out) principle
 * and allows insertion and deletion operations from one end of the stack data structure, that is top.
 * Implementation of the stack can be done by contiguous memory which is an array, and non-contiguous memory
 * which is a linked list. Stack plays a vital role in many applications.
 * */

export default class Stack {
    #items = [];

    /**
     *
     * @param initialItem
     */
    constructor(initialItem) {
        if (!new.target) {
            throw new Error("Constructor Stack requires 'new'")
        }

        if (initialItem) {
            this.#items.push(initialItem);
        }
    }

    /**
     *
     * @returns {number}
     */
    get size() {
        return this.#items.length;
    }

    /**
     *
     * @param item
     * @returns {number}
     */
    add(item) {
        return this.#items.push(item);
    }

    /**
     *
     * @returns {0|*}
     */
    remove() {
        if (this.size) {
            return this.#items.pop();
        }
    }

    /**
     *
     * @returns {boolean}
     */
    isEmpty() {
        return !!this.size;
    }

    /**
     *
     * @returns {*}
     */
    peek() {
        if (this.size) {
            return this.#items.at(-1);
        }
    }

    printStack() {
        for (const elem of this.#items) {
            console.log(elem);
        }
    }
}
