const node = require('./node');

test('node.getData returns data', () => {
  expect(node()).toBeTruthy();
});

describe('node behavior ', () => {
  let myNode = node();
  beforeEach(() => {
    myNode.setData('data')
    myNode.setNextNode('second Node pointer')

    return myNode;
  });

  test('retrieves data', () => {
    expect(myNode.getData()).toBe('data');
  });
  test('gets nextnode', () => {
      expect(myNode.nextNode()).toBe('second Node pointer');
    });
 

});
