"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("../controllers/review.controller");
const auth_middleware_1 = require("../core/middleware/auth.middleware");
const router = express_1.default.Router();
// Create review (protected)
router.post('/', auth_middleware_1.authenticate, review_controller_1.createReview);
// Get reviews for a user (public)
router.get('/user/:userId', review_controller_1.getUserReviews);
// Get review statistics for a user (public)
router.get('/user/:userId/stats', review_controller_1.getUserReviewStats);
// Respond to a review (protected)
router.post('/:reviewId/respond', auth_middleware_1.authenticate, review_controller_1.respondToReview);
// Vote on review helpful/not helpful (protected)
router.post('/:reviewId/vote', auth_middleware_1.authenticate, review_controller_1.voteReview);
// Flag a review (protected)
router.post('/:reviewId/flag', auth_middleware_1.authenticate, review_controller_1.flagReview);
// Update a review (protected)
router.put('/:reviewId', auth_middleware_1.authenticate, review_controller_1.updateReview);
exports.default = router;
