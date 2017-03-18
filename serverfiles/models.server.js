/**
 * Created by vishruthkrishnaprasad on 20/2/17.
 */
module.exports = function (app, mongoose) {
    var userModel = require("./model/user/user.model.server.js")(app, mongoose);
    require("./services/user.service.server")(app, userModel);

    var websiteModel = require("./model/website/website.model.server")(app, mongoose);
    require("./services/website.service.server")(app, websiteModel);

    var pageModel = require("./model/page/page.model.server")(app, mongoose);
    require("./services/page.service.server")(app, pageModel);

    var widgetModel = require("./model/widget/widget.model.server")(app, mongoose);
    require("./services/widget.service.server")(app, widgetModel);
};