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
        text: "Service1",
    },
    {
        icon: Service2,
        text: "Service2",
    },
    {
        icon: Service3,
        text: "Service3",
    },
    {
        icon: Service4,
        text: "Service4",
    },
    {
        icon: Service5,
        text: "Service5",
    },
    {
        icon: Service6,
        text: "Service6",
    },
    {
        icon: Service7,
        text: "Service7",
    },

]

export const studyData = [
    {
        icon: Britain,
        img: BritainBg,
        text: "Britain",
    },
    {
        icon: Australia,
        img: AustraliaBg,
        text: "Australia",
    },
    {
        icon: America,
        img: AmericaBg,
        text: "America",
    },
    {
        icon: Germany,
        img: GermanyBg,
        text: "Germany",
    },
    {
        icon: Canada,
        img: CanadaBg,
        text: "Canada",
    },
    {
        icon: France,
        img: FranceBg,
        text: "France",
    },
    {
        icon: Hungary,
        img: HungaryBg,
        text: "Hungary",
    },
    {
        icon: Malaysia,
        img: MalaysiaBg,
        text: "Malaysia",
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