const express = require('express');
const authMiddleware = require('../middlewares/auth.js');
const router = express.Router();

const { register, login } = require('../controllers/auth.js');

router.post('/register', register);
router.post('/login', login);

router.get('/test-auth',authMiddleware ,(req, res) => {
  res.status(200).send({'message':'You are authenticated', 'user':req.user});
});

module.exports = router;
