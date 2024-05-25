import React from "react";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <Typography variant="h5">Searching</Typography>
      <Link href="/searching/linear">
        <Typography variant="h6">1) Linear Search</Typography>
      </Link>
      <Link href="/searching/binary">
        <Typography variant="h6">2) Binary Search</Typography>
      </Link>

      <Container sx={{ mt: 2 }}>{children}</Container>
    </div>
  );
}

export default Layout;
