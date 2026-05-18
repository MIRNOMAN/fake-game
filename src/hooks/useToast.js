import toast from "react-hot-toast";

export const useToast = () => {
  const showSuccess = (message) => {
    toast.success(message, {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "#000",
        color: "#22c55e",
        border: "2px solid #22c55e",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
      },
      icon: "✓",
    });
  };

  const showError = (message) => {
    toast.error(message, {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "#000",
        color: "#ef4444",
        border: "2px solid #ef4444",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
      },
      icon: "✗",
    });
  };

  const showWarning = (message) => {
    toast(message, {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "#000",
        color: "#facc15",
        border: "2px solid #facc15",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
      },
      icon: "⚠",
    });
  };

  const showInfo = (message) => {
    toast(message, {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "#000",
        color: "#06b6d4",
        border: "2px solid #06b6d4",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
      },
      icon: "ℹ",
    });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};
