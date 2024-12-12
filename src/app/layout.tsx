import "./globals.css";
import  TanstackProvider  from "../providers/tanstack-provider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
