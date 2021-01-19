import React from "react";
import { FaEnvelope, FaUserAlt, FaPhoneAlt } from "react-icons/fa";

import styles from "../styles/contact.module.scss";

const Contact = ({ image, imageAlt, name, phone, email }) => {
  return (
    <div name="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <div className={styles.contactRow}>
          <div className={styles.contactColumn}>
            <div className={styles.contactImageContainer}>
              <img className={styles.contactImage} src={image} alt={imageAlt} />
            </div>
          </div>
          <div className={styles.contactColumn}>
            <div className={styles.contactTextContainer}>
              <p className={styles.contactText}>
                <FaUserAlt />
                <span className={styles.contactInfo}>- {name}</span>
              </p>
              <p className={styles.contactText}>
                <FaPhoneAlt />
                <span className={styles.contactInfo}>- {phone}</span>
              </p>
              <p className={styles.contactText}>
                <FaEnvelope />
                <span className={styles.contactInfo}>- {email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
