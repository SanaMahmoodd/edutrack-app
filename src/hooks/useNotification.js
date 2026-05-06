import { useState } from "react";

export default function useNotification() {
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  function showNotification(message, type = "success") {
    setNotification({ show: true, message, type });

    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" });
    }, 2500);
  }

  return { notification, showNotification };
}