import express from "express";
import * as contactController from "../Controllers/contact.controller.js";

const router = express.Rourter();

router.post("/contactSave", contactController.contactSave);
router.get("/contactFetch", contactController.contactFetch);
router.delete("/contactDelete", contactController.contactDelete);

export default router;