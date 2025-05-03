import Logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <div className='flex justify-between mx-40 mt-10 items-center'>
      <div className='flex items-center gap-10'>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div>
          <ul className='flex gap-5 text-[#97969E] font-bold'>
            <a href="#"><li>Features</li></a>
            <a href="#"><li>Pricing</li></a>
            <a href="#"><li>Resources</li></a>
          </ul>
        </div>
      </div>

      <div className='flex gap-5 cursor-pointer'>
        <button className='text-[#97969E] font-bold'>Login</button>
        <button className='bg-[#29D1D1] text-white rounded-full px-5 py-1 font-bold'>Sign Up</button>
      </div>
    </div>
  )
}

export default Nav