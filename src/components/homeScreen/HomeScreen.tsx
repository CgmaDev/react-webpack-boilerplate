import React from 'react';
import styles from './HomeScreen.module.scss';
import { cgmalogoImg } from '../../images';

const HomeScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <img className={`${styles.appLogo}`} src={cgmalogoImg} alt="cgmalogo" />
            <div className={`${styles.title}`}>CgmaDev | ReactJS</div>
            <div className={`${styles.description}`}>
              React + TypeScript + Tailwind + Prettier + Storybook --&gt; boilerplate code using custom Webpack Server
              and build
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
