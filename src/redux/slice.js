import { createSlice } from '@reduxjs/toolkit'
import { policies } from '../common/config';

export const policyDialogSlice = createSlice({
    name: 'policy',
    initialState: policies,
    reducers: {
        setPolicy: (policy, param)  => {
            console.log('set policy ', policy, param.payload);
            policy = param.payload;
            return policy;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setPolicy} = policyDialogSlice.actions;
export const policyStoreReducer = policyDialogSlice.reducer;