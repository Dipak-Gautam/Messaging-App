import SettingOptions from "./Components/SettingOptions";
import TopBanner from "./Components/TopBanner";

const Setting = () => {
  return (
    <div className=" flex flex-col flex-1 text-white ">
      <TopBanner />
      <SettingOptions />
    </div>
  );
};

export default Setting;
