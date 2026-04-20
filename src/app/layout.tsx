import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "K.S FUBU Building Construction (Pty) Ltd",
  description:
    "South African construction & infrastructure company specialising in civil works, building construction, telecoms tower construction, and renovations. Based in Midrand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
