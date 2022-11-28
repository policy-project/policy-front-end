import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controller } from "../common/config";
import { POLICY_INSURED, POLICY_MAIN } from "../common/constants";
import { setPolicy } from "../redux/slice";
import { policySelector } from "../redux/store";
import { Delete } from "@mui/icons-material"


export const Policies = () => {
  const policies = useSelector(policySelector);
  const dispatch = useDispatch();

  const getPolicies = useCallback(async () => {
    const policies = await controller.get(POLICY_INSURED);
    dispatch(setPolicy(policies));
  }, []);

  useEffect(() => {
    getPolicies();
  }, []);

  const columns = [
    { field: "policyNumber", headerName: "policyNumber", width: 150 },
    { field: "productNumber", headerName: "productNumber", width: 150 },
    { field: "insuredId", headerName: "insuredId", width: 150 },
    { field: "insuredFirstName", headerName: "insuredFirstName", width: 150 },
    { field: "insuredLastName", headerName: "insuredLastName", width: 150 },
    {
        field: 'actions', type: 'actions', 
        getActions: (params) => {
          const adminAct = [
            <GridActionsCellItem
              icon={<Delete />}
              label="Delete"
              onClick={() => onRemove(params.id)}
            />
          ];
          return adminAct;
        }
      }
  ];

  const onRemove = async (id) => {
    await controller.delete(POLICY_MAIN + `/${id}`);
    getPolicies();
  }

  return (
    <Box sx={{ height: "50vh", width: "70vw", margin: "0 auto" }}>
      <DataGrid
        rows={policies}
        columns={columns}
        getRowId={(row) => row.policyNumber}
      />
    </Box>
  );
};
