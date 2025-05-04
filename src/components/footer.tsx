import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const footer = () => {
  return (
    <div>
      <div className="bg-[#4B406B] items-center justify-center flex-col flex py-10">
        <h1 className="text-white font-bold text-3xl">Boost your links today</h1>
      <button className='bg-[#29D1D1] text-white rounded-full px-6 py-2 font-bold mt-7'>Get Started</button>
      </div>

      <div className="bg-[#232027] px-40 py-12">
        <div className="flex gap-72 text-white">
            <div>
                <h1 className="text-3xl font-bold">Shortly</h1>
            </div>

            <div className="flex gap-14">
                <div>
                    <h1 className="font-bold mb-5">Features</h1>
                    <ul className="text-sm space-y-2">
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold mb-5">Resources</h1>
                    <ul className="text-sm space-y-2">
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold mb-5">Company</h1>
                    <ul className="text-sm space-y-2">
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="flex gap-5 text-2xl">
                    <BiLogoFacebookSquare />
                    <FaTwitter />
                    <FaPinterest />
                    <FaInstagram />
                </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default footer
