import React from 'react'
import noteIcon from '../../assets/noteMusic.svg'

const MakesUsDiff = () => {

    const differentValues = [
        {
            icon:
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd" />
                </svg>
            ,
            title: 'Community First',
            text: 'We\'re more than a platform. we\'re a community of creators, listeners, and dreamers.'
        },
        {
            icon:
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clipRule="evenodd" />
                </svg>

            ,
            title: 'Safe & Respectful',
            text: 'We ensure a supportive enviroment where everyone feels safe to be themselves.'
        },
        {
            icon:
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10.9715 12.2168c-.0118.0406-.0234.0795-.0347.1166.0391.0574.0819.1192.1278.1855.3277.473.812 1.172 1.2141 2.0892.2147-.2864.4616-.5799.7447-.8832l-.0024-.0317c-.0236-.3254-.0361-.7783.0091-1.2905.0882-.9978.4095-2.3695 1.4623-3.39555 1.0079-.98229 2.3556-1.42385 3.4044-1.59916.5344-.08932 1.0323-.11665 1.4296-.09869.1954.00883.3932.02974.5707.07034.0872.01996.1979.05097.3114.10232.0867.03927.3102.14854.4769.39195.1453.21217.1993.45929.22.55586.0321.14963.0559.32134.0712.50398.0307.36676.0311.82807-.0291 1.32915-.1181.9828-.4871 2.2522-1.47 3.2102-1.0357 1.0093-2.4736 1.3803-3.5197 1.5249-.542.0749-1.0253.0952-1.3736.0969-.036.0002-.0706.0002-.1037 0-.931.9987-1.2688 1.7317-1.4072 2.3512-.0345.1545-.0581.303-.0739.451.0004.0342.0006.0685.0006.1029v2c0 .5523-.4477 1-1 1s-1-.4477-1-1c0-.1991-.0064-.4114-.0131-.6334-.0142-.4713-.0298-.9868.0117-1.5138-.0358-1.8786-.7555-2.9405-1.40123-3.8932-.13809-.2037-.2728-.4025-.39671-.6032-.05186-.0105-.10709-.0222-.16538-.035-.39471-.0865-.93803-.2268-1.53416-.4432-1.15636-.4197-2.67587-1.1841-3.58743-2.5531-.90552-1.35993-1.03979-2.96316-.96002-4.15955.04066-.60984.13916-1.15131.24451-1.56046.05234-.20327.10977-.38715.16845-.53804.02865-.07367.06419-.15663.10713-.23658.02132-.03968.0522-.09319.0933-.15021.03213-.04456.11389-.15344.24994-.25057.18341-.13093.36351-.16755.42749-.17932.0854-.01572.16019-.01941.21059-.02024.1023-.0017.20235.00733.28493.0176.17089.02126.37298.06155.58906.11526.43651.1085.99747.2886 1.59668.54576 1.16944.50188 2.63819 1.3629 3.52935 2.70126.9248 1.38891.9601 2.99601.818 4.14739-.0726.589-.1962 1.0975-.3016 1.4594Z" />
                </svg>
            ,
            title: 'Learning & Growing',
            text: 'From lessons to feedback, we help you grow your skills and confidence.'
        },
        {
            icon:
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M4.00003 7h8.02747c.2487-2.24998 2.1562-4 4.4725-4C18.9853 3 21 5.01472 21 7.5S18.9853 12 16.5 12c-.8801 0-1.702-.2533-2.3956-.6902L11 14.4142V19h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H6.99999c-.55228 0-1-.4477-1-1s.44772-1 1-1h2.00004v-4.5858L3.29292 8.70711c-.286-.286-.37155-.71612-.21677-1.08979C3.23093 7.24364 3.59557 7 4.00003 7ZM16 7h-1.95c.2316-1.14112 1.2405-2 2.45-2C17.8807 5 19 6.11929 19 7.5S17.8807 10 16.5 10c-.3228 0-.6308-.06086-.9138-.17198l1.1209-1.12091c.286-.286.3716-.71612.2168-1.08979C16.7691 7.24364 16.4045 7 16 7Z" clipRule="evenodd" />
                </svg>
            ,
            title: 'Global Reach',
            text: 'Music has no boundaries. Neither do we. Connect with people worldwide.'
        },
    ]
    return (
        <div data-aos='fade-up' className='p-10 rounded-[10px] border border-DarkGreen-br bg-darkblueLowVolume-bg'>

            <h2 className='text-tiffany-txt! mb-5 text-[25px]'>What Makes Us Different</h2>

            <div className='grid grid-cols-4 w-full gap-4 
            max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {
                    differentValues.map((item, index) => (
                        <div key={index} className='flex flex-col border border-DarkGreen-br gap-4 justify-between bg-darkest-blue-bg/20 p-4 rounded-[10px]'>

                            <div className='flex items-center gap-x-2'>
                                <div className='rounded-full p-2 bg-tiffany-bg/30 w-fit shrink-0'>
                                    {item.icon}
                                </div>
                                <h3 className='text-[20px] font-semibold'>{item.title}</h3>
                            </div>

                            <p className='text-muted-text' >{item.text}</p>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MakesUsDiff
