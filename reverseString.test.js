const reverseString = require('./reverseString')


test('see if it is defined', () => {
  expect(reverseString).toBeDefined();
})

test('Should reverse a string', () => {

  expect(reverseString('abcdefghi')).toEqual('ihgfedcba');
})