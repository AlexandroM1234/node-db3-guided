const db = require("../data/db-config");

module.exports = {
  findAll,
  findById,
  addUser,
};

// find all users
function findAll() {
  return db("users");
}

// find user via id
function findById(id) {
  return db("users").where({ id });
}

// add a new user
function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}
