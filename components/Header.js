import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <div>
            <div className="flex items-center">
                <Image 
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                    height={70}
                    width={70}
                    layout="fixed"    
                />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
            <input
                className="flex ml-2 items-center bg-transparent focus:outline-none"
                placeholder="Search Facebook"
            />
            </div>
         </div>


         <div>


         </div>


         <div>


         </div>
        </div>
    )
}

export default Header;
