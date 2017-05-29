
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
            body2: "Minchiacheccaldo"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please passERA a name on the query string or in the request body"
        };
    }
    context.done();
};
