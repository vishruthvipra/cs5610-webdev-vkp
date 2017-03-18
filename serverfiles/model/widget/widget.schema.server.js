/**
 * Created by vishruthkrishnaprasad on 11/3/17.
 */
module.exports = function(app, mongoose) {
    var widgetSchema = mongoose.Schema({
        //_page: Reference to Page
        type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT'], required: true},
        name: {type: String, required: true},
        text: {type: String},
        placeholder: {type: String},
        description: {type: String},
        url: {type: String},
        width: {type: String},
        height: {type: String},
        rows: {type: Number},
        size: {type: Number},
        class: {type: String},
        icon: {type: String},
        deletable: {type: Boolean},
        formatted: {type: Boolean},
        //widgets: [Widget],
        dateCreated: {type: Date, default: Date.now}
    });

    return widgetSchema;
};