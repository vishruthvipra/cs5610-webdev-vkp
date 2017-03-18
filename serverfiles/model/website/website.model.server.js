/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {

    var websiteSchema = require('./website.schema.server')(app, mongoose);
    var websiteModel = mongoose.model('websiteModel', websiteSchema);

    var api = {
        createUser: createUser
    };
    return api;

    function createUser(website) {
        console.log("reached here");
        return websiteModel.create(website);
    }
};
