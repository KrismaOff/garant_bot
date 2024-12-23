import { useState } from "react";
import sendRequestForApi from "@/utils/frontend/sendRequestForApi";

export default function useHandleDeleteEditRow(tableName, reloadRequest, openNotification) {

    const [isEditingRow, setIsEditingRow] = useState(null);

    const deteleRow = (id) => {
        if (confirm("Вы уверены, что хотите удалить запись?")) {
          sendRequestForApi(
            "DELETE",
            tableName,
            (message) => {
              if (message.success) {
                reloadRequest();
                openNotification({
                  text: "Успешно!",
                  type: "success",
                });
              } else
                openNotification({
                  text: `Ошибка! ${message.errorServer} `,
                  type: "error",
                });
            },
            { id }
          );
        }
      };
    
      const editRow = (id, inputState) => {
        if (
          isEditingRow === id &&
          confirm("Вы уверены, что хотите сохранить изменения?")
        ) {
          setIsEditingRow(null);
          sendRequestForApi(
            "PUT",
            tableName,
            (message) => {
              if (message.success) {
                reloadRequest();
                openNotification({
                  text: "Успешно!",
                  type: "success",
                });
              } else
                openNotification({
                  text: message.errorServer,
                  type: "error",
                });
            },
            { id, ...inputState }
          );
        } else setIsEditingRow(id);
      };

      return [deteleRow, editRow, isEditingRow];

}
