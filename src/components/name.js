import React from 'react';
import styles from './name.module.scss';
import Primary from "@/composition/primary";

const Name = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Volodymyr Kuzenkov</span>
      <br />
      <span className={styles.subtitle}>Front-End Developer (React.js, Vue.js)</span>

      <Primary
        title={<div>
          Summary
        </div>}
        content={<div>
          I have 3 years commercial experience. My strongest skills are React.js and Vue.js, also can perform general tasks on the Back-End side as Node.js (Express.js, Nest.js) and PHP (Laravel). I am considering options for the position as Front-End or Full-Stack. One of the priorities is the development of a quality product and its support, as well as communication with the team and the achievement of final results. Always ready for new challenges.
        </div>}
      />
    </div>
  );
};

export default Name;