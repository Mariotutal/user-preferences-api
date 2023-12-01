"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdererRecords = exports.getActiveRecords = exports.getAllRecords = void 0;
const mock_1 = __importDefault(require("./mock"));
const lodash_1 = __importDefault(require("lodash"));
// Function to add date to each record
const addDateToRecords = (records) => {
    // here a copy is being made to handle that instead the original
    return records.map((record) => (Object.assign(Object.assign({}, record), { Date: new Date() })));
};
//this is a function to get all the records available
const getAllRecords = () => {
    return addDateToRecords(mock_1.default);
};
exports.getAllRecords = getAllRecords;
// Log active records
const getActiveRecords = (allRecords) => {
    // Use filter to get active records
    const activeRecords = allRecords.filter((record) => record.Status === "Active");
    return activeRecords;
};
exports.getActiveRecords = getActiveRecords;
// function using sortBy of lodash to sort using a key from the url
const getOrdererRecords = (allRecords, key) => {
    const orderRecords = lodash_1.default.sortBy(allRecords, [key]);
    return orderRecords;
};
exports.getOrdererRecords = getOrdererRecords;
