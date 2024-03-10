import React from 'react';
import styles from './AboutScreen.module.scss';

const AboutScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <div className={`${styles.text1}`}>
              Welcome to CgmaDev | ReactJS
              <ol style={{ listStyleType: 'initial' }} className={`${styles.pointsContainer}`}>
                <li>
                  React + TypeScript + Tailwind + Prettier + Storybook --&gt; boilerplate code using custom Webpack
                  Server and build
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
