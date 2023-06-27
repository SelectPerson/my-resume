import React from 'react';
import styles from './iconContent.module.scss';

const IconContent = ({ icon, content }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        {icon}
      </div>

      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
};

export default IconContent;