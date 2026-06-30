import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import SiteChrome from "@/components/site/SiteChrome";

export const metadata = {
  title: "Satya Constructions",
  description: "Building the future with modern construction standards.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
