import CMSNavbar from "@/app/components/CMSNavbar"
import { BackArrowIcon } from "@/app/components/Icons"
import { Provider } from "@/app/utils/Provider"
import "./globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
        
      
        <body>
          <Provider>  

          <CMSNavbar/>
        {children}
        </Provider>
        </body>
        
      
    
    </html>
  )
}
