import React from "react";

import "./Table.css";

import useInputHandler from "@/hooks/useInputHandler";
import useNotificManagment from "@/hooks/useNotificManagment";
import useHandleDeleteEditRow from "@/hooks/useHandleDeleteEditRow";

import { staticDataAboutTables } from "@/data/staticData";

import Notification from "@/components/Notification/Notification";

export default function Table({tableName, tableData, tableKey, reloadRequest}) {
  const [inputState, handleInputChange] = useInputHandler({});
  const [openNotification, removeNotification, stateOfNotification] = useNotificManagment()
  const [deteleRow, editRow, isEditingRow] = useHandleDeleteEditRow(tableName, reloadRequest, openNotification);

  const dataAboutTables = staticDataAboutTables[tableName];

  const content = {
    textAlign: "left",
    maxWidth: "500px",
  };

  return (
    <div>
      {stateOfNotification.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          removeNotification={removeNotification}
        />
      ))}
      <div className="panel-pages-table">
        <table className="panel-pages-table-container">
          <thead>
            <tr>
              {tableKey?.map((name) => (
                <th key={name}>{dataAboutTables.columns[name]?.name}</th>
              ))}
              <th colSpan={2}>Доступные действия</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((row, id) => {
              return (
                <tr key={id}>
                  {Object.keys(row).map((val) => {
                    const dataAboutElem = dataAboutTables.columns[val];
                    return (
                      <td style={val === "content" ? content : {}} key={val}>
                        {isEditingRow === row.id && dataAboutElem?.edit ? (
                          <input
                            id={val}
                            type={dataAboutElem?.type}
                            defaultValue={row[val]}
                            onChange={handleInputChange}
                            maxLength={5}
                            max={5}
                          />
                        ) : (
                          row[val]
                        )}
                      </td>
                    );
                  })}

                  {dataAboutTables.opportunities.PUT && (
                    <td
                      className="panel-pages-table-btn"
                      onClick={() => editRow(row.id, inputState)}
                    >
                      {isEditingRow !== null ? "Сохранить" : "Редактировать"}
                    </td>
                  )}
                  {dataAboutTables.opportunities.DELETE && (
                    <td
                      className="panel-pages-table-btn"
                      onClick={() => deteleRow(row.id)}
                    >
                      Удалить
                    </td>
                  )}
                  {!dataAboutTables.opportunities.PUT &&
                    !dataAboutTables.opportunities.DELETE && (
                      <td>Нет действий</td>
                    )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
