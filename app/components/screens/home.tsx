import { ArrowBigRightDash } from "lucide-react";
import Nav from "../global/nav";
import Icon from "../icons";
export default function HomePage() {
  return (
    <section className=" font-inter p-5 pb-0 w-full h-screen relative overflow-hidden bg-white text-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: "url('/img/inmotion_bg.svg')",
          backgroundSize: "120%",
        }}
      ></div>

      {/* Radial blur */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[80vw] h-[40vw] bg-[radial-gradient(ellipse,_rgba(255,180,0,.7)_0%,_rgba(255,255,255,0)_70%)] blur-3xl rounded-full" />
      </div>

      <header className="relative h-full w-full flex flex-col items-center md:justify-between sm:overflow-hidden z-10">
        {/* Navbar */}
        <Nav />

        {/* Hero */}
        <div className="relative hero text-center flex flex-col w-full items-center flex-1 justify-center">
          <p className="flex items-center gap-2 text-xs md:text-base">
            <Icon name="award2" />
            <span>Nigeria's first Digital taxi media Platform</span>
            <Icon name="award" />
          </p>

          <h1 className="text-6xl md:text-8xl  font-medium tracking-tighter max-w-3xl mx-auto mb-4">
            Saw it <span className=" font-light">on</span> Nibi
          </h1>
          <h2 className="text-2xl font-light max-w-2xl tracking-tighter">
            Enter Shop/Ad Code
          </h2>

          {/* <div className="flex items-center gap-2"> */}
          <label className="relative flex flex-row outline pl-10 pr-5 pt-5 pb-4 rounded-full gap-1 bg-white items-center mt-10 mb-5">
            <span className="font-medium text-slate-400 text-xl">Nibi.ng/</span>
            <input
              type="text"
              id="nibiInput"
              className="border-none outline-none text-2xl min-w-[20px] max-w-[150px] max-h-[40px] tracking-[3px] font-black mr-[50px]"
            />
            <span className="text-white cursor-pointer absolute right-0 top-0 h-full aspect-square rounded-full border border-primary flex items-center justify-center bg-primary">
              <ArrowBigRightDash size={40} className="" />
            </span>
          </label>
          <a href="https://wa.me/2347078065016" className="text-sm underline text-center cursor-pointer">Contact Us</a>
          {/* <span className="h-full flex-1 aspect-square rounded-full border-red border max-h-[68px] bg-white flex items-center justify-center"> View</span>
          </div> */}

          {/* Floating Icons */}
          {/* Floating Icons - Fixed positioning */}
          <div className="heroIcons absolute pointer-events-none select-none">
            <Icon
              name="bluetooth"
              className="absolute w-10 h-10"
              // style={{ top: "-3%", right: "36%" }}
            />
            <Icon
              name="headset"
              className="absolute w-10 h-10"
              // style={{ bottom: "25%", right: "10%" }}
            />
            <Icon
              name="mic"
              className="absolute w-10 h-10"
              // style={{ bottom: "25%", left: "10%" }}
            />
            <Icon
              name="portableSpeaker"
              className="absolute w-10 h-10"
              // style={{ top: "-10%", left: "33%" }}
            />
            <Icon
              name="speaker"
              className="absolute w-10 h-10 "
              // style={{ left: "5%", top: "50%" }}
            />
            <Icon
              name="speaker1"
              className="absolute w-10 h-10"
              // style={{ right: "27%", top: "9%" }}
            />
            <Icon
              name="taxi"
              className="absolute w-10 h-10"
              // style={{ left: "19%", top: "9%" }}
            />
            <Icon
              name="taxi"
              className="absolute w-10 h-10"
              // style={{ right: "20%", bottom: "35%" }}
            />
          </div>
        </div>

        {/* Car Images */}
        <Icon
          name="taxi"
          className="absolute w-10 h-10 left-20 -top-28 animate-drive-down -rotate-90"
        />
        <Icon
          name="taxi"
          className="absolute w-10 h-10 right-20 -bottom-28 animate-drive-up rotate-90"
        />
        <div className="relative bg-primary">
          <Icon
            name="taxi"
            className="absolute w-10 h-10 -right-28 animate-drive-left -top-10"
          />
          <img
            src="/img/inmotionstripes.svg"
            className="w-full"
            alt="nibi background"
          />
        </div>
      </header>
    </section>
  );
}
