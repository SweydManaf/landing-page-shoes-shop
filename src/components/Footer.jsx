import LogoNike from "../assets/logo-nike.svg";

import InstagramIcon from "../assets/instagram-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";
import SpotifyIcon from "../assets/spotify-icon.svg";
import FacebookIcon from "../assets/facebook-icon.svg";

export default function Footer() {
  return (
    <footer className="uppercase text-[#FFD89F] bg-[#0E2624] flex flex-col items-center gap-10 px-10 py-12 overflow-x-hidden">
      <img src={LogoNike} alt="Logo Nike" className="w-40 md:w-min md:h-min" />

      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col gap-2 md:gap-10 items-center md:items-start">
          <p className="text-4xl md:text-5xl">Nike Shop</p>
          <ul className="uppercase text-2xl md:text-3xl text-center md:text-left">
            <li>Eduardo Mondlane avenue, 1234</li>
            <li>Maputo, mozambique</li>
            <li>Copyrights, 2023</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 md:gap-10 items-center md:items-start">
          <p className="text-4xl md:text-5xl">Links</p>
          <ul className="uppercase text-2xl md:text-3xl text-center md:text-left">
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Return policy</a>
            </li>
            <li>
              <a href="">about us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 items-center md:items-start pb-10">
          <p className="text-4xl md:text-5xl">Follow us</p>
          <ul className="uppercase text-2xl md:text-3xl flex gap-4">
            <li>
              <a href="">
                <img
                  src={InstagramIcon}
                  alt=""
                  className="w-[77px] md:w-full"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img src={TwitterIcon} alt="" className="w-[77px] md:w-full" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={SpotifyIcon} alt="" className="w-[77px] md:w-full" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={FacebookIcon} alt="" className="w-[77px] md:w-full" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
