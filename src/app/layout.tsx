import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "K.S FUBU Building Construction",
  description:
    "K.S FUBU Building Construction delivers architectural plans, renovations, and turnkey construction services in Gauteng.",
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
