import styles from 'BookApp.module.css';
const BookAppnt = () => {
    return (
        <form className={styles.book}>
            <h1>Book Appointment</h1>
            <div>
                <label htmlFor="firstname">Name: </label>
                <input type="text" />
                <label htmlFor="lastname">
                    Last Name
                </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Phone: </label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">Email id :</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor=''>Date :</label>
                <input type="date" />
            </div>
            <div>
                <label htmlFor="">Time: </label>
                <input type="time" />
            </div>
            <div>
                <button>Cancel</button>
                <button>Submit</button>
            </div>


        </form>
    );
}

export default BookAppnt;


