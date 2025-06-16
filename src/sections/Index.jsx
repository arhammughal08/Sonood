import About from "./about/About"
import Banner from "./banner/Banner"
import ContactUs from "./contact/ContactUs"
import Scholarship from "./scholarship/Scholarship"
import Service from "./services/Service"
import StudyAbroad from "./study/StudyAbroad"

const Index = () => {
    return (
        <>
            <Banner />
            <About />
            <Service />
            <StudyAbroad />
            <Scholarship />
            <ContactUs />

        </>
    )
}

export default Index
