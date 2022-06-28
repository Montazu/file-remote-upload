import express from "express";
import { downloadController } from "../controllers";

const router = express.Router();

router.post("/api/download", downloadController.download);

export default router;
