import React from 'react';
import styles from './section.module.scss'
import Primary from "@/composition/primary";
import Project from "@/components/project";
import {PROJECTS_CONSTANT, responsibilitiesList, toolsTechnologies} from "@/constants";


const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.left}>
        {/*<Primary*/}
        {/*  title={<div>*/}
        {/*    Summary*/}
        {/*  </div>}*/}
        {/*  content={<div>*/}
        {/*    I have 3 years commercial experience. My strongest skills are React.js and Vue.js, also can perform general tasks on the Back-End side as Node.js (Express.js, Nest.js) and PHP (Laravel). I am considering options for the position as Front-End or Back-End or Full-stack. One of the priorities is the development of a quality product and its support, as well as communication with the team and the achievement of final results. Always ready for new challenges.*/}
        {/*  </div>}*/}
        {/*/>*/}

        <Primary
          title={<div>
            Skills/Technologies
          </div>}
          content={<div>
            <div>
              <span className={'font-bold'}>
                Front-End
              </span>

              <ul>
                <li>
                  {toolsTechnologies.html}, {toolsTechnologies.css} (SASS, Bootstrap)
                </li>

                <li>
                  {toolsTechnologies.react} (Redux, {toolsTechnologies.reactRouter}, Next.js)
                </li>

                <li>
                  {toolsTechnologies.vue} (VueX, VueRouter, Nuxt2)
                </li>
              </ul>

              <span className={'font-bold'}>
                General
              </span>

              <ul>
                <li>
                  {toolsTechnologies.js}
                </li>

                <li>
                  {toolsTechnologies.ts}
                </li>

                <li>
                  {toolsTechnologies.nodeJS}
                </li>
              </ul>

              <span className={'font-bold'}>
                Back-End
              </span>

              <ul>
                <li>
                  {toolsTechnologies.expressJS}
                </li>

                <li>
                  {toolsTechnologies.nestJS}
                </li>

                <li>
                 {toolsTechnologies.laravel} ({toolsTechnologies.php})
                </li>
              </ul>

              <span className={'font-bold'}>
                Databases
              </span>

              <ul>
                <li>
                  {toolsTechnologies.mysql}
                </li>

                <li>
                  {toolsTechnologies.postgreSql}
                </li>

                <li>
                  {toolsTechnologies.mongodb}
                </li>
              </ul>

              <span className={'font-bold'}>
                Other
              </span>

              <ul>
                <li>
                  {toolsTechnologies.dry}, {toolsTechnologies.solid}
                </li>

                <li>
                  {toolsTechnologies.restApi}
                </li>

                <li>
                  {toolsTechnologies.linux}, {toolsTechnologies.macOS}
                </li>

                <li>
                  {toolsTechnologies.git}
                </li>

                <li>
                  {toolsTechnologies.figma}
                </li>
              </ul>
            </div>
          </div>}
        />

        <Primary
          title={"The main duties were included in my work"}
          content={
            <ul>
              <li>
                {responsibilitiesList.coreFuncUi}
              </li>

              <li>
                {responsibilitiesList.projSupp}
              </li>

              <li>
                {responsibilitiesList.scrum}
              </li>

              <li>
                {responsibilitiesList.planRisks}
              </li>

              <li>
                {responsibilitiesList.colDesigners}
              </li>

              <li>
                {responsibilitiesList.cleanCode}
              </li>

              <li>
                {responsibilitiesList.mentoring}
              </li>

              <li>
                {responsibilitiesList.findingEfficient}
              </li>

              {/*<li>*/}
              {/*  {responsibilitiesList.innerManagement}*/}
              {/*</li>*/}

              <li>
                {responsibilitiesList.reviews}
              </li>
            </ul>
          }
        />
        <Primary
          title={<div>
            Languages
          </div>}
          content={<div>
            <ul>
              <li>
                English (Intermediate B1)
              </li>

              <li>
                Ukrainian (Native C2)
              </li>

              <li>
                Russian (Native C2)
              </li>
            </ul>
          </div>}
        />

        <Primary
          title={<div>
            Education
          </div>}
          content={<div>
            <ul>
              <li>
                Lutsk national technical university. (Master's degree, Computer science and technology). From 2019 to 2020 year.
              </li>

              <li>
                Eastern european national university. (Bachelor's degree, Business economics). From 2014 to 2019 year.
              </li>
            </ul>
          </div>}
        />

        <Primary
          title={<div>
            Certificate
          </div>}
          content={<div>
            <ul>
              <li>
                JavasScript Node.js (Back-End) course (Oct 2022 - Dec 2023)
              </li>
            </ul>
          </div>}
        />
      </div>

      <div className={styles.divider}>

      </div>

      <div className={styles.right}>
        <Primary
          title={<div>
            Sample Projects
          </div>}
          content={<>
            {PROJECTS_CONSTANT.map((item, index) =>
              <Project
                id={index + 1}
                title={item.title}
                content={item.content}
                start={item.start}
                end={item.end}
                members={item.members}
                responsibilities={item.responsibilities}
                toolsTechnologies={item.toolsTechnologies}
                key={index}
              />
            )}
          </>}
        />
      </div>
    </div>
  );
};

export default Section;