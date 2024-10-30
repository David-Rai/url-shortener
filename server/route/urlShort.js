const express=require('express')
const router=express.Router()
const {createShort,showAll,Goto}=require('../controller/urlShort')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/',showAll)
router.post('/add',createShort)
router.get('/go/:shortUrl',Goto)

module.exports=router