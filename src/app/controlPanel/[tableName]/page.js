"use client";

import "@/styles/components/controlPanel/PanelPages.css";

import useHandleGETRequest from "@/hooks/useHandleGETRequest";
import { staticDataAboutTables } from "@/data/staticData";
import { useState } from "react";

import Table from "@/components/Table/Table";
import ModalWindow from "@/components/ModalWindow/ModalWindow";

export default function PanelPages({ params: { tableName } }) {
  const [reloadRequest, setReloadRequest] = useState(false);
  const [tableData, tableKey] = useHandleGETRequest(tableName, reloadRequest);
  const [stateOfModalWindow, setStateOfModalWindow] = useState(false);

  const DataAboutTables = staticDataAboutTables[tableName];

  return (
    <div>
      {stateOfModalWindow && (
        <ModalWindow
          state={stateOfModalWindow}
          setState={setStateOfModalWindow}
          tableKey={tableKey}
          tableName={tableName}
          reloadRequest={() => setReloadRequest((prev) => !prev)}
        />
      )}
      <h2>Панель управления для таблицы - "{DataAboutTables?.name}"</h2>
      <div className="pane-pages-table-act">
        {DataAboutTables?.opportunities?.POST && (
          <button onClick={() => setStateOfModalWindow((prev) => !prev)}>
            Создать
          </button>
        )}
      </div>
      <Table
        tableName={tableName}
        tableData={tableData}
        tableKey={tableKey}
        reloadRequest={() => setReloadRequest((prev) => !prev)}
      />
    </div>
  );
}
