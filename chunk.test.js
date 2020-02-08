
const chunkArr = require('./chunk');

test('see chunkArr is defined', () => {
  expect(chunkArr).toBeDefined();
})

test('chunk an array of 10 valies with alength of 2', () => {
    const arr = [1,2,3,4,5,6,7,8,9,0];
    const c = chunkArr(arr, 2);
    expect(c).toEqual([[1,2], [3,4], [5,6], [7,8], [9,0]]);
})