/**
 * Created by vishruthkrishnaprasad on 14/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", widgetService);

    function widgetService() {
        var autoincr = 500;
        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "LADAKH"},
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Pangong Tso, " +
            "also referred to as Pangong Lake, is an endorheic lake in the Himalayas situated at a height of " +
            "about 4,350 m (14,270 ft)"},

            { "_id": "123", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://s3.india.com/travel/wp-content/uploads/pangong-lake-preset2.jpg"},

            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "HIMALAYAS"}
            ,
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 4, "text":
                "NLST is proposed to be on-axis alt-azimuth Gregorian" +
                "multi-purpose open telescope with the provision of carrying out night time stellar observations using" +
                "a spectrograph which will be located at Ladakh. It hopes to resolve features on the Sun " +
                "of the size of about 0.1 arcsec."},

            { "_id": "123", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://www.youtube.com/AK-MUzWdpjU" },

            { "_id": "123", "widgetType": "HTML", "pageId": "321", "text": "" +
                "The idea was to just stop, stare and admire at the miracles of Nature in the dry desert territory." +
                "This also sounded like the perfect womb for making a timelapse or two." +
                "But alas ...we got addicted!" +
                "The trip spanned over 15 days and we came back with pretty amazing sequences." +
                "Here we present to you our timeless journeys in Ladakh."}
        ];

        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "findAllWidgets": findAllWidgets
        };

        return api;

        function createWidget(pageId, widget) {
            widgets.push({_id: String(autoincr),
                pageId: pageId,
                widgetType: widget.widgetType,
                text: widget.description,
                size: widget.size,
                url: widget.url,
                width: widget.width,
            });
            autoincr++;
            return widgets;
        }

        function findWidgetsByPageId(pageId) {
            for (var wi in widgets) {
                if(widgets[wi].pageId == pageId) {
                    return widgets[wi];
                }
            }
            return null;
        }

        function findWidgetById(widgetId) {
            var sites = [];
            for (var wi in widgets) {
                if(widgets[wi]._id == widgetId) {
                    return angular.copy(widgets[wi]);
                }
            }
            return null;

        }

        function updateWidget(widgetId, widget) {
            for (var wi in widgets) {
                if(widgets[wi]._id == widgetId) {
                    widgets[wi].pageId = widget.pageId;
                    widgets[wi].widgetType = widget.name;
                    widgets[wi].text = widget.description;
                    widgets[wi].size = widget.size;
                    widgets[wi].url = widget.url;
                    widgets[wi].width = widget.width;
                    return widgets[wi];
                }
            }
            return null;

        }

        function deleteWidget(widgetId) {
            for (var wi in widgets) {
                if(widgets[wi]._id == widgetId) {
                    widgets.splice(wi,1);
                    return widgets[wi];
                }
            }
            return null;
        }

        function findAllWidgets(pageId) {
            var widgs = [];
            for (var wi in widgets) {
                if (widgets[wi]._id == pageId)
                    widgs.push(widgets[wi]);
            }
            return widgs;
        }
    }
})();