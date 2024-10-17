// src/app/auth/odhlasenie/page.tsx

"use client";

import { Button, Container, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/'); // Redirect to home page after signing out
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Ste si istí, že sa chcete odhlásiť?
      </Typography>
      <Button
        variant="outlined"
        onClick={handleSignOut}
      >
        Odhlásiť sa
      </Button>
    </Container>
  );
}
