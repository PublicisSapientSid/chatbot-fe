import { Chat, IGlobalStateProps } from "./types";
import { POST_NEW_CHAT_MESSAGE, UPDATE_CHAT } from "./constants";

export const GlobalReducer = (state: any, action: any): IGlobalStateProps => {
  switch (action.type) {
    case POST_NEW_CHAT_MESSAGE:
      const newChat: Chat = action.payload;
      const updatedChat: Chat[] = state.chats.concat(newChat);
      return {
        ...state,
        isLoading: true,
        chats: updatedChat,
      };
    case UPDATE_CHAT:
      const updatedChatArray: Chat[] = [...action.payload];
      return {
        ...state,
        isLoading: false,
        chats: updatedChatArray,
      };
    default:
      return state;
  }
};
