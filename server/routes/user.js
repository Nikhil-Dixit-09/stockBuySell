const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');
const { use } = require('bcrypt/promises');
router.post('/signin',userController.signin);
router.post('/signup',userController.signup);
router.post('/addstock',userController.addstock);
router.post('/sellstock',userController.sellstock);
router.post('/getinfo',userController.getinfo);
module.exports=router;