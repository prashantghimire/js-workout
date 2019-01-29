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

root.postOrder();


for (let i = 0; i < (new Array(10)).length; i++){
    const num = i;
    const contains5 = root.contains(num);
    console.log('contains '+num+' : ' + contains5);
}