const anagram = require('./anagram');

test('test the anagram', () => {
  expect(anagram('rew', 'rwe')).toBeTruthy();
});