import express from 'express';
import validateToken from '../middleware/validateToken';
import winLikeController from '../controllers/winLikeController';

const router = express.Router();

router.post('/', validateToken, winLikeController.likeWin);

export default router;
