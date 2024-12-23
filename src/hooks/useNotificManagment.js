import { useState } from "react";

export default function useNotificManagment() {
  //   const [openNotification, removeNotification, stateOfNotification] = useNotificManagment()
  //   {stateOfNotification.map((notification) => (
  //     <Notification
  //       key={notification.id}
  //       notification={notification}
  //       removeNotification={removeNotification}
  //     />
  //   ))}
  // openNotification({
  //   text: "Успешно!",
  //   type: "success",
  // });
  const [stateOfNotification, setStateOfNotification] = useState([]);
  const [notificationCounter, setNotificationCounter] = useState(0);

  const openNotification = ({ text, type }) => {
    setStateOfNotification((prev) => [
      ...prev,
      { id: notificationCounter, text, type }, // Уникальный ID для уведомления
    ]);
    setNotificationCounter((prev) => prev + 1);
  };

  const removeNotification = (id) => {
    setStateOfNotification((prev) => prev.filter((notif) => notif.id !== id));
    setNotificationCounter((prev) => prev - 1);
  };

  return [openNotification, removeNotification, stateOfNotification];
}
