import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import Papa from "papaparse";
import { useDispatch, useSelector } from 'react-redux';
import { setPolicy } from "../redux/slice";

import {
  INSURED_ADD_ALL,
  INSURED_MAX_ID,
  INSURED_MIN_ID,
  POLICY_ADD_ALL,
  POLICY_INSURED,
  POLICY_MAIN,
  POLICY_MAX_ID,
  POLICY_MIN_ID,
  PRODUCT_MAX_ID,
  PRODUCT_MIN_ID,
} from "../common/constants";
import { controller } from "../common/config";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const options = {
  types: [
    {
      accept: {
        "text/plain": ".csv",
      },
    },
  ],
  excludeAcceptAllOption: true,
};

export const ModalLoader = ({ open, onClose }) => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("Upload");
  const policiesRef = useRef({ policy: [], insureds: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    policiesRef.current = { policy: [], insureds: [] };
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const res = parseData(csv?.data);
      if (res.state) {
        setFileName(file.name);
        console.log('request data ',policiesRef.current);
      } else {
        console.log('error data ', file.name);
        alert(`error parse file ${file.name}`)
        setFileName("Upload");
        setFile(undefined);

      }
      if (res.wrong.length !== 0){
        const message = JSON.stringify(res.wrong);
        alert(`error parse csv elements ${message}`);
      }
    };
    if (file !== undefined) {
      reader.readAsText(file);
    }
  }, [file]);

  function parseData(data) {
    const res = {"state":false,"wrong":[]};
    const arr = data.slice(0, -1);
    arr.forEach((e) => {
      if (
        (e.policyNumber !== undefined &&
          e.policyNumber >= POLICY_MIN_ID &&
          e.policyNumber < POLICY_MAX_ID) &&
        (e.productNumber !== undefined &&
          e.productNumber >= PRODUCT_MIN_ID &&
          e.productNumber < PRODUCT_MAX_ID) &&
        (e.insuredId !== undefined &&
          e.insuredId >= INSURED_MIN_ID &&
          e.insuredId < INSURED_MAX_ID) &&
        (e.insuredFirstName !== undefined && e.insuredFirstName !== "") &&
        (e.insuredLastName !== undefined && e.insuredLastName !== "")
      ) {
        policiesRef.current.policy.push({"policyNumber":e.policyNumber, "productNumber":e.productNumber,"insuredId":e.insuredId});
        policiesRef.current.insureds.push({"insuredId":e.insuredId, "insuredFirstName":e.insuredFirstName,"insuredLastName":e.insuredLastName});
        res.state = true;
      } else {
        res.wrong = [{...e}, ...res.wrong];
      }
    });

    return res;
  }

  const handleSubmit = async () => {
    console.log('submit ', policiesRef.current);

    try {
      await controller.post(INSURED_ADD_ALL, policiesRef.current.insureds);
      await controller.post(POLICY_ADD_ALL, policiesRef.current.policy);
      const response = await controller.get(POLICY_INSURED);
      dispatch(setPolicy(response));
    } catch (err) {
      alert("error save to db")
    } finally {
      setFile(undefined);
      setFileName("Upload");
      onClose(false);
    }
  };

  const handleLoad = async () => {
    const [fileHandle] = await window.showOpenFilePicker(options);
    const loadFile = await fileHandle.getFile();
    setFile(loadFile);
  };

  return (
    <Modal
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Load data from csv
        </Typography>
        <Button sx={{ mt: 2 }} variant="contained" onClick={handleLoad}>
          {fileName}
        </Button>
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          disabled={fileName === "Upload"}
          onClick={handleSubmit}
        >
          submit
        </Button>
      </Box>
    </Modal>
  );
};
