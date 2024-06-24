import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/Context/NodeContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatbot Builder",
  description: "Created by Devesh Purohit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`}><ContextProvider>{children} <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </ContextProvider></body>
    </html>
  );
}
