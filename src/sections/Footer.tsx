import logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]'>
          <Image
            src={logo}
            alt='SaaS logo'
            height={40}
          />
        </div>
        <nav>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Careers</a>
        </nav>
        <div>
          <SocialX />
          <SocialInsta/>
          <SocialLinkedIn/>
          <SocialPin/>
          <SocialYoutube/>
        </div>
        <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
