import TopBanner from "../../../component/ChatComponent/TopBanner";
import SendMessageContainer from "./SendMessageContainer";
import ConversationContainer from "./ConversationContainer";

const ChatScreen = () => {
  return (
    <div
      className=" w-full h-full flex flex-col"
      style={{
        background: "url(/asset/chat-bg.jpg)",
      }}
    >
      <TopBanner />
      <div className="flex-1  h-[calc(100vh-300px)]">
        <ConversationContainer />
      </div>
      <SendMessageContainer />
    </div>
  );
};

export default ChatScreen;
