import { Box, CircularProgress } from "@mui/material";

const PureLoading = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default PureLoading;
