import { createSlice } from '@reduxjs/toolkit'
import { controller, policies } from '../common/config';
import { POLICY_INSURED } from '../common/constants';

export const policyDialogSlice = createSlice({
    name: 'policy',
    initialState: policies,
    reducers: {
        setPolicy: (state, param)  => {
            const {payload} = param;
            return payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setPolicy, getPolicy} = policyDialogSlice.actions;
export const policyStoreReducer = policyDialogSlice.reducer;