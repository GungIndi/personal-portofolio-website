import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ProjectList = [
  {
    title: 'CI/CD Workflow with Github Actions',
    // description: 'Description of Project One.',
    imgSrc: require('@site/static/img/workflows.png').default,
    link: '#',
  },
  {
    title: 'Machine Learning API on Memotions App',
    // description: 'Machine Learning Service for the Memotions Application. This service provides APIs for accessing the Memotions machine learning models, the handling integration between machine learning models and the application\'s features..',
    imgSrc: require('@site/static/img/machine-learning-api.png').default,
    link: '#',
  },
  {
    title: 'Memotions Cloud Architecture',
    // description: 'Description of Project Three.',
    imgSrc: require('@site/static/img/memotions-architecture.png').default,
    link: '#',
  },
  {
    title: 'CI/CD Pipeline with Jenkins',
    // description: 'Description of Project Three.',
    imgSrc: require('@site/static/img/jenkins.png').default,
    link: '#',
  },
];

function Project({imgSrc, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
        <Link to={link}>
          <div className="text--center">
            <img src={imgSrc} className={styles.projectImg} alt={title} />
          </div>
        </Link>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className="row">
          <div className="col text--center">
            <h2 className={styles.projectHeading}>Projects</h2>
          </div>
        </div>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}