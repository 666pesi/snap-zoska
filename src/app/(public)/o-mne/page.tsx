//src/app/o-mne/page.tsx

import Typography from '@mui/material/Typography';
import Link from "next/link"; 

export const metadata = { title: "Domov | ZoškaSnap" };



export default function About() {
  return (

    <Link href="https://github.com/666pesi" passHref>
      <Typography
        component="span"
        sx={{
          color: "#1976d2",
          fontWeight: "500",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        PROFIL
      </Typography>
    </Link>

  );

}