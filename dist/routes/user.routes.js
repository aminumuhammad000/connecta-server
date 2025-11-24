"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
// Auth routes
router.post("/signup", user_controller_1.signup);
router.post("/signin", user_controller_1.signin);
router.post("/google/signup", user_controller_1.googleSignup);
router.post("/google/signin", user_controller_1.googleSignin);
// Password recovery routes
router.post("/forgot-password", user_controller_1.forgotPassword);
router.post("/verify-otp", user_controller_1.verifyOTP);
router.post("/reset-password", user_controller_1.resetPassword);
// User data routes
router.get("/", user_controller_1.getUsers); // GET /api/users?userType=freelancer&skills=React&limit=20
router.get("/:id", user_controller_1.getUserById); // GET /api/users/:id
exports.default = router;
