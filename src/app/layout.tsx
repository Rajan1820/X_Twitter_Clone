import LeftSidebar from "@/components/leftnavigation";
import "./globals.css";
import SupabaseProvider from "./supabase-provider";
import RightSection from "@/components/right_sidebar";
import Favicon from './favicon.ico';

export const metadata = {
  title: "X Clone",
  description: "X (Twitter)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
          <div className="xl:max-w-[70vw] w-full h-full flex relative">
            <LeftSidebar />
            <SupabaseProvider>{children}</SupabaseProvider>
            <RightSection />
          </div>
        </div>
      </body>
    </html>
  );
}
