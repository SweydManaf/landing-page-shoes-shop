import LogoNike from "../assets/logo-nike.svg";
import MenuIcon from "../assets/hamburguer.svg";

export default function Header() {
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
          <li className="block md:hidden">
            <a href="">
              <img src={MenuIcon} alt="Menu Hamburguer" />
            </a>
          </li>
          <li className="uppercase hidden md:block">
            <a href="">Men</a>
          </li>
          <li className="uppercase hidden md:block">
            <a href="">Kids</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
