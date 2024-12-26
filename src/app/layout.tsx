import TanstackProvider from "../providers/tanstack-provider";
// import NextAuthProviders from "../providers/NextAuthProviders";
import { ClerkProvider } from '@clerk/nextjs'
import NavBar from "./components/NavBar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      >
        {/* <NextAuthProviders> */}
        <ClerkProvider>
          <TanstackProvider>
            <NavBar/>
            {children}
          </TanstackProvider>
          </ClerkProvider>
        {/* </NextAuthProviders> */}
      </body>
    </html>
  );
}
