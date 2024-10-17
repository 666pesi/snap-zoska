// src/app/auth/registracia/page.tsx

import { signIn } from "next-auth/react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const metadata = { title: "Registrácia | Zoska" };

export default function Registracia() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Registrovať sa</Typography>
      <Button
        variant="contained"
        onClick={() => signIn("google", { callbackUrl: "/" })}
        style={{ marginTop: '20px' }}
      >
        Registrovať sa pomocou Google
      </Button>
    </div>
  );
}
