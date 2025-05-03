import Ill from '../assets/illustration-working.svg'

const features = () => {
  return (
    <div className='flex items-center mx-40 gap-10 mt-16'>
        <div>
            <h1 className='text-6xl font-bold text-[#34313C] pb-2'>More than just shorter links</h1>
            <p className='text-[#97969E] text-xl'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <button className='bg-[#29D1D1] text-white rounded-full px-6 py-2 font-bold mt-7'>Get Started</button>
        </div>

        <div>
            <img src={Ill} alt="work" />
        </div>
    </div>
  )
}

export default features