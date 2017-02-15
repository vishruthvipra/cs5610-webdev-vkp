/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);
        function WebsiteEditController($routeParams, WebsiteService, $location) {
            var vm = this;
            var userId = $routeParams.uid;
            var websiteId = $routeParams.wid;

            var websites = WebsiteService.findAllWebsites(userId);
            vm.websites = websites;
            vm.userId = userId;
            vm.deleteWebsite = deleteWebsite;

            function init() {
                vm.website = WebsiteService.findWebsiteById(websiteId);
                vm.updateWebsite = updateWebsite;
            }
            init();

            function updateWebsite(newWebsite) {
                var update = WebsiteService.updateWebsite(websiteId, newWebsite);
                if(update != null)
                {
                    vm.message = "Website succesfully updated!"
                }
                else {
                    vm.error = "Unable to update..."
                }
            }

            function deleteWebsite() {
                var update = WebsiteService.deleteWebsite(websiteId);
                if(update != null)
                {
                    $location.url("user/" + userId + "/website");
                }
                else {
                    vm.error = "Unable to update..."
                }
            }
        }
})();