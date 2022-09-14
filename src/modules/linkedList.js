const node = require('./node')

const linkedList = () => {
    let myHead = node();
    
    const head = ()=>{
        //returns head
        return myHead;
    }
    
    const tail = ()=>{
        //returns last node in list       
        const recGetTail = (possibleLastNode)=>{
            if (possibleLastNode.nextNode() != null){
                return recGetTail(possibleLastNode.nextNode())
            } else {
                return possibleLastNode;
            }

        }
        return recGetTail(myHead)
    }

    const append = (value)=>{
        //add node with value to end of list
        if (head().getData() == null){
            head().setData(value)
        } else {
            let newNode = node()
            newNode.setData(value)
            tail().setNextNode(newNode)
        }
    }
    const prepend = (value)=>{
        // add node with value to start of list
        let newNode= node()
        newNode.setData(value)
        newNode.setNextNode(head())
        myHead = newNode;
    }
    const size = ()=>{
        //returns number of nodes in list
        const recGetSize= (node,size)=>{
            if (node.nextNode()==null){
                return size;
            } else {
                return recGetSize(node.nextNode(),size+1)
            }

        }

        if (myHead.getData() == null){
            return 0;
        }else {
            return recGetSize(myHead,1)
        }
    
    }

    const at = (index)=>{
        //returns node at index
        const recAtIndex = (node,nodeIndex)=>{
            if (index == nodeIndex){
                return node;
            } else if (node.nextNode()){
                return recAtIndex(node.nextNode(),nodeIndex+1)
            }
        }
        return recAtIndex(myHead,0)

    }
    const pop =()=>{
        //removes last element from list
        
    }
    const contains= (value)=>{
        //returns true if value is in list
    }
    const find = (value)=>{
        //returns index of node with value of value
    }
    const toString =()=>{
        // displays linked list as string
        myString = 'HEAD '
        const recToString =(myNode)=>{
            myString += `( ${myNode.getData()} ) => `           
            if (myNode.nextNode()) {
                return recToString(myNode.nextNode())
            } else {
                
            }
            
        }
        recToString(myHead)
        return myString+ "TAIL";
    }
    //extra credit:
    const insertAt = (value,index)=>{
        //insert new node with value of value at index
    }
    const removeAt = (index) =>{
        //removes the node at Index
    }
    return {append,prepend,size,head,tail,
            at,pop,contains,find,toString, 
            insertAt,removeAt}
}

module.exports = linkedList; 