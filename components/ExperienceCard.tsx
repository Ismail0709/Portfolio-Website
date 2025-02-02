"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { once } from 'events';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
    const MotionImage = motion.create(Image)
    const logo = require('../public/habibsons_logo.jpg')
    const js_logo =require('../public/javascript-logo.svg')
    const react_logo =require('../public/React.png')
    const node_logo =require('../public/Node.png')
    const mongo_logo =require('../public/Mongo.png')

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <MotionImage
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
        src={urlFor(experience?.companyImage).url()} 
        alt='company logo'        
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineer Intern</h4>
            <p className='font-bold text-2xl mt-1'>Habib & Sons</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map((technology)=> (
                    <Image 
                    key={technology._id}
                    className='h-10 w-10 rounded-full'
                    src={urlFor(technology.image).url()}
                    alt='Technology Image'
                    />
                ))}

            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points.map((point, i)=> (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard