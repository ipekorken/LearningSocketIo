const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

router.get('/', authMiddleware, userController.listAllUsers);

router.get('/userInfo', authMiddleware, userController.getUserInfo);

router.post('/register', userController.register);

router.post('/login', userController.login);

module.exports = router;
