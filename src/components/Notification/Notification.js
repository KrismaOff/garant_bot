import React, { useEffect, useState } from "react";
import "./Notification.css";

export default function Notification({ notification, removeNotification }) {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    setOpacity(1);
    setTranslateY(notification.id * -10 * 7 - 50);
    const timer = setTimeout(() => {
      setOpacity(0);
      setTranslateY(-20);
      setTimeout(() => removeNotification(notification.id), 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification, removeNotification]);

  return (
    <div
      className="notification"
      style={{
        backgroundColor: notification.type === "success" ? "green" : "red",
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      {notification.text}
    </div>
  );
}
