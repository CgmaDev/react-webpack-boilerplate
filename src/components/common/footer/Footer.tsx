import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <div className={`footer-container ${styles.footerContainer}`}>
        <div className={`${styles.footerContent}`}>
          <div className={`${styles.copyrightText} font-semibold`}>© 2024 CgmaDev | ReactJS</div>
          <div className={`${styles.termsContainer} font-semibold`}>
            <a href={`/`} target="_self">
              <div className={`${styles.text}`}>Terms and Conditions</div>
            </a>
            <a href={`/`} target="_self">
              <div className={`${styles.text}`}>Privacy Policy</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
