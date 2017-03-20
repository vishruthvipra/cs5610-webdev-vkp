/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {
    var q = require('q');
    var websiteSchema = require('./website.schema.server')(app, mongoose);
    var websiteModel = mongoose.model('websiteModel', websiteSchema);

    var api = {
        createWebsiteForUser: createWebsiteForUser,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        findWebsiteByName: findWebsiteByName,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;

    function createWebsiteForUser(userId, website) {
        var deferred = q.defer();
        websiteModel.create(website, function (err, status) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;

        //console.log("reached here");
        //return websiteModel.create(website);
    }

    function findAllWebsitesForUser(userId) {
        return websiteModel.find({_user: userId});
        //return websiteModel.findById(userId);
    }

    function findWebsiteById(websiteId) {
        return websiteModel.findById(websiteId);
    }

    function findWebsiteByName(name) {
        return websiteModel.findOne({name: name});
    }

    function updateWebsite(websiteId, website) {
        return websiteModel.update({_id: websiteId}, {$set: website});
    }

    function deleteWebsite(websiteId) {
        return websiteModel.remove({_id: websiteId});
    }

};
