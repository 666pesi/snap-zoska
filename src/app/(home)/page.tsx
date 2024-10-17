// src/app/(home)/page.tsx

"use client"; // Indicate this is a client component

import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Typography variant="h4" sx={{ mt: 5 }}>
          Welcome, {session.user?.name}!
        </Typography>
      ) : (
        <Typography variant="h5">Domovská stránka</Typography>
      )}
    </>
  );
}
