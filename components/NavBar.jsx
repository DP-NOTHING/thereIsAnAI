import { useState } from 'react';
import { Group} from '@mantine/core';
import {
  IconBellRinging,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconStar,
  IconPlane,
  IconMedal,
  IconUsersGroup,
  IconListCheck,
  IconHome2,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Link from 'next/link';

const data = [
  { link: '/', label : 'Home' , icon : IconHome2 },
  // { link: '/', label: 'Notifications', icon: IconBellRinging },
  { link: '/just-launched', label: 'Just Launched', icon: IconPlane},
  { link: '/featured', label: 'Featured', icon: IconStar },
  { link: '/popular', label: 'Popular', icon: IconMedal },
  // { link: '', label: 'Requests', icon: IconUsersGroup },
  // { link: '', label: 'Task', icon: IconListCheck },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export function Navbar() {
  const [active, setActive] = useState('Home');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group >
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="/" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}