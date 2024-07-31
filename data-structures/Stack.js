/**
 * LIFO
 * Stacks in Data Structures is a linear type of data structure that follows the LIFO (Last-In-First-Out) principle
 * and allows insertion and deletion operations from one end of the stack data structure, that is top.
 * Implementation of the stack can be done by contiguous memory which is an array, and non-contiguous memory
 * which is a linked list. Stack plays a vital role in many applications.
 * */

export default class Stack {
    #items = [];

    constructor(initialItem) {
        if (initialItem) {
            this.#items.push(initialItem);
        }
    }

    get size() {
        return this.#items.length;
    }

    add(item) {
        return this.#items.push(item);
    }

    remove() {
        return this.size && this.#items.pop();
    }

    isEmpty() {
        return !!this.size;
    }

    peek() {
        return this.size && this.#items.at(-1);
    }

    printStack() {
        for (const elem of this.#items) {
            console.log(elem);
        }
    }
}

window.Stack = Stack;
