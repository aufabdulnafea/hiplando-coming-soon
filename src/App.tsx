import logo from './assets/logo.svg'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function App() {

  return (
    <div className="w-screen h-screen flex flex-col font-merr bg-[url(/background-final.webp)] bg-cover bg-left">

      <div className="backdrop-blur-xl flex text-primary-600 px-5 py-7 justify-between">
        <div className='flex items-center gap-2'>
          <img src={logo} width={50} alt="" />
          <h1 className="text-2xl font-bold text-[#1e2421]">Hiplando</h1>
        </div>
        <div className='flex gap-2 text-4xl'>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61562552972685">
            <FaFacebook className='p-2 hover:bg-primary-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-150' />
          </a>
          <a target="_blank" href="https://www.instagram.com/hiplando/">
            <FaInstagram className='p-2 hover:bg-primary-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-150' />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UClLXftsoTF1hySGM-cEYRiA">
            <FaYoutube className='p-2 hover:bg-primary-100 rounded-lg cursor-pointer transition-colors ease-in-out duration-150' />
          </a>
        </div>
      </div>



      <div className="flex flex-1 items-center justify-center -mt-30 px-5">
        <div className="flex flex-col justify-center  max-w-3xl">
          <div>
            <h2 className="text-4xl font-bold text-primary-700 pb-1">Hold your horses!</h2>
            <p className='text-2xl text-primary-500'>A new marketplace for riders is coming <span className='underline font-bold'>soon</span>.</p>
          </div>

          <div className='flex justify-between mt-5 font-sans font-bold'>
            <a target="_blank" href="https://wa.me/33780994477" className='bg-[#25d366] text-[#075e54] p-3 rounded-lg flex-1 flex justify-center cursor-pointer'>
              <div className='flex items-center gap-2'>
                <FaWhatsapp size={30} />
                Join us today on Whatsapp
              </div>
            </a>
          </div>

        </div>
      </div>


    </div>

  )
}

export default App
