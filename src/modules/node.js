let node =()=> {
    let myData = null;
    let myNextNode = null;
    const setData = (data)=>{
        myData = data;
    }
    
    const getData=()=> {

        return myData;
    }
    const setNextNode = (newNextNode)=>
    {
        myNextNode = newNextNode;        
    }
    const nextNode = ()=>{
        return myNextNode;
    }
    return {myData,myNextNode,getData,setData,setNextNode,nextNode};
  }

module.exports = node;