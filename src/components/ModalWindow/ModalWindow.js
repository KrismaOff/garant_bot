"use client";

import React from "react";
import { staticDataAboutTables, exceptions } from "@/data/staticData";

import sendRequestForApi from "@/utils/frontend/sendRequestForApi";

import useHandleDataForm from "@/hooks/useHandleDataForm";
import useInputHandler from "@/hooks/useInputHandler";
import useNotificManagment from "@/hooks/useNotificManagment";

import Notification from "@/components/Notification/Notification";

import "./ModalWindow.css";

export default function ModalWindow({
  setState,
  tableKey,
  tableName,
  reloadRequest,
}) {
  const [filteredKeys, objectForApi] = useHandleDataForm(tableKey);
  const [inputState, handleInputChange] = useInputHandler(objectForApi);
  const [openNotification, removeNotification, stateOfNotification] = useNotificManagment();

  const closeModal = () => {
    setState(false);
  };

  const handleSubmit = () => {
    if (Object.values(inputState).includes("")) openNotification({
      text: "Заполните все поля!",
      type: "error",
    });
    else {
      sendRequestForApi(
        "POST",
        tableName,
        (message) => {
          if (message.success) {
            reloadRequest();
            openNotification({
              text: "Успешно!",
              type: "success",
            });
            closeModal();
          } else {
            openNotification({
              text: `Ошибка! ${message.errorServer} `,
              type: "error",
            });
          }
        },
        inputState
      );
    }
  };

  return (
    <div className="modal-window">
      {stateOfNotification.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          removeNotification={removeNotification}
        />
      ))}
      <div className="modal-window-blur" onClick={closeModal} />
      <div className="modal-window-container">
        <form>
          {filteredKeys?.map((columnId) => {
            const columnName =
              staticDataAboutTables[tableName].columns[columnId].name;
            if (!exceptions.inputForm.includes(columnId))
              return (
                <div className="modal-window-form-row" key={columnId}>
                  {/* <label htmlFor={columnId}>{columnName}</label> */}
                  <input
                    onBlur={handleInputChange}
                    placeholder={columnName}
                    type="text"
                    name={columnId}
                    id={columnId}
                  ></input>
                </div>
              );
          })}
          <div className="modal-window-form-btn-group">
            <button type="button" onClick={handleSubmit}>
              Создать
            </button>
            <button onClick={closeModal}>Отменить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
