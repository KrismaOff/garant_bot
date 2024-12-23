import Link from "next/link";
import "../styles/globals.css";
import "../styles/components/app.css";

import { staticDataAboutTables } from "@/data/staticData";

export const metadata = {
  title: "GarantBot AP",
  description: "Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="header-navigation">
            {Object.keys(staticDataAboutTables).map((table) => (
              <span key={table}>
                <Link className="link" href={`/controlPanel/${table}`}>
                  {staticDataAboutTables[table].name}
                </Link>
              </span>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
