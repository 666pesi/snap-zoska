// src/components/Navbar.tsx

"use client";

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

const navItems = [
  { label: "Domov", icon: <HomeIcon />, path: '/' },
  { label: "Profily", icon: <PersonIcon />, path: '/profil' },
  { label: "Príspevky", icon: <PostAddIcon />, path: '/prispevok' },
];

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession(); // Get session data from NextAuth

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
        
        {/* Conditional rendering based on session state */}
        {session ? (
          <BottomNavigationAction
            label="Odhlásiť sa"
            icon={<LoginIcon />}
            onClick={() => router.push('/auth/odhlasenie')} // Navigate to sign-out page
          />
        ) : (
          <>
            <BottomNavigationAction 
              label="Prihlásenie" 
              icon={<LoginIcon />} 
              onClick={() => router.push('/auth/prihlasenie')} 
            />
            <BottomNavigationAction 
              label="Registrácia" 
              icon={<AppRegistrationIcon />} 
              onClick={() => router.push('/auth/registracia')} 
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}
