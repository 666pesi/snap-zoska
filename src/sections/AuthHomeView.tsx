// src/app/sections/AuthHomeView.tsx

"use client";

import { Button, Container, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";

export default function AuthHomeView() {
  const { data: session } = useSession();

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
        {session ? `Welcome, ${session.user?.name}!` : "Prihlásenie"}
      </Typography>

      {session ? (
        <Button
          variant="outlined"
          fullWidth
          onClick={() => signOut()}
          sx={{ mb: 1 }}
        >
          Odhlásiť sa
        </Button>
      ) : (
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{ mb: 1 }}
        >
          Prihlásiť sa účtom Google
        </Button>
      )}
    </Container>
  );
}
