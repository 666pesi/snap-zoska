// src/components/PrivateContent.tsx

'use client'; 

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PrivateContentProps {
  children: ReactNode;
}

const PrivateContent = ({ children }: PrivateContentProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; 
    if (!session) {
      router.push("/auth/prihlasenie"); 
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <div>Loading...</div>; 
  }

  return <>{children}</>; 
};

export default PrivateContent;
