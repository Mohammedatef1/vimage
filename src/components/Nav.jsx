import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Nav = () => {
  return (
    <header className="shadow-md">
      <nav className="lg:px-[5rem] md:px-[3rem] px-[2rem] bg-[#F6F7F9] relative z-10 py-5 flex justify-between items-center">
        <div>
          <h1 className="text=[#34bb63] text-3xl font-bold font-serif">Vimage</h1>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-center">
              <DropdownMenuSeparator />
              <DropdownMenuItem>Products</DropdownMenuItem>
              <DropdownMenuItem>Industries</DropdownMenuItem>
              <DropdownMenuItem>Who help me</DropdownMenuItem>
              <DropdownMenuItem>About us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="md:flex hidden items-center justify-between w-2/4">
          <a
            className="transition hover:text-[#228043]"
            href="">
            Products
          </a>

          <a
            className="transition hover:text-[#228043]"
            href="">
            Industries
          </a>

          <a
            className="transition hover:text-[#228043]"
            href="">
            Who help me
          </a>

          <a
            className="transition hover:text-[#228043]"
            href="">
            About us
          </a>
        </div>

        <div>
          <button className="text-white bg-[#34bb63] px-8 py-3 rounded-full ">Request a demo</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
