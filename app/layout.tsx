import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"PaperAnimator",description:"Create paper cutout animations in your browser."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}