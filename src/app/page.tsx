import LeftSidebar from "@/components/leftnavigation";
import MainComponent from "@/components/home_main";
import RightSection from "@/components/right_sidebar";

export const revalidate = 0;

const Home = async () => {
  return <MainComponent />;
};

export default Home;
