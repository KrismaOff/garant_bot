import { useEffect, useState } from "react";

import sendRequestForApi from "@/utils/frontend/sendRequestForApi";

export default function useHandleGETRequest(tableName, reloadRequest) {
  const [tableData, setTableData] = useState();
  const [tableKey, setTableKey] = useState();

  useEffect(() => {
    sendRequestForApi("GET", tableName, (data) => {
      if (data.success) {
        setTableData(data.data);
        setTableKey(Object.keys(data.data[0]));
      } else alert("Ошибка загрузки данных");
    });
  }, [tableName, reloadRequest]);

  return [tableData, tableKey];
}
