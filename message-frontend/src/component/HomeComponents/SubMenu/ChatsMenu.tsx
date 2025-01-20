import PeopleList from "../PeopleList/PeopleList";
import ChatMenuTopBanner from "./ChatMenuTopBanner";

const ChatsMenu = () => {
  return (
    <div className="w-full h-full   p-2 py-4 bg-[#2d3031]">
      <ChatMenuTopBanner />
      <div className="mt-2 px-2">
        <PeopleList message="Hello from Dipak" name="Dipak Gautam" />
        <PeopleList message="Hi" name="Mamata Bihene" />
        <PeopleList message="Please call me" name="Ram Bahadur" />
        <PeopleList message="Ka xa kanxa" name="Milan Dai" />
      </div>
    </div>
  );
};

export default ChatsMenu;
