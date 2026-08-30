import React from 'react'

export default function ShortCuts({ shortcuts }) {
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
                            <h2 className='text-[20px]'>{shortcut.title}</h2>
                            <p className='text-muted-text'>{shortcut.paragraph}</p>
                        </div>
                    </div>

                    <button className='text-muted-text'>{`-->`}</button>
                </div>
            ))}

        </div>
    )
}