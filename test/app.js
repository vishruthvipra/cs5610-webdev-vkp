module.exports = function(app,mongoose)
{
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);


 	/*if(process.env.MONGODB_URI){
    	connectionString = process.env.MONGODB_URI
 	}
 	*/
 	//var connectionString = 'mongodb://assgn-user:assgn-pass@ds129090.mlab.com:29090/assgn';

    // if(process.env.MLAB_USERNAME) {
    //     connectionString = process.env.MLAB_USERNAME + ":" +
    //         process.env.MLAB_PASSWORD + "@" +
    //         process.env.MLAB_HOST + ':' +
    //         process.env.MLAB_PORT + '/' +
    //         process.env.MLAB_APP_NAME;
    // }




    var TestSchema = mongoose.Schema({
        message: String
    });

    var TestModel = mongoose.model("TestModel", TestSchema);

    function findAllMessages(req, res) {
        TestModel
            .find()
            .then(
                function(tests) {
                    res.json(tests);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function createMessage(req, res) {
        TestModel
            .create(req.body)
            .then(
                function(test) {
                    res.json(test);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteMessage(req, res) {
        TestModel
            .remove({_id: req.params.id})
            .then(
                function(result) {
                    res.json(result);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
};