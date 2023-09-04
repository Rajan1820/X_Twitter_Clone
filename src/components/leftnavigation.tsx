import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
  BsSearch,
  BsCardList,
  BsPeople,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { CiCircleMore } from "react-icons/ci";

import { cookies, headers } from "next/headers";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHouseUser , faMagnifyingGlass  ,faBell , faEnvelope,faRectangleList , faBookmark , faUserGroup , faUser, faBook , faEllipsis} from "@fortawesome/free-solid-svg-icons";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: faXTwitter,
  },
  {
    title: "Home",
    icon: faHouseUser,
  },
  {
    title: "Explore",
    icon: faMagnifyingGlass,

  },
  {
    title: "Notifications",
    icon: faBell,
  },
  {
    title: "Messages",
    icon: faEnvelope,
  },
  {
    title: "Lists",
    icon: faRectangleList,
  },
  {
    title: "Bookmarks",
    icon: faBookmark,
  },
  {
    title: "Communities",
    icon: faUserGroup,
  },
  {
    title: "Verified",
    icon: faXTwitter,
  },
  {
    title: "Profile",
    icon: faUser,
  },
  {
    title: "More",
    icon: faEllipsis,
  },
];

const LeftSidebar = async () => {
  const supabaseClient = createServerComponentSupabaseClient({
    cookies,
    headers,
  });

  const { data: userData, error: userError } =
    await supabaseClient.auth.getUser();

  return (
    <section className="w-[40%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={
              item.title.toLocaleLowerCase() === "home"
                ? "/"
                : item.title.toLocaleLowerCase() === "profile"
                ? userData.user?.user_metadata.username || "#"
                : `/${item.title.toLowerCase()}`
            }
            key={item.title}
          >
            <div>
              <FontAwesomeIcon icon = {item.icon} />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full m-4 bg-twitterColor p-3 text-xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10 pt-3">
          <FontAwesomeIcon icon = {faUser} size = 'xl' />
          </div>
          <div className="text-left text-sm">
            <div className="font-semibold">
              {userData.user?.user_metadata.full_name}
            </div>
            <div className="">@{userData.user?.user_metadata.username}</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
