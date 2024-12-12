"use client"; 

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@/components/ThemeProvider';
import { FaHome, FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaSearch, FaPlusSquare, FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const unauthPaths = [
  { label: "Domov", icon: <FaHome />, path: '/' },
  { label: "O mne", icon: <FaUser />, path: '/o-mne' },
  { label: "Prihlásenie", icon: <FaSignInAlt />, path: '/auth/prihlasenie' },
  { label: "Registrácia", icon: <FaUserPlus />, path: '/auth/registracia' },
];

const authPaths = (userImage: string | undefined) => [
  { label: "Domov", icon: <FaHome />, path: '/' },
  { label: "Profily", icon: <FaUser />, path: '/profil' },
  { label: "Hľadanie", icon: <FaSearch />, path: '/hladanie' },
  {
    label: "Profil",
    icon: (
      <Image
        src={userImage || '/default-avatar.png'}
        alt="Profile"
        width={30}
        height={30}
        style={{ borderRadius: '50%' }}
      />
    ),
    path: '/profil',
  },
  { label: "Príspevky", icon: <FaPlusSquare />, path: '/prispevok' },
  { label: "Odhlásenie", icon: <FaSignOutAlt />, path: '/auth/odhlasenie' },
  
];

export default function Navbar() {
  const { data: session } = useSession();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  // Explicitly ensure user image is a string or undefined
  const userProfileImage = session?.user?.image ?? undefined;

  const navItems = session ? authPaths(userProfileImage) : unauthPaths;

  React.useEffect(() => {
    if (session?.user) {
      router.push('/prispevok');
    }
  }, [session, router]);

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
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

      <IconButton
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </IconButton>

      
    </Box>
  );
}
