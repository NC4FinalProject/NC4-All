import { Link } from "react-router-dom";
import image from "../../images/404.svg";
import { Helmet } from "react-helmet";

import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

// style
const BoxStyle = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px)`,
  margin: "0 auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& .MuiTypography-paragraph": {
    marginTop: 20,
    marginBottom: 20,
  },
  "& img": {
    width: "100%",
    maxWidth: 400,
    objectFit: "cover",
  },
  "& .MuiButton-root": {
    backgroundColor: theme.palette.green.darker,
    color: "#fff",
    marginTop: 40,
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-h3": { fontSize: 30, fontWeight: 500 },
  },
}));

const ErrorPage = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>404 | MUI Dash</title>
      </Helmet>

      <BoxStyle>
        <Typography variant="h3">Sorry, page not found! <br/> 주소를 확인해 주세요.</Typography>

        <Typography paragraph color="textSecondary">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <img src={image} alt="404 Error" loading="lazy" />

        <Button
          to="/"
          variant="contained"
          component={Link}
          size="large"
          disableElevation
        >
          Go to Home
        </Button>
      </BoxStyle>
    </>
  );
};

export default ErrorPage;
