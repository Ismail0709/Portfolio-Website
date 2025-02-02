"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill as SkillType } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    skill: SkillType;
    directionLeft?: boolean
}

const Skill = ({skill, directionLeft}: Props) => {

    const MotionImage = motion.create(Image);

  return (
    <div className='group relative flex cursor-pointer'>
        <MotionImage
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        height={128}
        width={128}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        alt='Sanity Logo'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill