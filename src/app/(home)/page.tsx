// src/app/page.tsx

import { getServerSession } from "next-auth/next"; // Správna cesta pre getServerSession
import { authOptions } from "../api/auth/[...nextauth]/authOptions"; // Skontroluj správnosť tejto cesty
import AuthHomeView from "@/sections/AuthHomeView";
import NonAuthHomeView from "@/sections/NonAuthHomeView";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  // Fetch session on the server
  try {
    const session = await getServerSession(authOptions);

    // Conditionally render authenticated or non-authenticated home view
    return session ? (
      <AuthHomeView session={session} />
    ) : (
      <NonAuthHomeView />
    );
  } catch (error) {
    console.error("Error fetching session:", error);
    return <NonAuthHomeView />; // Fallback na NonAuthHomeView v prípade chyby
  }
}
