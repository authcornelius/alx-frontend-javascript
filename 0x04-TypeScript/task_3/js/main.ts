// task_3/js/main.ts
import { RowID, RowElement } from "./interface";
import { insertRow, deleteRow, updateRow } from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow(row);

// ✅ update row with age 23, without using spread
const updatedRow: RowElement = Object.assign({}, row, { age: 23 });

updateRow(newRowID, updatedRow);
deleteRow(newRowID);
