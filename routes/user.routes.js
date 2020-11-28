const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/userController');



router.get('/:id', userCtrl.getUser);
router.post('/', userCtrl.createUser);
router.put('/', userCtrl.updateUser);
router.delete('/:id',userCtrl.deleteUser);

module.exports = router;