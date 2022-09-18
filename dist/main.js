/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const linkedList = __webpack_require__(/*! ./modules/linkedList */ \"./src/modules/linkedList.js\")\nlet myLinkedList = linkedList();\nconsole.log('list created')\nmyLinkedList.append('node 1')\nconsole.log(myLinkedList.toString())\nmyLinkedList.prepend('node 0')\nconsole.log(myLinkedList.toString())\nmyLinkedList.append('node 2')\nconsole.log(myLinkedList.toString())\nmyLinkedList.append('node 3')\nconsole.log(myLinkedList.toString())\nconsole.table(myLinkedList.pop())\nconsole.log(myLinkedList.toString())\nconsole.log(myLinkedList.size())\nconsole.table(myLinkedList.at(1))\nconsole.table(myLinkedList.head())\nconsole.log(myLinkedList.contains('node 1'))\nconsole.log(myLinkedList.find('node 2'))\nconsole.log(myLinkedList.contains('node 7'))\nconsole.log(myLinkedList.find('node 7'))\nmyLinkedList.insertAt('node x',0)\nconsole.log(myLinkedList.toString())\nmyLinkedList.removeAt(3)\nconsole.log(myLinkedList.toString())\n\n\n//# sourceURL=webpack://odin-linked-lists/./src/index.js?");

/***/ }),

/***/ "./src/modules/linkedList.js":
/*!***********************************!*\
  !*** ./src/modules/linkedList.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const node = __webpack_require__(/*! ./node */ \"./src/modules/node.js\")\n\nconst linkedList = () => {\n    let myHead = new node();\n    \n    const head = ()=>{\n        //returns head\n        return myHead;\n    }\n    \n    const tail = ()=>{\n        //returns last node in list       \n        const recGetTail = (possibleLastNode)=>{\n            if (possibleLastNode.nextNode != null){\n                return recGetTail(possibleLastNode.nextNode)\n            } else {\n                return possibleLastNode;\n            }\n\n        }\n        return recGetTail(myHead)\n    }\n\n    const append = (value)=>{\n        //add node with value to end of list\n        if (head().data == null){\n            head().data = value\n        } else {\n            let newNode = new node()\n            newNode.data = value\n            tail().nextNode =newNode\n        }\n    }\n    const prepend = (value)=>{\n        // add node with value to start of list\n        let newNode= new node()\n        newNode.data = value\n        newNode.nextNode =head()\n        myHead = newNode;\n    }\n    const size = ()=>{\n        //returns number of nodes in list\n        const recGetSize= (node,size)=>{\n            if (node.nextNode==null){\n                return size;\n            } else {\n                return recGetSize(node.nextNode,size+1)\n            }\n\n        }\n\n        if (myHead.data == null){\n            return 0;\n        }else {\n            return recGetSize(myHead,1)\n        }\n    \n    }\n\n    const at = (index)=>{\n        //returns node at index\n        console.table(myHead)\n        const recAtIndex = (node,nodeIndex)=>{\n            console.log(nodeIndex)\n            if (index == nodeIndex){\n                return node;\n            } else if (node.nextNode){\n                return recAtIndex(node.nextNode,nodeIndex+1)\n            }\n        }\n        return recAtIndex(myHead,0)\n\n    }\n    const pop =()=>{\n        //removes last element from list\n        let lastNode = tail()\n        let secondToLastNode = at(size()-2);\n        secondToLastNode.nextNode =null;\n        return lastNode;\n    }\n    const contains= (value)=>{\n        //returns true if value is in list\n        const recContains = (node)=>{\n            if (node.data == value){\n                return true\n            } else if ((node.data != value) && (node.nextNode== null)){\n                return  false;              \n            } else if ((node.data != value) && (node.nextNode!= null)){\n                return recContains(node.nextNode)\n            }\n        }\n        return recContains(head());\n\n    }\n    const find = (value)=>{\n        //returns index of node with value of value\n        const recContains = (node,index)=>{\n            if (node.data == value){\n                return index;\n            } else if ((node.data != value) && (node.nextNode== null)){\n                return  \"-1\";              \n            } else if ((node.data != value) && (node.nextNode!= null)){\n                return recContains(node.nextNode,index+1)\n            }\n        }\n        return recContains(head(),0);\n    }\n    const toString =()=>{\n        // displays linked list as string\n        myString = 'HEAD '\n        const recToString =(myNode)=>{\n            myString += `( ${myNode.data} ) => `           \n            if (myNode.nextNode) {\n                return recToString(myNode.nextNode)\n            } else {\n                \n            }\n            \n        }\n        recToString(myHead)\n        return myString+ \"TAIL\";\n    }\n    //extra credit:\n    const insertAt = (value,index)=>{\n        //insert new node with value of value at index\n        let newNode = new node()\n        newNode.data = value\n        if (index>0){\n            let previousNode =  at(index-1)\n            console.log(previousNode.data)\n            let nextNode = previousNode.nextNode\n            newNode.nextNode =nextNode\n            previousNode.nextNode =newNode\n        } else{\n            newNode.nextNode =myHead\n            myHead = newNode\n        }\n        \n\n\n\n\n    }\n    const removeAt = (index) =>{\n        //removes the node at Index\n        \n        if ((index > 0)&&(index<size()-1)){\n            let previousNode =  at(index-1)\n            let nextNode = previousNode.nextNode.nextNode;\n            previousNode.nextNode =nextNode\n        } else if (index == 0){\n            myHead = myHead.nextNode\n        } else if (index == size()-1){\n            let previousNode =  at(index-1)\n            previousNode.nextNode =null\n        }\n    }\n    return {append,prepend,size,head,tail,\n            at,pop,contains,find,toString, \n            insertAt,removeAt}\n}\n\nmodule.exports = linkedList; \n\n//# sourceURL=webpack://odin-linked-lists/./src/modules/linkedList.js?");

/***/ }),

/***/ "./src/modules/node.js":
/*!*****************************!*\
  !*** ./src/modules/node.js ***!
  \*****************************/
/***/ ((module) => {

eval("class node{\n    constructor(){\n    this.myData = null;\n    this.myNextNode = null;\n    }\n    get data(){\n        return this.myData;\n    }\n    \n    set data(data){\n\n        this.myData = data;\n    }\n    get nextNode(){\n        return this.myNextNode;        \n    }\n    set nextNode(nextNode){\n        this.myNextNode = nextNode;\n    }\n}\n\nmodule.exports = node;\n\n//# sourceURL=webpack://odin-linked-lists/./src/modules/node.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;