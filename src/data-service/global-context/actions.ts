import { POST_NEW_CHAT_MESSAGE, UPDATE_CHAT } from "./constants";
import { Chat } from "./types";

export const postNewChatMessage = (payload: Chat) => ({
  type: POST_NEW_CHAT_MESSAGE,
  payload,
});

export const updateChat = (payload: Chat[]) => ({
  type: UPDATE_CHAT,
  payload,
});
