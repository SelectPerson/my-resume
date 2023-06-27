import React from 'react';
import styles from './primary.module.scss'

const Primary = ({ title, content }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
};

export default Primary;