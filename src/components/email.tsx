const email = () => {
  return (
    <div className='flex mt-10 bg-[#4B406B] mx-40 py-10 px-10 rounded-md'>
      <input type='text' className="bg-white h-10 w-full mr-5 rounded-md pl-5 text-sm" placeholder="Shorten a link here..." />
      <button className="bg-[#29D1D1] w-32 rounded-md text-white font-bold">Shorten it!</button>
    </div>
  )
}

export default email