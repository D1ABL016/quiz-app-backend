const express = require('express');

const router = express.Router();

const {injectSuperAdmin , injectAdmin} = require('../middlewares/injectRole.js');
const {register} = require('../controllers/auth.js');
const {superAdminMiddleware} = require('../middlewares/auth.js');

router.post('/super-admin',injectSuperAdmin, register);
router.post('/admin',[superAdminMiddleware,injectAdmin], register);


module.exports = router;