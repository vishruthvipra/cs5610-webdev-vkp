/**
 * Created by vishruthkrishnaprasad on 11/2/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

        function PageService() {
            var autoincr = 600;
            var pages = [
                {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
                {"_id": "432", "name": "Post 2", "websiteId": "789", "description": "Lorem"},
                {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"},
                {"_id": "430", "name": "Post 10", "websiteId": "789", "description": "Lorem"}
            ];


            var api = {
                "createPage": createPage,
                "findPageByWebsiteId": findPageByWebsiteId,
                "findPageById": findPageById,
                "updatePage": updatePage,
                "deletePage": deletePage,
                "findAllPages": findAllPages
            };

            return api;
            function createPage(websiteId, page) {
                pages.push({_id: String(autoincr),
                    name: page.name,
                    websiteId: websiteId,
                    description: page.description});
                autoincr++;
                return pages;
            }

            function findPageByWebsiteId(websiteId) {
                for (var p in pages) {
                    if (pages[p].websiteId == websiteId) {
                        return pages[p];
                    }
                }
                return null;
            }

            function findPageById(pageId) {
                var sites = [];
                for (var p in pages) {
                    if (pages[p]._id == pageId) {
                        return angular.copy(pages[p]);
                    }
                }
                return null;
            }

            function updatePage(pageId, page) {
                for (var p in pages) {
                    if (pages[p]._id == pageId) {
                        pages[p].name = page.name;
                        pages[p].description = page.description;
                        return pages[p];
                    }
                }
                return null;

            }

            function deletePage(pageId) {
                for (var p in pages) {
                    if (pages[p]._id == pageId) {
                        pages.splice(p, 1);
                        return pages[p];
                    }
                }
                return null;
            }

            function findAllPages(websiteId) {
                var sites = [];
                for (var p in pages) {
                    if (websiteId == pages[p].websiteId) {
                        sites.push(pages[p])
                    }
                }
                return sites;
            }
        }
})();