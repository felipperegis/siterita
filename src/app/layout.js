import localFont from "next/font/local";
import "./globals.css";




export const metadata = {
  title: "Rita Confeitaria",
  description: "Confeitaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`$ antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
