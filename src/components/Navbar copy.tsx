import React, { useState } from 'react';
import { Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface NavbarItemProps {
  text: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ text }) => {
  return (
    <div className="relative leading-[150%] font-semibold inline-block min-w-[49px] whitespace-nowrap">
      {text}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-left text-base text-background-paper font-montserrat">
        <div className="flex-1 bg-darkslategray-200 box-border overflow-hidden flex flex-row items-start justify-start pt-[26px] px-[69px] pb-6 max-w-full border-b-[1px] border-solid border-neutral-grey md:pl-[34px] md:pr-[34px] md:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            {/* Logo */}
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-[30px] w-[30px] relative object-cover"
                  alt=""
                  src="/atom-editor@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative font-semibold inline-block min-w-[86px] whitespace-nowrap">
                    Nusa Tech
                  </div>
                </div>
              </div>
            </div>
               {/* Navbar menu */}
               <div className="w-full flex flex-row items-start justify-start gap-[127px] max-w-full text-primary-lilac font-body-l-medium mq800:w-[798px] mq800:gap-[32px] mq1125:gap-[63px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px] ">
                  <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-ghostwhite font-body-l-medium mq1125:hidden">
                    <NavbarItem text="Home" />
                    <NavbarItem text="About Us" />
                    <NavbarItem text="Features" />
                    <NavbarItem text="Our Works" />
                    <NavbarItem text="Pricing" />
                    <NavbarItem text="Resources" />
                  </nav>
                </div>
              </div>
              {/* Navbar Button section */}
              <div className="w-[186px] flex flex-row items-start justify-start gap-[30px] mq800:hidden">
                <Button
                  className="h-12 flex-1"
                  sx={{
                    textTransform: 'none',
                    color: '#ac6cff',
                    borderRadius: '15px',
                    background: 'transparent',
                    '&:hover': { background: '#ffffff' },
                    height: 48,
                  }}
                >
                  Login
                </Button>
                <Button
                  className="h-12 flex-1"
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    color: '#f8f9ff',
                    background: '#ac6cff',
                    borderRadius: '15px',
                    '&:hover': { background: '#f2eef6', color: '#ac6cff' },
                    height: 48,
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            {/* Navbar menu */}
            <div className="w-full flex flex-row items-start justify-start gap-[127px] max-w-full text-primary-lilac font-body-l-medium mq800:w-[798px] mq800:gap-[32px] mq1125:gap-[63px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                <div className={`self-stretch flex flex-col items-start justify-start gap-[1px] ${menuOpen ? '' : 'hidden'}`}>
                  <List>
                    <ListItem button>
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Features" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Our Works" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Pricing" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Resources" />
                    </ListItem>
                  </List>
                </div>
              </div>
              {/* Navbar Button section */}
              <div className={`w-[186px] flex flex-row items-start justify-start gap-[30px] ${menuOpen ? '' : 'hidden'}`}>
                <Button
                  className="h-12 flex-1"
                  sx={{
                    textTransform: 'none',
                    color: '#ac6cff',
                    borderRadius: '15px',
                    background: 'transparent',
                    '&:hover': { background: '#ffffff' },
                    height: 48,
                  }}
                >
                  Login
                </Button>
                <Button
                  className="h-12 flex-1"
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    color: '#f8f9ff',
                    background: '#ac6cff',
                    borderRadius: '15px',
                    '&:hover': { background: '#f2eef6', color: '#ac6cff' },
                    height: 48,
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
             {/* Menu Icon for Mobile */}
             <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ mr: 2, display: { md: 'none' } }} // Show only on mobile screens
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
