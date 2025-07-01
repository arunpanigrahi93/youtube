import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_CHAT_COUNT } from "../utils/constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.messages.splice(YOUTUBE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
