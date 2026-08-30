import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",

    resources: {
        fa: {
            translation: {
                nav: {
                    pezhvakTitle: "پژواک",
                    Home: "خانه",
                    Explore: "جست و جو",
                    Lessons: "کلاس ها",
                    AboutUs: "درمورد ما",
                    inputPh: "آهنگ ها، هنرمندان و کلاس هارو پیدا کنید",
                    convertToFa: "فارسی",
                    convertToEn: "انگلیسی",
                },

                homeHeader: {
                    title: 'اشتراک بگذار . جستجو کن . مهارت کسب کن',
                    description: '.آهنگ هات رو ضبط کن و با دنیا و طرفدارهات به اشتراک بگذار',
                    btnUpload: 'بارگذاری آهنگ',
                    btnExplore: 'جستجو کن',
                    soloOnly: 'فقط فردی',
                    soloOnlyDes: 'فقط خودت و صدای خودت',
                    connect: 'ارتباط',
                    connectDes: 'کامنت بذار ، لایک کن و با بقیه ارتباط برقرار کن',
                    earn: 'کسب کن',
                    earnDes: 'آهنگ هات رو بفروش',

                },

                teacher: {
                    title: 'برای مدرسان',
                    description: 'پکیج های آموزشی بساز و اطلاعات خود را به اشتراک بگذار و کسب درآمد کن',
                    options1: 'پکیج هات رو بارگذازی کن',
                    options2: 'نوشته ها و نیازمندی هارو به اشتراک بگذار',
                    options3: 'با شاگردها در ارتباط باش',
                    btn: 'اطلاعات بیشتر'
                },

                artist: {
                    title: 'برای شاگردان',
                    description: 'آهنگ هات رو به اشتراک بگذار',
                    options1: 'آهنگ هات رو بارگذاری',
                    options2: 'جستجو کن و بقیه رو دنبال کن',
                    options3: 'یاد بگیر و دنبال کننده های بیشتری جذب کن',
                    btn: 'اطلاعات بیشتر'
                },

            },
        },

        en: {
            translation: {
                nav: {
                    pezhvakTitle: "PEZHVAK",
                    Home: "Home",
                    Explore: "Explore",
                    Lessons: "Lessons",
                    AboutUs: "AboutUs",
                    inputPh: "Search for songs, artists and lessons",
                    convertToFa: "Persian",
                    convertToEn: "English",

                },
                homeHeader: {
                    title: 'Share . Explore . Learn',
                    description: 'Record your music, share it with the world connect with real fans.',
                    btnUpload: 'Upload a Song',
                    btnExplore: 'Explore Music',
                    soloOnly: 'Solo Only',
                    soloOnlyDes: 'Just You and your voice',
                    connect: 'Connect',
                    connectDes: 'Comment , like and make connection with others',
                    earn: 'Earn',
                    earnDes: 'Sell your musics',

                },

                teacher: {
                    title: 'For Teachers',
                    description: 'Share your Music, grow your audience, and start earning.',
                    options1: 'Upload Your Packages',
                    options2: 'Add notes and materials',
                    options3: 'Engage with your students',
                    btn: 'Learn More'
                },

                artist: {
                    title: 'For Artists',
                    description: 'Share your Music, grow your audience, and start earning.',
                    options1: 'Upload Your Songs',
                    options2: 'Explore and follow others',
                    options3: 'Learn and grow your audience',
                    btn: 'Learn More'
                }

            },
        },
    },
});

export default i18n;