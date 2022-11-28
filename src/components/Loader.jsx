import { Box } from "@mui/material";
import React, { useState } from "react";
import { ModalLoader } from "./ModalLoader";

export const Loader = () => {
  const [openModal, setOpenModal] = useState(false);

  const clickOpenModal = (state) => {
    setOpenModal(state);
  };

  return (
    <Box>
      <Box
        sx={{
          height: "5vh",
          margin: "0 auto 20px",
          width: "60vw",
          border: "1px dashed grey",
          backgroundColor: "#c7f9cc",
          display: "flex",
          cursor: "pointer"
        }}
          onClick={()=>clickOpenModal(true)}
      >
        <Box sx={{ margin: "auto" }}>Load from csv</Box>
      </Box>
      <ModalLoader open={openModal} onClose={clickOpenModal} />
    </Box>
  );
};
