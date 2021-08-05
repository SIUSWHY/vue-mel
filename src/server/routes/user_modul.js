const createUser = (data) => {
  const user = new User(data);

  return user;
};

module.exports = {
  createUser,
};
