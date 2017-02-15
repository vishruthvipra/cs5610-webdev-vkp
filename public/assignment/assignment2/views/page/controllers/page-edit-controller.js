/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", pageEditController);
        function pageEditController($routeParams, PageService, $location) {
            var vm = this;
            var userId = $routeParams.uid;
            var websiteId = $routeParams.wid;
            var pageId = $routeParams.pid;

            var pages = PageService.findAllPages(websiteId);
            vm.pages = pages;
            vm.userId = userId;
            vm.websiteId = websiteId;
            vm.deletePage = deletePage;

            function init() {
                vm.page = PageService.findPageById(pageId);
                vm.updatePage = updatePage;
            }
            init();

            function updatePage(newPage) {
                var update = PageService.updatePage(pageId, newPage);
                if(update != null)
                {
                    vm.message = "Page succesfully updated!"
                }
                else {
                    vm.error = "Unable to update..."
                }
            }

            function deletePage() {
                var update = PageService.deletePage(pageId);
                if(update != null)
                {
                    $location.url("user/" + userId + "/website/" + websiteId + "/page");
                }
                else {
                    vm.error = "Unable to update..."
                }
            }
        }
})();