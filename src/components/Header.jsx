import LogoNike from "../assets/logo-nike.svg";
import MenuIcon from "../assets/hamburguer-icon.svg";
import CloseIcon from "../assets/close-menu-icon.svg";

import Number2Icon from "../assets/number-2-icon.svg";
import Number3Icon from "../assets/number-3-icon.svg";
import Number4Icon from "../assets/number-4-icon.svg";
import Number5Icon from "../assets/number-5-icon.svg";

import { useState } from "react";
import { Reveal } from "react-awesome-reveal";

export default function Header() {
  const [opened, setIsOpened] = useState(false);

  return (
    <header className="bg-[#FFD89F] text-4xl pt-9 md:py-8 px-5 md:px-20">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="uppercase hidden md:block">
            <a href="" onClick={(e) => e.preventDefault()}>
              Home
            </a>
          </li>
          <li className="uppercase hidden md:block">
            <a href="" onClick={(e) => e.preventDefault()}>
              Women
            </a>
          </li>
          <li className="">
            <a href="" onClick={(e) => e.preventDefault()}>
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
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={CloseIcon} alt="Menu Hamburguer" />
              </a>
            ) : (
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={MenuIcon} alt="Menu Hamburguer" />
              </a>
            )}
          </li>
          <li className="uppercase hidden md:block">
            <a href="" onClick={(e) => e.preventDefault()}>
              Men
            </a>
          </li>
          <li className="uppercase hidden md:block">
            <a href="" onClick={(e) => e.preventDefault()}>
              Kids
            </a>
          </li>
        </ul>
      </nav>
      {opened && (
        <Reveal>
          <ul className="bg-[#FFD89F] w-screen h-screen pl-5 pr-10 mt-16 flex flex-col gap-16">
            <li className="flex justify-between">
              <a href="" onClick={(e) => e.preventDefault()}>
                Home
              </a>
              <img src={Number2Icon} alt="" />
            </li>
            <li className="flex justify-between">
              <a href="" onClick={(e) => e.preventDefault()}>
                Women
              </a>
              <img src={Number3Icon} alt="" />
            </li>
            <li className="flex justify-between">
              <a href="" onClick={(e) => e.preventDefault()}>
                men
              </a>
              <img src={Number4Icon} alt="" />
            </li>
            <li className="flex justify-between">
              <a href="" onClick={(e) => e.preventDefault()}>
                kids
              </a>
              <img src={Number5Icon} alt="" />
            </li>
          </ul>
        </Reveal>
      )}
    </header>
  );
}
