import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
  {
    title: "General Activities",
    path: "/reports",
    icon: <FaIcons.FaLayerGroup />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Reports1",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports3",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Engineering",
    path: "/eng",
    icon: <RiIcons.RiSettingsFill />,
  },
  {
    title: "Human Resources",
    path: "/products",
    icon: <FaIcons.FaUserFriends />,
  },
  {
    title: "Maintenance",
    path: "/products",
    icon: <FaIcons.FaTools />,
  },
  {
    title: "Materials",
    path: "/products",
    icon: <AiIcons.AiOutlineDropbox />,
  },
  {
    title: "Production",
    path: "/products",
    icon: <FaIcons.FaIndustry />,
  },
  {
    title: "Quality",
    path: "/products",
    icon: <SiIcons.SiQualcomm />,
  },
  {
    title: "Safety & Higine",
    path: "/products",
    icon: <AiIcons.AiFillSafetyCertificate />,
  },
];
