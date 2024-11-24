import Header from "@/components/ui/header"
import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ReactNode } from "react" // Import ReactNode type for children

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export const metadata = {
  title: "CV - Kevin Hao",
  description: "I  am a software engineer who loves to build things.",
  icons: {
    icon: "/favicon.png"
  }
}

interface RootLayoutProps {
  children: ReactNode // Define the type for children
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${PlusJakartaSans.className} antialiased bg-bgcolor`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
