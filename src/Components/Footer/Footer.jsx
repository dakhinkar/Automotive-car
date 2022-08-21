import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div >
                <div className={styles.footerItem}>
                    <span className={styles.title}>
                        Our Location
                    </span>
                    <span className="content">
                        15 Street Suburt Country 6000
                    </span>
                </div>
                <div className={styles.footerItem}>
                    <span className={styles.title}>
                        Phone
                    </span>
                    <span className="content">
                        +61 040 400 4000
                    </span>
                </div>
                <div className={styles.footerItem}>
                    <span className={styles.title}>
                        Email
                    </span>
                    <span className="content">
                        automotive@caresels.com.au
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;