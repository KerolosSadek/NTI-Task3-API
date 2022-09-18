const router = require("express").Router()
const userController = require("../app/controller/user.controller")

router.post("/register" , userController.register)
router.get("/all" , userController.all)
router.get("/single/:id" , userController.single)
router.post("/edit/:id" , userController.edit)
router.post("/delete/:id" , userController.delete)
router.post("/editPass/:id" , userController.editPass)
router.post("/login" , userController.login)

const auth = require("../app/middleware/auth")
router.post("/me" , auth , (req , res)=>{
    res.send(user)
})
router.post("/logout", auth , userController.logout)
router.post("/logoutAll", auth , userController.logoutAll)
router.post("/editData", auth , userController.editMyData)
router.post("/activate", auth , userController.activate)
router.post("/deActivate", auth , userController.deActivate)
module.exports = router