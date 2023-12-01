import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { getActiveRecords, getAllRecords, getOrdererRecords } from "./utils";

dotenv.config();

const app = express();

app.use(cors());

// general route
app.get("/", (req: Request, resp: Response) => {
  resp.send("It's alive!");
});

// Route to get the users list
app.get("/records", (req: Request, resp: Response) => {
  try {
    // here I got all the records available
    const allRecords = getAllRecords();
    // here I get the records that are with the status active and show them on the console
    const activeRecords = getActiveRecords(allRecords);
    const orderBy = req.query.orderBy as string;

    // Log active records or a warning if none
    if (activeRecords.length > 0) {
      console.info("Active Records:", activeRecords);
    } else {
      console.warn("No active records found");
    }
    // Order records if orderBy is provided
    resp.json(orderBy ? getOrdererRecords(allRecords, orderBy) : allRecords);
  } catch (error) {
    console.error("Error processing request:", error);
    resp.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
