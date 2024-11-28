// src/app/(public)/layout.tsx
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Public Content</h1>
      {children}
    </div>
  );
}
