/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        function WebsiteListController($routeParams, WebsiteService) {
            var vm = this;
            var userId = $routeParams.uid;
            var websites = WebsiteService.findAllWebsites(userId);
            vm.websites = websites;
            vm.userId = userId;
        }
})();