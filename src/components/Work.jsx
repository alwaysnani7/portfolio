/**
 * @copyright 2024 jagadeesh
 * @license Apache-2.0
 */


import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project1.png',
      title: 'Personal portfolio',
      tags: ['Web-design', 'Development', 'API'],
      projectLink: 'https://jyoosjagadeeshportfolio.vercel.app/'
    }
  ];

const Work = () => {
  return (
    <section className='section' id='work'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work
