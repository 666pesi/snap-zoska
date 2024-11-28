"use client"; // This marks the component as a client component

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';

// Define paths for unauthenticated users
const unauthPaths = [
  { label: "Domov", icon: <HomeIcon />, path: '/' },
  { label: "Profily", icon: <PersonIcon />, path: '/profil' },
  { label: "Prihlásenie", icon: <LoginIcon />, path: '/auth/prihlasenie' },
  { label: "Registrácia", icon: <AppRegistrationIcon />, path: '/auth/registracia' },
];

// Define paths for authenticated users
const authPaths = [
  { label: "Domov", icon: <HomeIcon />, path: '/' },
  { label: "Profily", icon: <PersonIcon />, path: '/profil' },
  { label: "Príspevky", icon: <PostAddIcon />, path: '/prispevok' },
  { label: "Odhlásenie", icon: <LogoutIcon />, path: '/auth/odhlasenie' }, // Correct path to logout
];

export default function Navbar() {
  const { data: session } = useSession(); // Get session data
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  // Determine which paths to show based on session state
  const navItems = session ? authPaths : unauthPaths;

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction 
            key={index}
            label={item.label} 
            icon={item.icon} 
            onClick={() => router.push(item.path)} 
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}