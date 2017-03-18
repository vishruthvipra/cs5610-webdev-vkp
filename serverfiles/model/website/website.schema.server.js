/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function(app, mongoose) {
    var websiteSchema = mongoose.Schema({
        //_user: Refernce to User
        name: {type: String, required: true},
        description: {type: String},
        //pages: [Page],
        dateCreated: {type: Date, default: Date.now}
    });

    return websiteSchema;
};


