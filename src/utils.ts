import peopleArray, { type Person } from "./mock";
import _ from "lodash";

// Function to add date to each record
const addDateToRecords = (records: Person[]): Person[] => {
  // here a copy is being made to handle that instead the original
  return records.map((record) => ({
    ...record,
    Date: new Date(),
  }));
};

//this is a function to get all the records available
export const getAllRecords = (): Person[] => {
  return addDateToRecords(peopleArray);
};

// Log active records
export const getActiveRecords = (allRecords: Person[]): Person[] => {
  // Use filter to get active records
  const activeRecords = allRecords.filter(
    (record) => record.Status === "Active"
  );
  return activeRecords;
};

// function using sortBy of lodash to sort using a key from the url
export const getOrdererRecords = (
  allRecords: Person[],
  key: string
): Person[] => {
  const orderRecords = _.sortBy(allRecords, [key]);
  return orderRecords;
};
