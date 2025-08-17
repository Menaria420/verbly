"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  Circle,
} from "lucide-react";
import { IoClose } from "react-icons/io5";

type AlertType = "success" | "warning" | "danger";

interface AlertData {
  id: number;
  type: AlertType;
  message: string;
}

interface AlertContextProps {
  showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within AlertProvider");
  return context;
};

// Map alert type → color + icon
const alertStyles: Record<
  AlertType,
  { bg: string; border: string; icon: React.ReactNode }
> = {
  success: {
    bg: "bg-green-100",
    border: "border-green-400",
    icon: <CheckCircle className="text-green-500" size={20} />,
  },
  warning: {
    bg: "bg-yellow-100",
    border: "border-yellow-400",
    icon: <AlertTriangle className="text-yellow-500" size={20} />,
  },
  danger: {
    bg: "bg-red-100",
    border: "border-red-400",
    icon: <XCircle className="text-red-500" size={20} />,
  },
};

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const showAlert = useCallback(
    (message: string, type: AlertType = "success") => {
      const id = Date.now();
      setAlerts((prev) => [...prev, { id, type, message }]);
      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== id));
      }, 4000);
    },
    []
  );

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {/* Alerts container */}
      <div className="fixed top-4 right-2 z-50 flex flex-col gap-3 w-[320px]">
        <AnimatePresence>
          {alerts.map((alert) => {
            const style = alertStyles[alert.type];
            return (
              <motion.div
                key={alert.id}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 p-3 rounded-[.5rem] border shadow-md ${style.bg} ${style.border}`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">{style.icon}</div>

                {/* Message */}
                <div className="flex-1 text-sm text-gray-800">
                  {alert.message}
                </div>

                {/* Close button */}
                <button
                  title="Close"
                  type="button"
                  onClick={() =>
                    setAlerts((prev) => prev.filter((a) => a.id !== alert.id))
                  }
                  className="text-gray-800 hover:text-gray-600 transition"
                >
                  <IoClose size={20} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </AlertContext.Provider>
  );
};
