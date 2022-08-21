import { Button } from 'react-bootstrap';
import styles from '../Styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Your Card Repairs</h1>
            <h4>Visit us for your service</h4>
            <Button>Book Appointment</Button>
        </div>
    );
}
export default Home;