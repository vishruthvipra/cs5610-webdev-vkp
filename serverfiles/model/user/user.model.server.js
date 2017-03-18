/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {

    var userSchema = require('./user.schema.server')(app, mongoose);
    var userModel = mongoose.model('userModel', userSchema);

    var api = {
        createUser: createUser
    };
    return api;

    function createUser(user) {
        console.log("reached here");
        return userModel.create(user);
    }
};

//
// userModel.create({username: "alice",    email: "alice@wonderland.com", password: "alice",    firstName: "Alice",  lastName: "Wonder"});
// userModel.create({username: "bob",      email: "bob@marley.com", password: "bob",      firstName: "Bob",    lastName: "Marley"});
// userModel.create({username: "charly",   email: "charly@garcia.com", password: "charly",   firstName: "Charly", lastName: "Garcia"});
// userModel.create({username: "jannunzi", email: "jannunzi@jose.com", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi"});
//