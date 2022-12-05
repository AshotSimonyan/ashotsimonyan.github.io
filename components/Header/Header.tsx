import { useState } from 'react';
import GitHubButton from 'react-github-btn';
import Link from 'next/link';
import {
  HeaderStyle,
  HeaderContent,
  Logo,
  HeaderNav,
  HeaderButton,
  ButtonMenu,
  MobileSocial,
} from './Header.style';
import { Container } from 'styles/Foundations';
import Image from 'next/image';
import { navList, socialList } from '../Layout/config';
import { useLockedBody } from 'hooks/useLockedBody';
import { Icon } from 'components/UIkit';

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState<boolean>(false);
  const [locked, setLocked] = useLockedBody();

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened);
    setLocked(!locked);
  };
  const handleDrawerClose = () => {
    setDrawerOpened(false);
    setLocked(false);
  };

  return (
    <HeaderStyle className={drawerOpened ? 'open' : ''}>
      <Container css={{ height: '100%' }}>
        <HeaderContent>
          <Logo>
            <Link href="/" className="logo">
              <Image
                src="/images/static/main/logo.svg"
                alt="AimStack"
                width="156"
                height="37"
              />
            </Link>
          </Logo>
          <HeaderNav>
            <div className="nav-inner">
              <ul className="nav-list">
                {navList.map(({ to, title, external }) => {
                  return (
                    <li key={to}>
                      <Link
                        onClick={handleDrawerClose}
                        href={to}
                        scroll={false}
                        target={external ? '_blank' : '_self'}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <HeaderButton
                css={{ display: 'none', '@bp1': { display: 'block' } }}
              >
                <GitHubButton
                  href="https://github.com/aimhubio/aim"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star aimhubio/aim on GitHub"
                >
                  Star
                </GitHubButton>
              </HeaderButton>
            </div>
            <MobileSocial>
              {socialList.map(({ icon, url }) => {
                return (
                  <li key={icon} onClick={() => {}}>
                    <a href={url} rel="noopener noreferrer" target="_blank">
                      <Icon name={icon} />
                    </a>
                  </li>
                );
              })}
            </MobileSocial>
          </HeaderNav>
          <HeaderButton
            className="desktop-btn"
            css={{ flex: '1', '@bp1': { display: 'none' } }}
          >
            <GitHubButton
              href="https://github.com/aimhubio/aim"
              data-size="large"
              data-show-count="true"
              aria-label="Star aimhubio/aim on GitHub"
            >
              Star
            </GitHubButton>
          </HeaderButton>
          <ButtonMenu
            className="hamburger"
            type="button"
            onClick={handleDrawerToggle}
          >
            <Icon name={drawerOpened ? 'close' : 'burger'} size={20} />
          </ButtonMenu>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  );
};

export default Header;