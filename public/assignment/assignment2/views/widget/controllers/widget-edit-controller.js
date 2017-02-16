/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", widgetEditController);
        function widgetEditController($routeParams, WidgetService, $location) {
            var vm = this;

            var userId = $routeParams.uid;
            vm.userId = userId;
            var websiteId = $routeParams.wid;
            vm.websiteId = websiteId;
            var widgetId = $routeParams.wgid;
            vm.widgetId = widgetId;
            var pageId = $routeParams.pid;
            vm.pageId = pageId;
            var widgets = WidgetService.findAllWidgets(pageId);

            vm.widgets = widgets;
            vm.deleteWidget = deleteWidget;

            function init() {
                vm.widget = WidgetService.findWidgetById(widgetId);
                vm.updateWidget = updateWidget;
            }
            init();

            function updateWidget(newWidget) {
                var update = WidgetService.updateWidget(widgetId, newWidget);
                if (newWidget.widgetType == "HTML")
                {
                    newWidget.url = "no url";
                    newWidget.width = "no width";
                }
                else if (newWidget.widgetType == "HEADER"){
                    newWidget.url = "no url";
                    newWidget.width = "no width";
                    newWidget.size = "no size";
                }
                else if (newWidget.widgetType == "IMAGE"){
                    newWidget.size = "no size";
                }
                else {
                    newWidget.size = "no size";
                }
                if(update != null)
                {
                    vm.message = "Widget succesfully updated!"
                }
                else {
                    vm.error = "Unable to update..."
                }
            }

            function deleteWidget() {
                var update = WidgetService.deleteWidget(widgetId);
                if(update != null)
                {
                    $location.url("user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
                }
                else {
                    vm.error = "Unable to update..."
                }
            }
        }
})();
