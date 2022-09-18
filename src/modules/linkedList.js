const node = require('./node')

const linkedList = () => {
    let myHead = new node();
    
    const head = ()=>{
        //returns head
        return myHead;
    }
    
    const tail = ()=>{
        //returns last node in list       
        const recGetTail = (possibleLastNode)=>{
            if (possibleLastNode.nextNode != null){
                return recGetTail(possibleLastNode.nextNode)
            } else {
                return possibleLastNode;
            }

        }
        return recGetTail(myHead)
    }

    const append = (value)=>{
        //add node with value to end of list
        if (head().data == null){
            head().data = value
        } else {
            let newNode = new node()
            newNode.data = value
            tail().nextNode =newNode
        }
    }
    const prepend = (value)=>{
        // add node with value to start of list
        let newNode= new node()
        newNode.data = value
        newNode.nextNode =head()
        myHead = newNode;
    }
    const size = ()=>{
        //returns number of nodes in list
        const recGetSize= (node,size)=>{
            if (node.nextNode==null){
                return size;
            } else {
                return recGetSize(node.nextNode,size+1)
            }

        }

        if (myHead.data == null){
            return 0;
        }else {
            return recGetSize(myHead,1)
        }
    
    }

    const at = (index)=>{
        //returns node at index
        console.table(myHead)
        const recAtIndex = (node,nodeIndex)=>{
            console.log(nodeIndex)
            if (index == nodeIndex){
                return node;
            } else if (node.nextNode){
                return recAtIndex(node.nextNode,nodeIndex+1)
            }
        }
        return recAtIndex(myHead,0)

    }
    const pop =()=>{
        //removes last element from list
        let lastNode = tail()
        let secondToLastNode = at(size()-2);
        secondToLastNode.nextNode =null;
        return lastNode;
    }
    const contains= (value)=>{
        //returns true if value is in list
        const recContains = (node)=>{
            if (node.data == value){
                return true
            } else if ((node.data != value) && (node.nextNode== null)){
                return  false;              
            } else if ((node.data != value) && (node.nextNode!= null)){
                return recContains(node.nextNode)
            }
        }
        return recContains(head());

    }
    const find = (value)=>{
        //returns index of node with value of value
        const recContains = (node,index)=>{
            if (node.data == value){
                return index;
            } else if ((node.data != value) && (node.nextNode== null)){
                return  "-1";              
            } else if ((node.data != value) && (node.nextNode!= null)){
                return recContains(node.nextNode,index+1)
            }
        }
        return recContains(head(),0);
    }
    const toString =()=>{
        // displays linked list as string
        myString = 'HEAD '
        const recToString =(myNode)=>{
            myString += `( ${myNode.data} ) => `           
            if (myNode.nextNode) {
                return recToString(myNode.nextNode)
            } else {
                
            }
            
        }
        recToString(myHead)
        return myString+ "TAIL";
    }
    //extra credit:
    const insertAt = (value,index)=>{
        //insert new node with value of value at index
        let newNode = new node()
        newNode.data = value
        if (index>0){
            let previousNode =  at(index-1)
            console.log(previousNode.data)
            let nextNode = previousNode.nextNode
            newNode.nextNode =nextNode
            previousNode.nextNode =newNode
        } else{
            newNode.nextNode =myHead
            myHead = newNode
        }
        




    }
    const removeAt = (index) =>{
        //removes the node at Index
        
        if ((index > 0)&&(index<size()-1)){
            let previousNode =  at(index-1)
            let nextNode = previousNode.nextNode.nextNode;
            previousNode.nextNode =nextNode
        } else if (index == 0){
            myHead = myHead.nextNode
        } else if (index == size()-1){
            let previousNode =  at(index-1)
            previousNode.nextNode =null
        }
    }
    return {append,prepend,size,head,tail,
            at,pop,contains,find,toString, 
            insertAt,removeAt}
}

module.exports = linkedList; 