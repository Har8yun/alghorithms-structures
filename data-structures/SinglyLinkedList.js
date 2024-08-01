/**
 * A linked list is a fundamental data structure in computer science. It mainly allows efficient insertion and deletion
 * operations compared to arrays.
 * Like arrays, it is also used to implement other data structures like stack, queue and deque.
 *
 * A linked list is a linear data structure that consists of a series of nodes connected by pointers (in C or C++) or
 * references (in Java, Python and JavaScript). Each node contains data and a pointer/reference to the next node
 * in the list. Unlike arrays, linked lists allow for efficient insertion or removal of elements from any position in
 * the list, as the nodes are not stored contiguously in memory.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class SinglyLinkedList {
    head = null;
    size = 0;

    /**
     *
     * @param head
     */
    constructor(head = null) {
        if (!head === null) {
            this.head = new Node(head);
            this.size++;
        }
    }

    /**
     *
     */
    clear() {
        this.head = null;
        this.size = 0;
    }

    /**
     *
     * @returns {Node}
     */
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }

        return lastNode;
    }

    /**
     *
     * @returns {null} | {Node}
     */
    getFirst() {
        return this.head;
    }

    /**
     *
     * @param data
     * @returns {number}
     */
    add(data) {
        const lastNode = this.getLast();
        if (lastNode !== null) {
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }

        return ++this.size;
    }

    /**
     *
     * @param callFn
     */
    map(callFn) {
        let currentNode = this.head;
        while (currentNode) {
            callFn(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    /**
     *
     * @returns {number}
     */
    removeLast() {
        if (!this.size) {
            return;
        }

        let prevLastItem = this.head;
        if (prevLastItem.next === null) {
            this.head = null;
        } else {

            while (prevLastItem.next?.next) {
                prevLastItem = prevLastItem.next;
            }

            prevLastItem.next = null;
        }

        return --this.size;
    }

    removeNthNode(index) {}

    /**
     *
     * @returns {null}
     */
    getMiddle() {
        if (!this.size) {
            return null;
        }

        let slow = this.head;
        let doubleSpeed = slow.next?.next;

        while (doubleSpeed) {
            slow = slow.next;
            doubleSpeed = doubleSpeed.next?.next;
        }

        return slow;
    }


}
