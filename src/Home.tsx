import {
  Box
} from "@mui/material";
import Another from "./Another";
import Header from "./Header";

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Another />
    </Box>
  );
};
