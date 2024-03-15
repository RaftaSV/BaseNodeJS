import express from 'express';
import v1 from 'Application/v1';

export const router = express.Router();

router.use('/v1', v1);

export default router;
