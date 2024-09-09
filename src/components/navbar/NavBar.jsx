import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Features", url: "/features" },
  ];

  return (
    <div className="flex flex-row gap-2 w-full items-center justify-center bg-[#EFFEFF] sticky top-0 z-10">
      <div className="max-w-[1440px] w-full m-2">
        {/* Desktop view */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          <Link href="/">Logo</Link>

          <div className="flex flex-row gap-4 justify-center items-center">
            {menuItems?.map((item, index) => {
              return (
                <Link href={item?.url} key={index}>
                  <p>{item?.name}</p>
                </Link>
              );
            })}

            <Link href="/">
              <p className="text-base font-medium text-colorWhite bg-buttonBgColor rounded-xl py-2 px-5">
                Signup | Login
              </p>
            </Link>
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden flex">
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
}
