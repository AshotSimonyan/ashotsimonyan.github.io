import React, { FC, ReactNode } from 'react';
import { LayoutStyle, Wrapper } from './Layout.style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  const router = useRouter();
  const admin = router?.pathname === '/admin';
  const home = router?.pathname === '/';

  return (
    <LayoutStyle>
      {
        home &&
        <Image
          className="bg-top"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          src={'/images/static/main/main-bg.png'}
          priority
          alt={''}
        />
      }

      <Wrapper>
        {!admin && <Header />}
        {children}

        {!admin && <Footer />}
      </Wrapper>

      {
        home &&
        <Image
          className="bg-bottom"
          // layout="fill"
          width={2000}
          height={3000}
          objectFit="contain"
          objectPosition="center -240px"
          src={'/images/static/main/lines-bg.png'}
          alt={''}
        />
      }

    </LayoutStyle>
  );
};

export default Layout;