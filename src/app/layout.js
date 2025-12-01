import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import MaintenancePage from "./maintenance/page"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Daeun Park",
  description: "Daeun Park Portfolio Website",
}

function getIsMaintenanceMode() {
  // Toggle this via NEXT_PUBLIC_MAINTENANCE_MODE in .env.local (e.g. "true" or "false")
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
}

export default function RootLayout({ children }) {
  const isMaintenanceMode = getIsMaintenanceMode()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isMaintenanceMode ? <MaintenancePage /> : children}
      </body>
    </html>
  )
}
