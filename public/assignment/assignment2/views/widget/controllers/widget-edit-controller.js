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

            vm.deleteWidget = deleteWidget;

            function init() {
                WidgetService
                    .findAllWidgets(pageId)
                    .success(function (widgets) {
                        console.log(widgets + "\n \n \n");
                        vm.widgets = widgets;
                    });
                WidgetService
                    .findWidgetById(widgetId)
                    .success(function (widget) {
                        console.log(widget + "\n \n \n");
                        vm.widget = widget;
                    });
                vm.updateWidget = updateWidget;
            }

            init();

            function updateWidget(newWidget) {
                var update = WidgetService
                    .updateWidget(widgetId, newWidget)
                    .success(function (widget) {
                        if (newWidget.widgetType == "HTML") {
                            newWidget.url = "no url";
                            newWidget.width = "no width";
                        }
                        else if (newWidget.widgetType == "HEADER") {
                            newWidget.url = "no url";
                            newWidget.width = "no width";
                            newWidget.size = "no size";
                        }
                        else if (newWidget.widgetType == "IMAGE") {
                            newWidget.size = "no size";
                        }
                        else {
                            newWidget.size = "no size";
                        }

                    });
                if (update != null) {
                    vm.message = "Widget succesfully updated!"
                }
                else {
                    vm.error = "Unable to update..."
                }
            }

            function deleteWidget() {
                var update = WidgetService
                    .deleteWidget(widgetId)
                    .success(function (widget) {
                        if (update != null) {
                            $location.url("user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
                        }
                        else {
                            vm.error = "Unable to update..."
                        }
                    });
            }
        }
})();
