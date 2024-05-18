import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sendEmail from "../../services/apiEmail";

const initialState = {
  error: null,
  success: null,
  alertOpen: false,
  isSending: false,
  formData: null,
};

const sendContato = createAsyncThunk("emails/sendContato", async ({ data }) => {
  const results = await sendEmail({ data });
  if (results !== "OK") throw new Error(results);
});

const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    resetFormData: () => {
      return initialState;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(sendContato.fulfilled, (state) => {
        state.error = false;
        state.success = true;
        state.alertOpen = true;
        state.isSending = false;
      })
      .addCase(sendContato.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendContato.rejected, (state) => {
        state.error = true;
        state.success = false;
        state.alertOpen = true;
        state.isSending = false;
      }),
});

export default emailsSlice.reducer;

export const { setFormData, resetFormData } = emailsSlice.actions;

export { sendContato };
