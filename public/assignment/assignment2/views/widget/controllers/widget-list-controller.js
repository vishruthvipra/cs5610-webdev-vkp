/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", widgetListController);
    function widgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.doYouTrustUrl = doYouTrustUrl;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgets = WidgetService.findAllWidgets(vm.pageId);

        function doYouTrustUrl(url) {
            var baseUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            var id = urlParts[urlParts.length - 1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }
    }
})();
