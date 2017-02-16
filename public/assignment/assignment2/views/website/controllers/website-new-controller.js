/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", websiteNewController)
    function websiteNewController($routeParams, WebsiteService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var websites = WebsiteService.findAllWebsites(userId);
        vm.websites = websites;
        vm.userId = userId;
        vm.createWebsite= createWebsite;

        function init() {

        }
        init();

        function createWebsite(newWebsite) {
            var update = WebsiteService.createWebsite(userId, newWebsite);
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