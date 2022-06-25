/** Icons */
import {
  MdVerifiedUser,
  MdAddToPhotos,
  MdEventAvailable,
  MdDashboardCustomize,
  MdVpnKey
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TiNews } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    name: "Dashboard",
    logo: <MdDashboardCustomize />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "User",
    logo: <FaUserCircle />,
    link: "/user",
  },
  {
    id: 3,
    name: "Membership",
    logo: <MdVerifiedUser />,
    link: "/membership",
  },
  {
    id: 4,
    name: "Class",
    logo: <IoIosPeople />,
    link: "/class",
  },
  {
    id: 5,
    name: "Booking",
    logo: <MdEventAvailable />,
    link: "/booking",
  },
  {
    id: 6,
    name: "Newsletter",
    logo: <TiNews />,
    link: "/newsletter",
  },
  {
    id: 7,
    name: "Content",
    logo: <MdAddToPhotos />,
    link: "/content",
  },
  {
    id: 8,
    name: "Manage Admin",
    logo: <MdVpnKey />,
    link: "/admin",
  },
  {
    id: 9,
    name: "Logout",
    logo: <FiLogOut />,
    link: "/login",
  },
];
