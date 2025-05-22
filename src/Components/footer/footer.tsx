import { Icon } from "../Icon.component/Icon";

export function Footer () {
    return (
        <div className="footer-legal-social flex flex-col md:flex-row w-full h-auto px-4 md:px-20 py-4 justify-between items-center">
            <div className="footer-legal flex flex-col md:flex-row md:items-center w-full md:w-1/2 h-auto md:h-full">
              <p className='footer-lang text-base font-semibold text-gray-800'>English</p>
              <p className='footer-copyright text-base font-semibold text-gray-800 mt-1 md:mt-0'>©  2025 Hootsuite Inc. All Rights Reserved.</p>
              <div className="footer-links flex flex-wrap md:flex-nowrap md:space-x-3 mt-2 md:mt-0">
                <p className="footer-link text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Legal Center</p><span className="footer-sep text-gray-800">|</span>
                <p className="footer-link text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Trust Center</p><span className="footer-sep text-gray-800">|</span>
                <p className="footer-link text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Privacy</p><span className="footer-sep text-gray-800">|</span>
                <p className="footer-link text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Cookie Preferences</p><span className="footer-sep text-gray-800">|</span>
                <p className="footer-link text-gray-800 hover:text-blue-800 font-semibold text-base cursor-pointer">Accessibilty</p>
              </div>
            </div>

            <div className="footer-social flex space-x-4 mt-4 md:mt-0">
              <Icon icon="ri-instagram-line" className="footer-social-icon text-3xl cursor-pointer" />
              <Icon icon="ri-facebook-fill" className="footer-social-icon text-3xl cursor-pointer" />
              <Icon icon="ri-twitter-fill" className="footer-social-icon text-3xl cursor-pointer" />
              <Icon icon="ri-youtube-fill" className="footer-social-icon text-3xl cursor-pointer" />
              <Icon icon="ri-linkedin-fill" className="footer-social-icon text-3xl cursor-pointer" />
              <Icon icon="ri-pinterest-fill" className="footer-social-icon text-3xl cursor-pointer" />
              <Icon icon="ri-tiktok-fill" className="footer-social-icon text-3xl cursor-pointer" />
            </div>
        </div>
    )
}