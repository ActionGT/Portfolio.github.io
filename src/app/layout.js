"use client";
import localFont from "next/font/local";
import './globals.css'
import Header from "../app/components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/HomeComponent";
// import About from './components/About/AboutMe';
// import Portfolio from './components/Portfolio/Portfolio';


const poppins = localFont({
  src: [
  {
  path: "../../public/fonts/Recoleta-Black.ttf",
  weight: "400",
  },
  {
  path: "../../public/fonts/Recoleta-Medium.ttf",
  weight: "300",
  },
  {
  path: "../../public/fonts/Recoleta-Light.ttf",
  weight: "200",
  },
  ],
  variable: "--font-Recoleta-Black",
  });

 const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      
      
      <Header/>
   
      {children}
   
     
      <Footer/> 
     
       
       
      </body>
    </html>
  )
}
