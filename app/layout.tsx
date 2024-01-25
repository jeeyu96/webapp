import { Nunito } from "next/font/google";

import './globals.css'

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

import PredictionModal from "./components/modals/PredictionModal";
import RentModal from "./components/modals/RentModal";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: 'Fresenius Medical Care',
  description: 'CPM Assistant V1.0',
}


// get font
const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();


  return (
    <html lang="en">
      <body className={font.className}>
          {/*<ClientOnly>*/}
          <ToasterProvider/>
          <PredictionModal/>
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          {/*</ClientOnly>*/}
          <div className= "pb-20 pt-28">
        {children}
          </div>
      </body>
    </html>
  )
}
