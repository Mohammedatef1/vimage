const Nav = () => {
  return (
    <header>
      <nav className="px-[5rem] relative z-10 bg-trasparent py-12 flex justify-between items-center">
        <div>
          <h1 className="text=[#34bb63] text-3xl font-bold font-serif">Vimage</h1>
        </div>

        <a href="">Products</a>

        <a href="">Industries</a>

        <a href="">Who help me</a>

        <a href="">About us</a>

        <div>
          <button className="text-white bg-[#34bb63] px-8 py-3 rounded-full ">Request a demo</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
