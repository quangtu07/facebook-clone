const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    res.json({
        error: error.message,
        stack: error.stack
    });

    next();
}

export default errorHandler