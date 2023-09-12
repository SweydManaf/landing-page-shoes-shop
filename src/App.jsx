import "./App.css";

import LogoNike from "./assets/logo-nike.svg";
import MenuIcon from "./assets/hamburguer.svg";

import Shoes1 from "./assets/shoes-1.png";

import StarIcon from "./assets/star-icon.svg";
import Shoes2 from "./assets/shoes-2.png";
import UnderlineYellowImage from "./assets/underline-yellow.svg";
import UnderlineGreenImage from "./assets/underline-green.svg";

import InstagramIcon from "./assets/instagram-icon.svg";
import TwitterIcon from "./assets/twitter-icon.svg";
import SpotifyIcon from "./assets/spotify-icon.svg";
import FacebookIcon from "./assets/facebook-icon.svg";

function App() {
  return (
    <>
      <div className="bg-[#FFD89F]">
        {/* HEADER  */}
        <header className="text-4xl pt-9 md:py-8 px-5 md:px-20">
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

        {/* Section 1 */}
        <section className="uppercase flex flex-col gap-7 md:gap-0 md:flex-row justify-between px-5 md:px-20 py-10 md:py-12 ">
          <div className="flex flex-col gap-20 md:mt-20">
            <div>
              <h2 className="text-4xl md:text-7xl ">
                Fly high with the legendary
              </h2>
              <p className="text-6xl md:text-5xl">nike air jordan 1</p>
            </div>
            <div className="md:flex gap-10 items-center hidden">
              <span className="text-6xl text-[#0E2624]">$430</span>
              <button className="bg-[#30F] text-white text-3xl py-4 px-14 button-box-shadow">
                buy now
              </button>
            </div>
          </div>

          <div className="bg-white w-fit h-fit border-2 border-black shoes1-box-shadow ">
            <img
              src={Shoes1}
              alt=""
              className="py-10 md:py-20  px-2 md:px-10"
            />
          </div>

          <div className="md:hidden flex gap-10 items-center mt-6">
            <span className="text-6xl text-[#0E2624]">$430</span>
            <button className="bg-[#30F] text-white text-3xl py-4 px-14 button-box-shadow">
              buy now
            </button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#0E2624] flex flex-col md:pl-20 pt-16 relative overflow-x-hidden overflow-y-clip">
          <div className="flex flex-col md:flex-row items-center gap-6 ">
            <img src={StarIcon} alt="" className="w-16 md:w-max" />
            <h2 className="text-white text-4xl md:text-6xl uppercase">
              why you will want it?
              <img
                src={UnderlineYellowImage}
                alt=""
                className="m-auto w-full md:w-min"
              />
            </h2>
          </div>

          <div className="hidden md:flex justify-between items-center ">
            <img src={Shoes2} alt="" className="w-[980px] translate-y-52" />

            <div className="text-white text-right flex flex-col gap-6">
              <div className="flex gap-11 pl-10 pr-20">
                <div className="text-8xl">1</div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-5xl">SUPER fEATURE #1 </h4>
                    <img
                      src={UnderlineYellowImage}
                      alt=""
                      className="ml-auto"
                    />
                  </div>
                  <p className="w-60 text-lg ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut volutpat est. Suspendisse dolor magna, hendrerit
                    sed magna sit amet
                  </p>
                </div>
              </div>

              {/* LINE DASHED */}
              <div className="flex items-center ">
                <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
                <div className="border-2 border-dashed w-full"></div>
              </div>

              <div className="flex gap-11 pl-10 pr-20">
                <div className="text-8xl">2</div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-5xl">SUPER fEATURE #2 </h4>
                    <img
                      src={UnderlineYellowImage}
                      alt=""
                      className="ml-auto"
                    />
                  </div>
                  <p className="w-60 text-lg ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut volutpat est. Suspendisse dolor magna, hendrerit
                    sed magna sit amet
                  </p>
                </div>
              </div>

              {/* LINE DASHED */}
              <div className="flex items-center ">
                <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
                <div className="border-2 border-dashed w-full"></div>
              </div>

              <div className="flex gap-11 pl-10 pr-20">
                <div className="text-8xl">3</div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-5xl">SUPER fEATURE #3 </h4>
                    <img
                      src={UnderlineYellowImage}
                      alt=""
                      className="ml-auto"
                    />
                  </div>
                  <p className="w-60 text-lg ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut volutpat est. Suspendisse dolor magna, hendrerit
                    sed magna sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            src={Shoes2}
            alt=""
            className="block md:hidden w-full scale-150 translate-x-16 "
          />

          <div className="bg-white text-[#0E2624] pt-20 pb-10 flex md:hidden justify-between items-center ">
            <div className="text-right flex flex-col gap-6">
              <div className="flex gap-11 pl-10 pr-20 md: ">
                <div className="text-8xl text-shadow">1</div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-4xl md:text-5xl">SUPER fEATURE #1 </h4>
                    <img
                      src={UnderlineYellowImage}
                      alt=""
                      className="ml-auto"
                    />
                  </div>
                  <p className="w-60 text-base ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut volutpat est. Suspendisse dolor magna, hendrerit
                    sed magna sit amet
                  </p>
                </div>
              </div>

              {/* LINE DASHED */}
              <div className="flex items-center ml-4">
                <div className="w-2 h-2 rounded-full bg-[#0E2624]"></div>{" "}
                <div className="border-2 border-dashed border-[#0E2624] w-full "></div>
              </div>

              <div className="flex gap-11 pl-10 pr-20">
                <div className="text-8xl text-shadow">2</div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-4xl md:text-5xl">SUPER fEATURE #2 </h4>
                    <img
                      src={UnderlineYellowImage}
                      alt=""
                      className="ml-auto"
                    />
                  </div>
                  <p className="w-60 text-base ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut volutpat est. Suspendisse dolor magna, hendrerit
                    sed magna sit amet
                  </p>
                </div>
              </div>

              {/* LINE DASHED */}
              <div className="flex items-center ml-4">
                <div className="w-2 h-2 rounded-full bg-[#0E2624]"></div>{" "}
                <div className="border-2 border-dashed border-[#0E2624] w-full "></div>
              </div>

              <div className="flex gap-11 pl-10 pr-20">
                <div className="text-8xl text-shadow">3</div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-4xl md:text-5xl">SUPER fEATURE #3 </h4>
                    <img
                      src={UnderlineYellowImage}
                      alt=""
                      className="ml-auto"
                    />
                  </div>
                  <p className="w-60 text-base ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ut volutpat est. Suspendisse dolor magna, hendrerit
                    sed magna sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-[#FFD89F] md:bg-white px-20  flex flex-col gap-8 md:gap-14 items-center pt-20 md:pt-52 pb-32 overflow-x-hidden">
          <h2 className="text-4xl md:text-6xl text-[#30F] ">
            Join our mailist{" "}
            <img src={UnderlineGreenImage} alt="" className="m-auto w-40" />
          </h2>

          <p className="uppercase text-base md:text-3xl w-80 md:w-[970px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            volutpat est. Suspendisse dolor magna, hendrerit sed magna sit amet,
            tempor efficitur nisl
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2 ">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="bg-white border-[1px] button-box-shadow  md:w-[603px] h-max py-5 pr-[160px] pl-[20px] font-semibold outline-none"
            />

            <button className="bg-[#30F] text-white md:text-black text-3xl py-4 px-14 button-input-box-shadow w-full md:w-min">
              Subscribe
            </button>
          </div>
        </section>

        {/* Section 4*/}
        <section className="uppercase text-[#FFD89F] bg-[#0E2624] flex flex-col items-center gap-10 px-10 py-12 overflow-x-hidden">
          <img
            src={LogoNike}
            alt="Logo Nike"
            className="w-40 md:w-min md:h-min"
          />

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
                    <img
                      src={TwitterIcon}
                      alt=""
                      className="w-[77px] md:w-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src={SpotifyIcon}
                      alt=""
                      className="w-[77px] md:w-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src={FacebookIcon}
                      alt=""
                      className="w-[77px] md:w-full"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
