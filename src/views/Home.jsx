import React from 'react';
import { Hero, Section } from '../components';
import ItsMe from '../images/its_me.jpg';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero Text="The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty." />
      <Section
        Heading="Thats me"
        Text={
          'Hey,\n\nMy name is Marcel and I am a Software developer. I first started developing back when I was 13 years old with some easy HTML. Over the years, I collected more knowledge on software development and my abilities have reached far beyond only HTML.\n\nI worked for an E-Commerce company where I managed their Web Shop and created some automation tools to deploy articles on multiple platforms like eBay and Amazon for over a year. Later, I began studying computer science. Thus I did not finish my studies I was able to learn a lot throughout my time at the university. While I was studying I did a part time job. I have been doing first level support as an IT-Technician and schooled people how to use document management systems. \n\nTwo years later, I decided to do a Work & Travel year in Australia. I did some farm jobs aside from travelling from coast to coast. After my return to Germany, I decided to quit my studies and started doing a trainee as a software developer instead, which I finished in 2020.'
        }
        image={ItsMe}
        imagealt="thats me"
      />
    </div>
  );
};
export default Home;
