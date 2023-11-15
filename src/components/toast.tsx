import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

export const ToastComponent = () => {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="top-center"
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
};

export function toastStatus({
  success,
  log,
  toastId,
}: {
  success: boolean;
  log: string;
  toastId: any;
}) {
  console.log(log);

  if (success) {
    toast.update(toastId, {
      render: "Message sent successfully!",
      type: "success",
      isLoading: false,
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
  } else {
    toast.update(toastId, {
      render: "Failed to send message!",
      type: "error",
      isLoading: false,
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
  }
}
