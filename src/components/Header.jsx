import LogoNike from "../assets/logo-nike.svg";
import MenuIcon from "../assets/hamburguer-icon.svg";
import CloseIcon from "../assets/close-menu-icon.svg";

import Number2Icon from "../assets/number-2-icon.svg";
import Number3Icon from "../assets/number-3-icon.svg";
import Number4Icon from "../assets/number-4-icon.svg";
import Number5Icon from "../assets/number-5-icon.svg";

import { useState } from "react";

export default function Header() {
  const [opened, setIsOpened] = useState(false);

  return (
    <header className="bg-[#FFD89F] text-4xl pt-9 md:py-8 px-5 md:px-20">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="uppercase hidden md:block">
            <a href="">Home</a>
          </li>
          <li className="uppercase hidden md:block">
            <a href="">Women</a>
          </li>
          <li className="">
            <a href="">
              <img
                src={LogoNike}
                alt="Logo Nike"
                className="w-[138px] h-[52px] md:w-fit md:h-fit"
              />
            </a>
          </li>
          <li
            className="block md:hidden"
            onClick={(e) => {
              e.preventDefault();
              setIsOpened(!opened);
            }}
          >
            {opened ? (
              <a href="">
                <img src={CloseIcon} alt="Menu Hamburguer" />
              </a>
            ) : (
              <a href="">
                <img src={MenuIcon} alt="Menu Hamburguer" />
              </a>
            )}
          </li>
          <li className="uppercase hidden md:block">
            <a href="">Men</a>
          </li>
          <li className="uppercase hidden md:block">
            <a href="">Kids</a>
          </li>
        </ul>
      </nav>
      {opened && (
        <ul className="w-screen h-screen pl-5 pr-10 mt-16 flex flex-col gap-16">
          <li className="flex justify-between">
            <a href="">Home</a>
            <img src={Number2Icon} alt="" />
          </li>
          <li className="flex justify-between">
            <a href="">Women</a>
            <img src={Number3Icon} alt="" />
          </li>
          <li className="flex justify-between">
            <a href="">men</a>
            <img src={Number4Icon} alt="" />
          </li>
          <li className="flex justify-between">
            <a href="">kids</a>
            <img src={Number5Icon} alt="" />
          </li>
        </ul>
      )}
    </header>
  );
}
