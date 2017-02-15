/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", profileController)
        function profileController($routeParams, UserService) {
            var vm = this;
            var userId = $routeParams["uid"];

            function init() {
                var user = UserService.findUserById(userId);
                vm.user = user;
                vm.updateUser = updateUser;
            }
            init();

            function updateUser(newUser) {
                var update = UserService.updateUser(userId, newUser);
                if(update != null)
                {
                    vm.message = "User succesfully updated!"
                }
                else {
                    vm.error = "Unable to update..."
                }
            }
        }

})();