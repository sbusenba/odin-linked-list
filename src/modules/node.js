class node{
    constructor(){
    this.myData = null;
    this.myNextNode = null;
    }
    get data(){
        return this.myData;
    }
    
    set data(data){

        this.myData = data;
    }
    get nextNode(){
        return this.myNextNode;        
    }
    set nextNode(nextNode){
        this.myNextNode = nextNode;
    }
}

module.exports = node;