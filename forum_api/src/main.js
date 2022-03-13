import express from "express";
import { initializeSettings } from "./bootstrap/initializer.js";

const application = express();

initializeSettings(application);

export default application;
