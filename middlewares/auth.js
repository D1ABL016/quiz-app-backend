const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    try {
        console.log(req.headers);
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        const token = authHeader.split(' ')[1];
    
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        req.user = verifyToken;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

}



module.exports = authMiddleware;