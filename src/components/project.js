import React, {useMemo} from 'react';
import styles from './project.module.scss';
import {format, formatDistance} from "date-fns";

const Project = ({ id, title, start, end, members, content, responsibilities, toolsTechnologies}) => {
  const getDuration = useMemo(() => {
    return (
      <div>
        {format(start, 'MMM')}{" "}{format(start, 'Y')}{" "}
        {" - "}
        {format(end, 'MMM')}{" "}{format(end, 'Y')} ({formatDistance(start, end)})
        {" "}
      </div>
    )
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {id}. {title}
      </div>

      {start && end && (
        <>
          <div className={styles.duration}>
            {getDuration}
          </div>
        </>
      )}


      <div className={styles.content}>
        {content}
      </div>

      {false && responsibilities && <div className={styles.responsibilities}>
        <span className={'font-bold'}>
          Responsibilities:
        </span>

        <ul>
          {responsibilities.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                </li>
              )
            }
          )}
        </ul>
      </div>}

      <span className={'font-bold'}>
            Team size:
          </span>
      {" "}
      {members} members

      {toolsTechnologies && <div className={styles.toolsTechnologies}>
        <span className={'font-bold'}>
          Tools & Technologies:
        </span>

        <br />

        <span>
          {toolsTechnologies.join(', ')}
        </span>
        {"."}
      </div>}
    </div>
  );
};

export default Project;