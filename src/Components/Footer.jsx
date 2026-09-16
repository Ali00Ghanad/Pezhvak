import { Link } from 'react-router-dom'
import pezhvakLogo from '../assets/PezhvakLogo.svg'
import { useEffect, useState, useRef } from 'react';
import { changeLanguage, t } from 'i18next';
import i18n from '../i18n';

const Footer = () => {

  const [openDD, setOpenDD] = useState(false);
  const dropDownRf = useRef(null);
  const isPersian = i18n.language === "fa"

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropDownRf.current && !dropDownRf.current.contains(event.target)) {
        setOpenDD(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [openDD])

  return (
    <div className='w-full bg-darkblueLowVolume-bg border-t border-DarkGreen-br flex flex-col p-4 gap-6 md:p-8'>

      <div className='flex items-center'>
        <img width={100} src={pezhvakLogo} />
        <h1 className='text-[34px] font-bold'>PEZHVAK</h1>
      </div>

      <div className='flex justify-between w-full max-w-[1700px] mx-auto p-4
        max-md:flex-col'>


        <div className='flex items-start justify-evenly w-full flex-wrap gap-10 max-sm:flex-col max-sm:items-center *:max-sm:items-center!'>

          <section className='footer-sections'>
            <h3 className='font-bold text-tiffany-txt! text-[clamp(20px,3vw,24px)] text-center'>About</h3>
            <Link to='./aboutus' className="footer-link">About Us</Link>
            <Link className="footer-link">Meet the Team</Link>
          </section>

          <section className='footer-sections'>
            <h3 className='font-bold text-tiffany-txt! text-[clamp(20px,3vw,24px)] text-center'>Getting Started</h3>
            <Link className="footer-link">Improve your account</Link>
            <Link className="footer-link">Get premium access</Link>
            <Link className="footer-link">Check top creators</Link>
          </section>

          <section className='footer-sections'>
            <h3 className='font-bold text-tiffany-txt! text-[clamp(20px,3vw,24px)] text-center'>Social Media</h3>
            <p className='text-muted-text text-center'>Follow us on social media to find out the latest updates on our progress : </p>

            <div className='flex gap-2 mt-6 justify-center'>
              <Link>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                </svg>
              </Link>

              <Link>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </Link>
            </div>

          </section>

        </div>

      </div>

      <div className='border-t border-DarkGreen-br'></div>

      <div className='flex items-center justify-between w-full text-muted-text text-[clamp(12px,3vw,16px)]'>

        <Link>Terms of service</Link>
        <Link>Made by @AliGhanad</Link>


        <div ref={dropDownRf} className='w-fit relative'>

          {
            openDD && (
              <div
                className={`
                  absolute z-50 
                  w-[120px]
                  p-2 rounded-sm
                  flex flex-col gap-1
                  ${isPersian ? "left-0" : "right-0"}
                  bottom-12
                  border border-DarkGreen-br
                  drop-shadow-xl
                  bg-darkest-blue-bg text-black
                  *:bg-darkblueLowVolume-bg *:flex *:gap-2 *:border *:border-DarkGreen-br *:text-white *:hover:text-tiffany-txt 
                  *:px-2 *:py-1 *:rounded-[6px]
              `}>

                <button
                  onClick={() => {
                    changeLanguage("fa")
                    setOpenDD(false)
                  }}> {t("nav.convertToFa")}
                </button>


                <button
                  onClick={() => {
                    changeLanguage("en")
                    setOpenDD(false)
                  }}> {t("nav.convertToEn")}
                </button>
              </div>
            )
          }

          <button
            onClick={() => setOpenDD(prev => !prev)}
            className='
            bg-darkblueLowVolume-bg border border-DarkGreen-br p-2 shrink-0 rounded-[10px]
              hover:bg-transparent'>
            English
          </button>

        </div>

      </div>

    </div>
  )
}

export default Footer
