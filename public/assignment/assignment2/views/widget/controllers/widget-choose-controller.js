/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetChooseController", widgetChooseController);
    function widgetChooseController($routeParams, WidgetService, $location) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.userId = userId;
        var websiteId = $routeParams.wid;
        vm.websiteId = websiteId;
        var widgetId = 10;
        vm.widgetId = widgetId;
        var pageId = $routeParams.pid;
        vm.pageId = pageId;
        vm.createWidget = createWidget;

        function init() {
            WidgetService
                .findAllWidgets(pageId)
                .success(function (widgets) {
                    vm.widgets = widgets;
                });
        }
        init();

        function createWidget(thiswidget, widgettype) {

            var update = WidgetService
                .createWidget(pageId, thiswidget, widgettype)
                .success(function (widget) {
                    if (update != null) {
                        $location.url("user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
                        widgetId++;
                    }
                    else {
                        vm.error = "Unable to update..."
                    }
                });
        }
    }
})();
