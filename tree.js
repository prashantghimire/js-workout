function Node(data){
    this.left = null;
    this.right = null;
    this.data = data;
}

Node.prototype.insert = function (data){
    if (data < this.data){
        if(this.left != null){
            this.left.insert(data);
        } else {
            this.left = new Node(data);
        }
    } else {
        if(this.right != null){
            this.right.insert(data);
        } else {
            this.right = new Node(data);
        }
    }
};

Node.prototype.contains = function (data) {

    if(data == this.data){
        return true;
    } else if (data < this.data) {
        if(this.left != null){
            return this.left.contains(data);
        } else {
            return data === this.data;
        }
    } else {
        if(this.right != null){
            return this.right.contains(data);
        } else {
            return data === this.data;
        }
    }
};

Node.equals = function (node1, node2){
    
    if (node1 == node2) return true;
    if (node1 == null || node2 == null) return false;

    if (node1.data != node2.data){
        return false;
    }
    if(!Node.equals(node1.left, node2.left)){
        return false;
    }
    if (!Node.equals(node1.right, node2.right)){
        return false;
    }
    return true;
};

Node.prototype.printInOrder = function (){
    if(this.left){
        this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right){
        this.right.printInOrder();
    }
};

Node.prototype.printPreOrder = function (){
    console.log(this.data);
    if(this.left){
        this.left.printPreOrder();
    }
    if(this.right) {
        this.right.printPreOrder();
    }
};

Node.prototype.postOrder = function (){
    if(this.left){
        this.left.postOrder();
    }
    if(this.right){
        this.right.postOrder();
    }
    console.log(this.data);
};

let root = new Node(5);
root.insert(3);
root.insert(6);
root.insert(4);
root.insert(2);
root.insert(8);
root.insert(7);

/*
root.postOrder();


for (let i = 0; i < (new Array(10)).length; i++){
    const num = i;
    const contains5 = root.contains(num);
    console.log('contains '+num+' : ' + contains5);
}
*/

let groot = new Node(5);
groot.insert(3);
groot.insert(6);
groot.insert(4);
groot.insert(2);
groot.insert(8);
groot.insert(7);

root.postOrder();
console.log(`--- breaker ---`);
groot.postOrder();

function areEquals (node1, node2){
    return Node.equals(node1, node2);
}

const areEq = areEquals(root, groot);
console.log(`root and groot are equal : ${areEq}`);