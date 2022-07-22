module.exports.getException = function (username) {
  if (!username) throw new Error("Username is required");

  return { id: 1, userName: username };
};
