const userAuth = (req, res, next) => {
    const token = 'xyz';
    const isUserAuthorized = token === 'xyz';
    if (!isUserAuthorized) {
        res.status(401).send('UnAuthorized');
    } else {
        next();
    }
};

const adminAuth = (req, res, next) => {
    const token = 'abc1';
    const isAdminAuthorized = token === 'abc';
    if (!isAdminAuthorized) {
        res.status(401).send('Admin not Authorized');
    } else {
        next();
    }
}

module.exports = {
    userAuth,
    adminAuth,
}
