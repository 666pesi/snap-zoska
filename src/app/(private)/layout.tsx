// src/app/(private)/layout.tsx

'use client';

import { ReactNode } from "react";
import PrivateContent from "@/components/AuthGruard";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <PrivateContent>
        {}
        {children}
      </PrivateContent>
    </div>
  );
}
