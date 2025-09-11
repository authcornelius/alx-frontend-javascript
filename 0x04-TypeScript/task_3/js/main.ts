// task_3/js/main.ts
import { RowID, RowElement } from "./interface";
import { insertRow, updateRow, deleteRow } from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow(row);

const updatedRow: RowElement = {
  firstName: row.firstName,
  lastName: row.lastName,
  age: 23,
};

updateRow(newRowID, updatedRow);
deleteRow(newRowID);
