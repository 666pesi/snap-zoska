//src/app/podmienky/page.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const metadata = { title: "Domov | ZoškaSnap"};



export default function TermsConditions() {
  return (

    <><Container>
      <Typography> Podmienky Použivania </Typography>
    </Container><Link href="/auth/registracia" passHref>
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          S5
        </Button>
      </Link></>


  );

}