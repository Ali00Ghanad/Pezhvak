import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ShortCuts({ shortcuts }) {

    const { i18n } = useTranslation()
    const isPersian = i18n.language === 'fa'

    return (
        <div data-aos='fade-up' className='grid grid-cols-4 gap-4 w-full
        max-lg:grid-cols-2'>

            {shortcuts.map((shortcut, index) => (
                <div
                    key={index}
                    className='flex flex-col p-4 rounded-[10px] items-end gap-2 bg-darkblueLowVolume-bg border-DarkGreen-br border'
                >
                    <div className='flex w-full items-start gap-2 h-full
                    max-sm:flex-wrap'>
                        <div className=' bg-tiffany-txt/20 rounded-full p-2 shrink-0'>
                            <img width={25} src={shortcut.pic} />
                        </div>

                        <div>
                            <h3 className='text-[20px]'>{shortcut.title}</h3>
                            <p className='text-muted-text'>{shortcut.paragraph}</p>
                        </div>
                    </div>

                    <button className='text-muted-text'>
                        {
                            isPersian ?
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                                </svg>

                                :
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                </svg>
                        }
                    </button>
                </div>
            ))}

        </div>
    )
}