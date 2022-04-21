import { FaCheckCircle } from "react-icons/fa";
import { IoIosPersonAdd, IoIosStar } from "react-icons/io";

export const registrationSections = (currentPage) => {
  return [
    {
      id: 1,
      name: "1. Personal details",
      logo:
        currentPage === 2 ? (
          <FaCheckCircle size="2.5vw" />
        ) : (
          <IoIosPersonAdd size="2.5vw" />
        ),
    },
    { id: 2, name: "2. Your favorites", logo: <IoIosStar size="2.5vw" /> },
  ];
};
