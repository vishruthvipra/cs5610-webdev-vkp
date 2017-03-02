/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", widgetService);

    function widgetService($http) {
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "findAllWidgets": findAllWidgets,
            "findWidgetByWidgetName": findWidgetByWidgetName
        };

        return api;

        function createWidget(pageId, widgettype) {
            var widgettypeObj = [widgettype];
            return $http.post("/api/page/" + pageId + "/widget", widgettypeObj);
        }

        function findWidgetsByPageId(pageId) {
            return $http.get("/api/page/" + pageId);
        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/" + widgetId);
        }

        function updateWidget(pageId, widget) {
            return $http.put("/api/page/" + pageId, widget);
        }

        function deleteWidget(pageId, widget) {
            return $http.delete("/api/widget/" + pageId, widget);
        }

        function findAllWidgets(pageId) {
            return $http.get("/api/page/" + pageId + "/widget");
        }

        function findWidgetByWidgetName(pageId, name) {
            return $http.get("/api/page/" + pageId + "/widget?name=" + name);
        }
    }

    //     function createWidget(pageId, widget, widgettype) {
    //         widgets.push({_id: String(autoincr),
    //             pageId: pageId,
    //             widgetType: widgettype,
    //             text: "no description",
    //             size: "no size",
    //             url: "no url",
    //             width: "no width"
    //         });
    //         autoincr++;
    //         return widgets;
    //     }
    //
    //     function findWidgetsByPageId(pageId) {
    //         for (var wi in widgets) {
    //             if(widgets[wi].pageId == pageId) {
    //                 return widgets[wi];
    //             }
    //         }
    //         return null;
    //     }
    //
    //     function findWidgetById(widgetId) {
    //         var sites = [];
    //         for (var wi in widgets) {
    //             if(widgets[wi]._id == widgetId) {
    //                 return angular.copy(widgets[wi]);
    //             }
    //         }
    //         return null;
    //
    //     }
    //
    //     function updateWidget(widgetId, widget) {
    //         for (var wi in widgets) {
    //             if(widgets[wi]._id == widgetId) {
    //                 // widgets[wi]._id = widget._id;
    //                 // widgets[wi].widgetType = widget.widgetType;
    //                 widgets[wi].text = widget.text;
    //                 widgets[wi].size = widget.size;
    //                 widgets[wi].url = widget.url;
    //                 widgets[wi].width = widget.width;
    //                 return widgets[wi];
    //             }
    //         }
    //         return null;
    //
    //     }
    //
    //     function deleteWidget(widgetId) {
    //         for (var wi in widgets) {
    //             if(widgets[wi]._id == widgetId) {
    //                 widgets.splice(wi,1);
    //                 return widgets[wi];
    //             }
    //         }
    //         return null;
    //     }
    //
    //     function findAllWidgets(pageId) {
    //         var widgs = [];
    //         for (var wi in widgets) {
    //             if (widgets[wi].pageId == pageId)
    //                 widgs.push(widgets[wi]);
    //         }
    //         return widgs;
    //     }
    // }
})();