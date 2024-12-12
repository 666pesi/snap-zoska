"use client"; 

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Box, Typography, IconButton, Checkbox, FormControlLabel, Alert } from "@mui/material"; 
import Image from "next/image"; 
import GoogleIcon from "../../../../icon/google.svg"; 
import GitHubIcon from "../../../../icon/github.svg"; 
import Link from "next/link"; 
import { useTheme } from "@/components/ThemeProvider"; 

const RegisterPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); 
  const [isGDPRChecked, setIsGDPRChecked] = useState(false); 
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    handleSubmit();  // Check the GDPR box before proceeding
    if (isGDPRChecked) {
      await signIn("google");
    }
  };

  const handleGitHubLogin = async () => {
    handleSubmit();  // Check the GDPR box before proceeding
    if (isGDPRChecked) {
      await signIn("github");
    }
  };

  const handleSubmit = () => {
    if (!isGDPRChecked) {
      setError("Musíte súhlasiť s podmienkami a GDPR.");
    } else {
      setError(""); 
      // Proceed with registration or other actions
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "transparent", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "400px", 
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          backgroundColor: isDarkMode ? "#333" : "#ffffff", 
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            marginBottom: "25px",
            fontWeight: "bold",
            color: isDarkMode ? "#fff" : "#333",
            fontSize: "1.5rem",
          }}
        >
          Vytvorte si účet!
        </Typography>

        <FormControlLabel
          control={
            <Checkbox
              checked={isGDPRChecked}
              onChange={(e) => setIsGDPRChecked(e.target.checked)}
              sx={{
                color: isDarkMode ? "#fff" : "#333",  
                "&.Mui-checked": {
                  color: "#1976d2", 
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                color: isDarkMode ? "#bbb" : "#555",
                fontSize: "0.7rem",
              }}
            >
              Súslasím s{" "} 
              <Link href="/gdpr" passHref>
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
                  GDPR
                </Typography>
              </Link>
              {" "}a{" "}
              <Link href="/podmienky" passHref>
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
                  podmienky
                </Typography>
              </Link>
            </Typography>
          }
        />

        {error && (
          <Alert
            severity="error"
            sx={{
              width: "100%", 
              marginBottom: "20px", 
              backgroundColor: "#f8d7da", 
              borderRadius: "8px", 
              color: "#721c24", 
              fontSize: "0.85rem",
              padding: "10px",
            }}
          >
            {error}
          </Alert>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleLogin}
          sx={{
            width: "100%",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "50px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#4285f4",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Image
            src={GoogleIcon}
            alt="Google"
            width={20}
            height={20}
            style={{ marginRight: "12px" }}
          />
          Registrovať google
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleGitHubLogin}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "50px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#333", 
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Image
            src={GitHubIcon}
            alt="GitHub"
            width={20}
            height={20}
            style={{ marginRight: "12px" }}
          />
          Registrovať github
        </Button>

        <Typography
          sx={{
            marginTop: "20px",
            color: isDarkMode ? "#bbb" : "#555",
            fontSize: "0.9rem",
          }}
        >
          Už máte úćet?{" "}
          <Link href="/auth/prihlasenie" passHref>
            <Typography
              component="span"
              sx={{
                color: "#1976d2",
                fontWeight: "600",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Prihlasenie
            </Typography>
          </Link>
        </Typography>

        <IconButton
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: isDarkMode ? "#fff" : "#000",
          }}
          onClick={toggleDarkMode}
        ></IconButton>
      </Box>
    </Box>
  );
};

export default RegisterPage;
