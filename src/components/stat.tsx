import Brand from '../assets/icon-brand-recognition.svg'
import Detail from '../assets/icon-detailed-records.svg'
import Custom from '../assets/icon-fully-customizable.svg'

const stat = () => {
  return (
    <div className="mt-20 mx-40 mb-20">
        <div className="text-center w-[40%] mx-auto">
            <h1 className='text-3xl font-bold text-[#34313C] mb-5'>Advanced Statistics</h1>
            <p className="text-[#97969E] mb-20">Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>

        <div className='flex gap-7'>
          <div className='relative'>
            <div className='bg-[#3A3053] rounded-full w-[20%] h-[22%] absolute -translate-y-1 left-7 flex items-center justify-center'>
              <img src={Brand} alt="icon" className='mx-auto my-auto' />
            </div>
            <div className='bg-white shadow-lg rounded-md px-7 pb-10 pt-20'>
              <h1 className='font-bold text-xl text-[#34313C]'>Brand Recognition</h1>
              <p className='text-[#97969E] mt-5'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content</p>
            </div>
          </div>

          <div className='relative mt-5'>
            <div className='bg-[#3A3053] rounded-full w-[20%] h-[24%] absolute -translate-y-1 left-7 flex items-center justify-center'>
              <img src={Detail} alt="icon" className='mx-auto my-auto' />
            </div>
            <div className='bg-white shadow-lg rounded-md px-7 pb-10 pt-20'>
              <h1 className='font-bold text-xl text-[#34313C]'>Detaild Records</h1>
              <p className='text-[#97969E] mt-5'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
          </div>

          <div className='relative mt-10'>
            <div className='bg-[#3A3053] rounded-full w-[21%] h-[25%] absolute -translate-y-1 left-7 flex items-center justify-center'>
              <img src={Custom} alt="icon" className='mx-auto my-auto' />
            </div>
            <div className='bg-white shadow-lg rounded-md px-7 pb-10 pt-20'>
              <h1 className='font-bold text-xl text-[#34313C]'>Fully Customizable</h1>
              <p className='text-[#97969E] mt-5'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default stat
