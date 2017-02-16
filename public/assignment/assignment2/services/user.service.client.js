/**
 * Created by vishruthkrishnaprasad on 11/2/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", userService);

    function userService() {
        var autoincr = 500;
        var users = [
                {_id: "123", username: "alice",    email: "alice@wonderland.com", password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      email: "bob@marley.com", password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   email: "charly@garcia.com", password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", email: "jannunzi@jose.com", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };

        return api;

        function createUser(user) {
            users.push({_id: String(autoincr),
                username: user.username,
                email: user.email,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName});
            autoincr++;
            return users[users.length - 1];
        }

        function findUserById(userId) {
            for (var u in users) {
                if(users[u]._id == userId) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (var u in users) {
                if(users[u].username == username) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                if((users[u].username == username) && (users[u].password == password)) {
                    return users[u];
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            for (var u in users) {
                if(users[u]._id == userId) {
                    users[u].firstName = user.firstName;
                    users[u].email = user.email;
                    users[u].lastName = user.lastName;
                    return users[u];
                }
            }
            return null;
        }

        function deleteUser(userId) {
            for (var u in users) {
                if(users[u]._id == userId) {
                    users.splice(u,1);
                    return users[u];
                }
            }
            return null;
        }
    }
})();