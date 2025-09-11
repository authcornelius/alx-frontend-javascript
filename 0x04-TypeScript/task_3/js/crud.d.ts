// task_3/js/crud.d.ts
import { RowID, RowElement } from "./interface";

export function insertRow(r: RowElement): RowID;
export function deleteRow(id: RowID): void;
export function updateRow(id: RowID, r: RowElement): RowElement;
