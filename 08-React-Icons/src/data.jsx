import { IoHome } from "react-icons/io5";
import { FaBook, FaChalkboard, FaReadme } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import {
  FaArrowRightToBracket,
  FaUpRightAndDownLeftFromCenter,
} from "react-icons/fa6";

export const ICONS_RIGHT = [
  {
    id: 1,
    text: "خانه",
    icon: <IoHome style={{ width: "20px", height: "20px" }} />,
  },
  {
    id: 2,
    text: "دوره های آموزشی",
    icon: <FaBook style={{ width: "20px", height: "20px" }} />,
  },
  {
    id: 3,
    text: "مقالات",
    icon: <FaReadme style={{ width: "20px", height: "20px" }} />,
  },
  {
    id: 4,
    text: "منتور خصوصی",
    icon: <FaChalkboard style={{ width: "20px", height: "20px" }} />,
  },
];
export const ICONS_LEFT = [
  {
    id: 1,
    text: "مشاور اختصاصی",
    icon: <BiSupport style={{ width: "20px", height: "20px" }} />,
  },
  {
    id: 2,
    text: "ورود و ثبت نام",
    icon: <FaArrowRightToBracket style={{ width: "20px", height: "20px" }} />,
  },
  {
    id: 3,
    text: "بزرگ کردن منو",
    icon: (
      <FaUpRightAndDownLeftFromCenter
        style={{ width: "20px", height: "20px" }}
      />
    ),
  },
];
