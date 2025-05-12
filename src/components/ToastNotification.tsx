import { Toaster } from "react-hot-toast";

export const ToastNotification = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          borderRadius: "10px",
          background: "#171717",
          color: "#ffffff",
          fontSize: "16px",
          maxWidth: "fit-content",
        },
        duration: 5000,
      }}
    />
  );
};
