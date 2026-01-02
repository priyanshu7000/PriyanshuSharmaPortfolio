import express from "express";
import * as contactController from "../Controller/contact.controller.js"

const router = express.Router();

router.post("/contactSave", contactController.contactSave);
router.get("/contactFetch", contactController.contactFetch);
router.delete("/contactDelete", contactController.contactDelete);

export default router;