// temporarily allow all requests
const verifytoken = (req, res, next) => {
    // later you can add JWT verification
    req.user = { id: 'testuserid' };
    next();
};

module.exports = verifytoken;
