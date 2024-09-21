const fs = require('fs');
const input = fs.readFileSync('../Input/input.txt').toString().trim().split('\n').map(Number);

class treeNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    addChild(value) {
        if (this.value > value) {
            if (this.leftChild) {
                this.leftChild.addChild(value);
            } else {
                this.leftChild = new treeNode(value);
            }
        } else {
            if (this.rightChild) {
                this.rightChild.addChild(value);
            } else {
                this.rightChild = new treeNode(value);
            }
        }
    }
    traversal() {
        if (this.leftChild) this.leftChild.traversal();
        if (this.rightChild) this.rightChild.traversal();
        console.log(this.value);
    }
}

const root = new treeNode(input[0]);

for (let i = 1; i < input.length; i++) {
    root.addChild(input[i]);
}

root.traversal();
