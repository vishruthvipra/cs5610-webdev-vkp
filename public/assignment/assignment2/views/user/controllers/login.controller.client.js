/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", loginController)
        function loginController(UserService, $location) {
            var vm = this;
            vm.login = login;

            function init() {

            }
            init();

            function login(user) {
                var user = UserService.findUserByCredentials(user.username, user.password);
                if (user != null) {
                    $location.url("user/" + user._id);
                }
                else {
                    vm.error = "Incorrect credentials entered";
                }
            }
        }

})();
