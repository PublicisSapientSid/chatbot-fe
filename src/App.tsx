import React from "react";
import "./App.css";
import { GlobalState } from "./data-service/global-context";
import ChatWindow from "./page/ChatWindow/ChatWindow";

function App() {
  return (
    <GlobalState isLoading={false} chats={[]} toastMessage={""}>
      <ChatWindow />
    </GlobalState>
  );
}

export default App;
