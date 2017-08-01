const expect = require('expect');

const {Users} = require ('./users');
describe('Users', () => {
 var users;
beforeEach (() => {
  users = new Users();
  users.users  = [{
    id: '1',
    name: 'mohamed',
    room:'Node Course'
  },
{
  id: '2',
  name: 'mohsamed',
  room:'Nodes course'

},
{
  id: '3',
    name: 'carab',
    room:'Node Course'}
  ]
});

it('should add new user', () => {
  var users = new Users ();
  var user = {
    id: '123',
    name: 'mohamed',
    room:' the offce fans'
  };
  var resUsers = users.addUser(user.id, user.name, user.room);
  expect(users.users).toEqual([user]);
});

it('should remover user', () => {
  var userId = '2';
  var user = users.removeUser(userId);

  expect(user.id).toBe(userId);
  expect(users.users.length).toBe(2);
})


it('should get  user', () => {
  var userId = '2';
  var user = users.getUser(userId);
  expect(user.id).toBe(userId);
});


it('should getnot   user', () => {
  var userId = '44';
  var user = users.getUser(userId);
  expect(user).toNotExist();
});


it('should return for node course', () => {
  var userlist =users.getUserList('Node Course');
  expect(userlist).toEqual(['mohamed', 'carab']);
});
});
