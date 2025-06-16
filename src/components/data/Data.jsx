import { RiTwitterXLine } from "react-icons/ri";
import { America, AmericaBg, Australia, AustraliaBg, Britain, BritainBg, Canada, CanadaBg, France, FranceBg, Germany, GermanyBg, Hungary, HungaryBg, Malaysia, MalaysiaBg, Service1, Service2, Service3, Service4, Service5, Service6, Service7 } from "../../UI/AllImages"
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export const NavDataConfig = [
    {
        to: 'home',
        label: 'Home',
    },
    {
        to: 'about',
        label: 'About',
    },
    {
        to: 'service',
        label: 'Services',
    },
    {
        to: 'studyAborad',
        label: 'Aborad',
    },
    {
        to: 'scholarship',
        label: 'Scholarship',
    },

    {
        to: 'contact',
        label: 'Contact_Us',
    },
]

export const serviceData = [
    {
        icon: Service1,
        text: "Providing academic admission",
    },
    {
        icon: Service2,
        text: "Assistance in obtaining a student travel visa",
    },
    {
        icon: Service3,
        text: "Book the most appropriate flight in terms of price and arrival time",
    },
    {
        icon: Service4,
        text: "Booking accommodation with a family or in student housing",
    },
    {
        icon: Service5,
        text: "Book an airport reception",
    },
    {
        icon: Service6,
        text: "Explaining travel procedures and documents required upon arrival in the country of study",
    },
    {
        icon: Service7,
        text: "Continuous communication with our students and supporting them throughout their studies abroad",
    },

]

export const studyData = [
    {
        icon: Britain,
        img: BritainBg,
        text: "Study in Britain",
    },
    {
        icon: Australia,
        img: AustraliaBg,
        text: "Study in Australia",
    },
    {
        icon: America,
        img: AmericaBg,
        text: "Study in America",
    },
    {
        icon: Germany,
        img: GermanyBg,
        text: "Study in Germany",
    },
    {
        icon: Canada,
        img: CanadaBg,
        text: "Study in Canada",
    },
    {
        icon: France,
        img: FranceBg,
        text: "Study in France",
    },
    {
        icon: Hungary,
        img: HungaryBg,
        text: "Study in Hungary",
    },
    {
        icon: Malaysia,
        img: MalaysiaBg,
        text: "Study in Malaysia",
    },

]


export const socialIcon = [
    {
        img: <RiTwitterXLine size="24px" color="var(--theme-color)" />,
        link: '',
    },

    {
        img: <FaInstagram size="24px" color="var(--theme-color)" />,
        link: '',
    },
    {
        img: <FaLinkedin size="24px" color="var(--theme-color)" />,
        link: '',
    },

];