/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function (app, mongoose) {
    require("./user/user.model.server.js")(app, mongoose);
    require("./user/user.schema.server.js")(app, mongoose);

    require("./user/website.model.server")(app, mongoose);
    require("./user/website.schema.server")(app, mongoose);

    require("./user/page.model.server")(app, mongoose);
    require("./user/page.schema.server")(app, mongoose);

    require("./user/widget.model.server")(app, mongoose);
    require("./user/widget.schema.server")(app, mongoose);
};