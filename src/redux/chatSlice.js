import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_CHAT_COUNT } from "../utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.messages.length >= YOUTUBE_CHAT_COUNT) {
        state.messages.shift(); // remove the first (oldest) item
      }
      state.messages.push(action.payload); // add the new message at the end
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
