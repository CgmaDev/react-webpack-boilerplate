import React from 'react';
import CustomPage from '../components/common/customPage/CustomPage';
import AboutScreen from '../components/aboutScreen/AboutScreen';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <>
      <CustomPage>
        <AboutScreen />
      </CustomPage>
    </>
  );
};

export default AboutPage;
