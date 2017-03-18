/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {

    var pageSchema = require('./page.schema.server')(app, mongoose);
    var pageModel = mongoose.model('pageModel', pageSchema);

    var api = {
        createPage: createPage
    };
    return api;

    function createPage(page) {
        console.log("reached here");
        return pageModel.create(page);
    }
};