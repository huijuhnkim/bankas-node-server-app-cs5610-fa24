import model from "./model.js"
// let { users } = db;

export const createUser = (user) => {};

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({username: username})
export const findUserByCredentials = (username, password) => model.findOne({username, password})
export const updateUser = (userId, user) => model.updateOne({id: userId, $set: user})
export const deleteUser = (userId) => model.deleteOne({id: userId})
