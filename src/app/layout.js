import { Inter } from "next/font/google";
import "./globals.css";
import { Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DSA With Next JS",
  description: "author : sandeep kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Typography variant="h4">DSA visualization using NextJS</Typography>
        <Grid container spacing={2}>
          <Grid item sx={{ display: { xs: "none", sm: "block" }, m: 1 }} sm={3}>
            <Paper sx={{ height: "85vh", p: 1, overflow: "auto" }}>
              <Link href="/searching">Searching Algo</Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ m: 1 }}>
            <Paper sx={{ height: "85vh", p: 1, overflow: "auto" }}>
              {children}
            </Paper>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
