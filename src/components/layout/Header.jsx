import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav>
      <section className="w-[70%] my-0 mx-auto flex">
        <div className="flex items-center gap-3.5 cursor-pointer">
          <figure className="w-[63px]">
            <img src={Logo} alt="logo" className="w-full" />
          </figure>
            <p className="text-3xl font-medium">Suvaye Dictionary</p>
        </div>
      </section>
    </nav>
  );
};

export default Header;
