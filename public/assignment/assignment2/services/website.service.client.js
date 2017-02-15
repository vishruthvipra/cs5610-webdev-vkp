/**
 * Created by vishruthkrishnaprasad on 12/2/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("WebsiteService", WebsiteService)
        function WebsiteService() {
        var autoincr = 800;
            var websites = [
                { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
                { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];

            var api = {
                "createWebsite": createWebsite,
                "findWebsiteByUser": findWebsiteByUser,
                "findWebsiteById": findWebsiteById,
                "updateWebsite": updateWebsite,
                "deleteWebsite": deleteWebsite,
                "findAllWebsites": findAllWebsites
            }
            return api;

            function createWebsite(userId, website) {
                websites.push({_id: String(autoincr),
                    name: website.name,
                    developerId: userId,
                    description: website.description});
                autoincr++;
                return websites;
            }

            function findWebsiteByUser(userId) {
                for (var w in websites) {
                    if(userId == websites[w].developerId) {
                        return websites[w];
                    }
                }
                return null;
            }

            function findWebsiteById(websiteId) {
                var sites = [];
                for (var w in websites) {
                    if(websiteId == websites[w]._id) {
                        return angular.copy(websites[w]);
                    }
                }
                return null;
            }
            
            function updateWebsite(websiteId, website) {
                for (var w in websites) {
                    if(websites[w]._id == websiteId) {
                        websites[w].name = website.name;
                        websites[w].description = website.description;
                        return websites[w];
                    }
                }
                return null;
            }
            
            function deleteWebsite(websiteId) {
                for (var w in websites) {
                    if(websites[w]._id == websiteId) {
                        websites.splice(w,1);
                        return websites[w];
                    }
                }
                return null;
            }
            
            function findAllWebsites(userId) {
                var sites = [];
                for (var w in websites) {
                    if(userId == websites[w].developerId) {
                        sites.push(websites[w])
                    }
                }
                return sites;
            }
        }
})();