// src/app/gdpr/page.tsx

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import Button component
import Link from 'next/link'; // Import Link component

export const metadata = { title: "GDPR | ZoškaSnap" };

export default function Gdpr() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        ZoškaSnap GDPR Rules
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        1. Potvrdzujete potvrdenie
      </Typography>

      {}
      <Link href="/auth/registracia" passHref>
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          S5
        </Button>
      </Link>
    </Box>
  );
}
