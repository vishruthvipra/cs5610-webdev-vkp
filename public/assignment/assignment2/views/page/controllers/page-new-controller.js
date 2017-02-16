/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", pageNewController)
    function pageNewController($routeParams, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pageId = $routeParams.pid;
        var pages = PageService.findAllPages(websiteId);
        vm.websiteId = websiteId;
        vm.userId = userId;
        vm.pages = pages;
        vm.createPage= createPage;

        function init() {

        }
        init();

        function createPage(newPage) {
            var update = PageService.createPage(websiteId, newPage);
            if(update != null)
            {
                vm.message = "Page succesfully addded!"
            }
            else {
                vm.error = "Unable to add the page..."
            }
        }
    }
})();