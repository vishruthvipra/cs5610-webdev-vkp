/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function(app, mongoose) {
    var websiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
        name: {type: String, required: true},
        description: {type: String},
        //pages: [Page],
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'WebsiteModel'});

    return websiteSchema;
};


