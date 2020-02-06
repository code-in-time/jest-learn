const functions = {
  add: (n1, n2) => n1 + n2,

  isNull: () => null,

  checkValue: x => x,

  nothing: c => { let s= 1 + 1;},

  createUser: () => {
    const user = {firstName: 'Brad'};
    user['lastName'] = 'test';
    return user;
  }
}

module.exports = functions;