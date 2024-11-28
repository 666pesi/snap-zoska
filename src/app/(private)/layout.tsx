// src/app/(private)/layout.tsx

'use client';

import { ReactNode } from "react";
import PrivateContent from "@/components/AuthGruard";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <PrivateContent>
        {}
        <h1>Private Content</h1>
        {children}
      </PrivateContent>
    </div>
  );
}
