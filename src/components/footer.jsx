import { FiAtSign } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import logo from '../assets/logo.png'

const socialLinks = [
  {
    name: 'LinkedIn',
    link: '/',
    icon: <FaLinkedin className="text-[23px]"/>,
  },
  {
    name: 'X',
    link: '/',
    icon: <FaSquareXTwitter className="text-[23px]"/>,
  },
  {
    name: 'Facebook',
    link: '/',
    icon: <FaFacebookSquare className="text-[23px]" />,
  },
  {
    name: 'Website',
    link: '/',
    icon: <FaEarthAmericas className="text-[23px]" />,
  },
]

const description =
  "Welcome to AutoVibe, your go-to platform for buying and selling vehicles with ease. Whether you are looking to sell your car, truck, or motorcycle, AutoVibe offers a seamless and efficient way to connect with potential buyers. List your ad today and experience the convenience of AutoVibe, where selling your vehicle is just a click away!"

const Footer = () => {
  return (
    <footer className="relative bg-[#191F33] z-50">
      <div className="px-4 py-12 flex flex-col items-center">
        {/* app logo */}
        <div>
          <a href="/" className="flex justify-center items-center gap-5 mb-8 text-white">
            <img
              src={logo}
              className="h-[4rem]"
              alt="Logo"
            />
            <span className="font-semibold text-3xl tracking-wider">AutoVibe</span>
          </a>
          <p className="text-white max-w-xl text-center font-medium text-lg">{description}</p>
        </div>

        {/* social links */}
        <div className="mt-8">
          <span className="text-[#767E94] block text-center mb-6 font-medium text-lg">
            Follow Us
          </span>
          <ul className="flex gap-6 items-center">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-white hover:text-[#767e94]"
                  target="_blank">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>

        {/* email */}
        <div className="text-white mt-6 mb-2 flex gap-2 items-center">
          <FiAtSign size={16} />
          <span className="text-lg font-medium">haroon116butt@gmail.com</span>
        </div>

        {/* call to action */}
        <div className="mt-8">
          <button
            type="button"
            className="py-2.5 px-5 text-base font-semibold bg-gray-800 text-sky-100 rounded-lg hover:bg-gray-100 hover:text-sky-600 flex gap-2 items-center transition duration-300 ease-in-out">
            <ImHeadphones size={20} />
            <span>Book A CAR</span>
          </button>
        </div>
      </div>

      {/* about author or app/copyrights */}
      <div className="bg-[#2E3447]">
        <div className="text-center px-3 py-3">
          <span className="text-[#767E94]">
            Coded with 💙 by{' '}
            <a
              href="https://www.linkedin.com/in/haroonbutt786"
              target="_blank"
              className="text-white">
              AutoVibe{' '}
            </a>
            in Pakistan
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer