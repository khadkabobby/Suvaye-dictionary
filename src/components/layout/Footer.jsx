import Biglogo from "../../assets/logobig.png";
import TwitterLogo from "../../assets/twitter.svg";
import { usePageContext } from "../../context/PageContext";

const Footer = () => {
  const { setCurrentPage } = usePageContext();
  return (
    <footer className="w-[70%] mx-auto mt-48 relative">
      <div className="w-full bg-[#3EBCF7] p-12 rounded-[40px] text-white flex flex-col rotate">
        <div className="flex justify-end items-center gap-4">
          <div className="bg-white h-[35px] py-2 px-4 rounded-2xl">
            <figure className="w-[29px]">
              <img src={TwitterLogo} alt="Logo" className="w-full" />
            </figure>
          </div>
          <p className="text-shadow sm:text-4xl lg:text-8xl">suvaye.official</p>
        </div>
        <p className="flex justify-end mr-8 md:text-2xl font-medium mt-2">
          Follow us on twitter for latest updates
        </p>
      </div>
      <div className="absolute lg:-top-40 md:-top-20 sm:-top-20 left-20">
        <figure
          className="w-[150px] lg:w-[200px] cursor-pointer"
          title="go to next page"
          onClick={() => setCurrentPage("details")}
        >
          <img src={Biglogo} alt="biglogo" className="w-full" />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
