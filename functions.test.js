const functions = require('./functions');


test('Add 2 plus 2 to = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 plus 2 to no = 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('to be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('it should be  false', () => {
  expect(functions.checkValue(false)).toBeFalsy()
});

test('it should be  true', () => {
  expect(functions.checkValue(true)).toBeTruthy()
});

test('it should be  undefined', () => {
  expect(functions.nothing()).toBeUndefined();
});

test('it should be  user brad test', () => {
  expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'test'});
});

test('should be under 1600', () => {
  expect(1).toBeGreaterThan(0)
})
test('1 should be greater than 0', () => {
  expect(1).toBeGreaterThan(0)
})

test('1 should be less than 2', () => {
  expect(1).toBeLessThan(2)
})

test('There must not be an I in team', () => {
  expect('team').not.toMatch(/[i]+/i)
})

test('Admin should be in usernames', () => {

  const usernames = ['admin', 'rwe', 'jkjkj', 'dfdf']
  expect(usernames).toContain('admin');
})

// Async data promise
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// Async await
test('user fetched name should be Leanne Graham ....',  async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
})