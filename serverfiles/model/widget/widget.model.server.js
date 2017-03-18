/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {

    var widgetSchema = require('./widget.schema.server')(app, mongoose);
    var widgetModel = mongoose.model('widgetModel', widgetSchema);

    var api = {
        createUser: createUser
    };
    return api;

    function createUser(widget) {
        console.log("reached here");
        return widgetModel.create(widget);
    }
};
