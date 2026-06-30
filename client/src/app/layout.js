import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import SiteChrome from "@/components/site/SiteChrome";

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
