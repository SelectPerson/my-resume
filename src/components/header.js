import React from 'react';
import styles from './header.module.scss';
import IconContent from "@/components/iconContent";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {BsTelegram} from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <IconContent
          icon={<AiOutlinePhone />}
          content={'+380637212753'}
        />

        <IconContent
          icon={<AiOutlineMail />}
          content={'volodymyrkuzenkov@gmail.com'}
        />

        <IconContent
          icon={<GoLocation />}
          content={"Lutsk, Ukraine"}
        />
      </div>

      <div className={styles.right}>
        <IconContent
          icon={<AiFillLinkedin />}
          content={<a href={'https://www.linkedin.com/in/volodymyr-kuzenkov-b9580b1b2/'}>LinkedIn</a>}
        />

        <IconContent
          icon={<AiFillGithub />}
          content={<a href={'https://github.com/SelectPerson'}>GitHub</a>}
        />

        <IconContent
          icon={<BsTelegram />}
          content={<a href={'https://t.me/getvolodymyr'}>Telegram</a>}
        />
      </div>
    </div>
  );
};

export default Header;