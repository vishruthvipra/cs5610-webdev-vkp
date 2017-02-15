/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", registerController)
    function registerController(UserService, $location) {
        var vm = this;
        vm.register = register;

        function init() {

        }
        init();


        function register(user) {
            var reg = UserService.createUser(user);
            if (reg != null) {
                $location.url("user/" + reg._id);

            }
            else {
                vm.error = "Incorrect credentials entered";
            }
        }
    }

})();
