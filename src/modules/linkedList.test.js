const linkedList = require('./linkedList');

test('linkedlist() returns object', () => {
  expect(linkedList()).toBeTruthy();
});

/*describe('LinkedList ', () => {
    let myList = linkedList();
    beforeEach(() => {
      myList.append('first Node')
      console.log(myList.head().getData())
      myList.append('second Node')
      console.log(myList.head().nextNode().getData())
      myList.append('third Node')

      return myList;
    });
  


  });
*/  
