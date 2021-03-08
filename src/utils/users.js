const users = [];
//addUser, removeUser, getUser, getUserInRoom
const addUser = ({ id, username, room }) => {
  //Clean the data

  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required !",
    };
  }

  //Check for the existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //Validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }
  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
// addUser({
//   id: 22,
//   username: "Andrew  ",
//   room: "   South Phily",
// });
//console.log(users);
//const removedUser = removeUser(22);
//console.log(removedUser);
//console.log(users);

// const res = addUser({
//   id: 33,
//   username: " ",
//   room: " ",
// });

// console.log(res);
// const res1 = addUser({
//   id: 33,
//   username: "Andrew",
//   room: "South Philly",
// });
// console.log(res1);

// addUser({
//   id: 42,
//   username: "Mike",
//   room: "South Phily",
// });

// addUser({
//   id: 32,
//   username: "Andrew",
//   room: "Center City",
// });

const getUser = function (id) {
  return users.find((user) => user.id === id);
};
const user = getUser(32);
//console.log(user);

const getUsersInRoom = function (room) {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};
const userList = getUsersInRoom("South Phily");
//console.log(userList);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
