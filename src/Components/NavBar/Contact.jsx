import styles from '../Styles/Contact.module.css';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1>Contact</h1>
            <div>
                <span> <BsTelephoneFill /> </span>
                <span>+61 040 400 4000</span>
            </div>
            <div>
                <span> <MdEmail /> </span>
                <span>automotive@caresels.com.au</span>
            </div>
            <div>
                <span> <AiFillClockCircle /> </span>
                <span>Hours: Mon-Fri 10:00 AM. - 5:00 PM.</span>
            </div>
            <div>
                <span> <AiFillClockCircle /> </span>
                <span>Saturday - Sunday Closed</span>
            </div>
            <div>
                <span> <ImLocation2 /> </span>
                <span>15 Street Suburt Country 6000</span>
            </div>
        </div>
    );
}

export default Contact;