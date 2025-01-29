
const injectSuperAdmin = (req, res, next) => {
    req.body.role = 'super-admin';
    next();
}

const injectAdmin = (req, res, next) => {
    req.body.role = 'admin';
    next();
}

module.exports = {injectSuperAdmin, injectAdmin};