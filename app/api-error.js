class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.messgae = message;
    }
}

module.exports = ApiError;