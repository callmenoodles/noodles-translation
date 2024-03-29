import Link from "next/link";
import Navbar from "./Navbar";

const options = ["Translation", "Proofreading", "Transcription"];

const Header = () => {
  return (
    <div className="absolute border-b w-11/12 h-20 flex flex-row justify-around items-center">
      <Link href="/">
        <div className="flex flex-row items-center cursor-pointer">
          <img
            src="/noodles.png"
            alt="noodles logo"
            className="mr-3 mt-1"
            style={{ maxHeight: "31px" }}
          />
          <h1 className="text-xl font-normal">
            <span className="font-semibold">Noodles</span> Translation
          </h1>
        </div>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
