"use client"
import Head from "next/head";
import '../styles/globals.css';
import {ThemeProvider} from "@material-tailwind/react";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>

      <html className={'h-full'}>
      <Head>
        <title>TODO App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={'bg-blue-gray-900 w-full h-full'}>
      {children}
      </body>
      </html>
    </ThemeProvider>
  )
}
