"use client"; // This marks the component as a client component

import { signIn } from 'next-auth/react';
import { Button, Box, Typography, IconButton } from '@mui/material'; // Using Material-UI for a styled button
import Image from 'next/image'; // Import next/image for optimized image handling
import GoogleIcon from '../../../../icon/google.svg'; // Import Google SVG icon (make sure it's in the correct path)
import GitHubIcon from '../../../../icon/github.svg'; // Import GitHub SVG icon (make sure it's in the correct path)
import Link from 'next/link'; // Import Link component for routing
import { useTheme } from '@/components/ThemeProvider'; // Import the useTheme hook for dark mode

const LoginPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access theme state and toggle function

  const handleGoogleLogin = async () => {
    await signIn('google');
  };

  const handleGitHubLogin = async () => {
    await signIn('github');
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      height: '100vh', // Full height of the viewport
      backgroundColor: 'transparent', // No background color for the outer div
    }}>
      {/* Inner Box for login form */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '400px', // Maximum width for the form box
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Soft shadow
        backgroundColor: isDarkMode ? '#333' : '#ffffff', // Box color based on theme
      }}>
        <Typography variant="h5" component="h1" sx={{
          marginBottom: '25px',
          fontWeight: 'bold',
          color: isDarkMode ? '#fff' : '#333',
          fontSize: '1.5rem',
        }}>
          Prihlaste sa
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleLogin}
          sx={{
            width: '100%',
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            padding: '12px',
            borderRadius: '50px',  // Rounded corners
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#4285f4', // Google blue on hover
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <Image src={GoogleIcon} alt="Google" width={20} height={20} style={{ marginRight: '12px' }} />
          Prihlasenie google
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleGitHubLogin}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            padding: '12px',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#333', // GitHub dark color on hover
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <Image src={GitHubIcon} alt="GitHub" width={20} height={20} style={{ marginRight: '12px' }} />
          Prihlasenie GITHUB
        </Button>

        <Typography sx={{
          marginTop: '20px',
          color: isDarkMode ? '#bbb' : '#555',
          fontSize: '0.9rem',
        }}>
          Nemáte účet?{' '}
          <Link href="/auth/registracia" passHref>
            <Typography component="span" sx={{
              color: '#1976d2',
              fontWeight: '600',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}>
              REGISTRACIA
            </Typography>
          </Link>
        </Typography>

        {/* Dark Mode Toggle Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: isDarkMode ? '#fff' : '#000',
          }}
          onClick={toggleDarkMode}
        >
        </IconButton>
      </Box>
    </Box>
  );
};

export default LoginPage;
