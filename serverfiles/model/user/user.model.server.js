/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {

    var userSchema = require('./user.schema.server')(app, mongoose);
    var userModel = mongoose.model('userModel', userSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;

    function createUser(user) {
        return userModel.create(user);
    }

    function findUserById(userId) {
        return userModel.findById(userId);
    }

    function findUserByUsername(username) {
        return userModel.findOne({username: username});
    }

    function findUserByCredentials(username, password) {
        return userModel.findOne({username: username, password: password});
    }

    function updateUser(userId, user) {
        return userModel.update({_id: userId}, {$set: user});
    }

    function deleteUser(userId) {
        return userModel.remove({_id: userId});
    }

};

//
// userModel.create({username: "alice",    email: "alice@wonderland.com", password: "alice",    firstName: "Alice",  lastName: "Wonder"});
// userModel.create({username: "bob",      email: "bob@marley.com", password: "bob",      firstName: "Bob",    lastName: "Marley"});
// userModel.create({username: "charly",   email: "charly@garcia.com", password: "charly",   firstName: "Charly", lastName: "Garcia"});
// userModel.create({username: "jannunzi", email: "jannunzi@jose.com", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi"});
//