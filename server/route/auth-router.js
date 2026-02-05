const router = require('express').Router();

const authController = require('../controllers/auth-controller');
const validateUser = require("../middlewares/validateUser");
const userZodSchema = require("../validator/regisvalidator");
const logValidation = require("../validator/logValidation");
const contactValidation = require("../validator/contactValidation");
const authMiddleware = require("../middlewares/tokenVirification");
const serviceValidation = require("../validator/serviceValidation");

router.get("/home", authController.home);
router.post("/register", validateUser(userZodSchema), authController.register);
router.post("/login", validateUser(logValidation), authController.login);
router.post("/contact", validateUser(contactValidation), authController.contact);
router.get("/profile", authMiddleware, authController.profile);
router.post("/service", validateUser(serviceValidation), authController.service);

router.get("/listOFcourse", authController.listOFcourse);
module.exports = router;
