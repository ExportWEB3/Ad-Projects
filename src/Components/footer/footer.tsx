import { Icon } from "../Icon.component/Icon";

export function Footer () {
    return (
        <div className="flex flex-row w-w90 h-20 px-20 justify-between ">
            <div className="flex flex-col w-1/2 h-full">
              <p className='text-base font-semibold text-gray-800'>English</p>
              <p className='text-base font-semibold text-gray-800 mt-3'>©  2025 Hootsuite Inc. All Rights Reserved.</p>
            <div className="w-full h-fit flex space-x-3">
              <p className="text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Legal Center</p><a>|</a>
              <p className="text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Trust Center</p><a>|</a>
              <p className="text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Privacy</p><a>|</a>
              <p className="text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Cookie Preferences</p><a>|</a>
              <p className="text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Accessibilty</p>
              </div>
            </div>


              <div className="w-96 h-20 items-center flex space-x-5">
              <Icon
                icon="ri-instagram-line"
                className="text-3xl cursor-pointer"
               />
               <Icon
               icon="ri-facebook-fill"
               className="text-3xl cursor-pointer"
                />
                <Icon
               icon="ri-twitter-fill"
               className="text-3xl cursor-pointer"
                />
                <Icon
               icon="ri-youtube-fill"
               className="text-3xl cursor-pointer"
                />
                <Icon
               icon="ri-linkedin-fill"
               className="text-3xl cursor-pointer"
                />
                <Icon
               icon="ri-pinterest-fill"
               className="text-3xl cursor-pointer"
                />
                <Icon
               icon="ri-tiktok-fill"
               className="text-3xl cursor-pointer"
                />
              </div>

        </div>
    )
}