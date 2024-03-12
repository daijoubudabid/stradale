import { Banner } from '../../Components/Banner/Banner'
import { ContactDetails } from '../../Components/ContactDetails/ContactDetails'
import { MainForm } from '../../Components/MainForm/MainForm.'

export const ContactPage = () => {
  return (
    <div>
      <Banner title={"Contact"} className={"banner-1"}/>
      <MainForm showDateTimeGuests={false}/>
      <ContactDetails className="parallax"/>
    </div>
  )
}
