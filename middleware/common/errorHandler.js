const createError = require('http-errors');
//404 error handelar
function notFoundHandelar(req, res, next) {
    next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
    res.locals.error = err;
    res.send(res.locals.error);
}

module.exports = {
    notFoundHandelar,
    errorHandler
}