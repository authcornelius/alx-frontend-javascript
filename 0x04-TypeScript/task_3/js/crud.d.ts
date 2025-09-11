// task_3/js/crud.d.ts

import { RowID, RowElement } from "./interface";

// Use RowID and RowElement in function declarations
export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
