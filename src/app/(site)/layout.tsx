import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from "@/components/chatbot/Chatbot";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}

      <Chatbot />
      <Footer />
    </>
  )
}
