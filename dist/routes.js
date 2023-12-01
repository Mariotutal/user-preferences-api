"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// general route
app.get("/", (req, resp) => {
    resp.send("It's alive!");
});
// Route to get the users list
app.get("/records", (req, resp) => {
    try {
        // here I got all the records available
        const allRecords = (0, utils_1.getAllRecords)();
        // here I get the records that are with the status active and show them on the console
        const activeRecords = (0, utils_1.getActiveRecords)(allRecords);
        const orderBy = req.query.orderBy;
        // Log active records or a warning if none
        if (activeRecords.length > 0) {
            console.info("Active Records:", activeRecords);
        }
        else {
            console.warn("No active records found");
        }
        // Order records if orderBy is provided
        resp.json(orderBy ? (0, utils_1.getOrdererRecords)(allRecords, orderBy) : allRecords);
    }
    catch (error) {
        console.error("Error processing request:", error);
        resp.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = app;
