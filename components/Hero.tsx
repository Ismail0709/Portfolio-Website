"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo
};

const Hero = ({pageInfo}: Props) => {
    const[text, count] = useTypewriter({
        words: [
            `I'm ${pageInfo?.name}, a dedicated Software Engineer`,
            "Learning is the key to innovation."
        ],
        loop: true,
        delaySpeed: 2000
    });

    const profileImg = require('../public/profile.jpg')
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image
        className='relative rounded-full h-36 w-36 mx-auto'
        src={urlFor(pageInfo.heroImage).url()}
        alt="Picture of the author"
        height={144}
        width={144}
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            {pageInfo.role}
          </h2>
          <h1 className='text-5xl lg:text-6xl italic hover:not-italic font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>

          <div className='pt-5'>
            <Link href={"#about"}>
            <button className='heroButton'>About</button>
            </Link>
            <Link href={"#experience"}>
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href={"#skills"}>
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href={"#projects"}>
            <button className='heroButton'>Projects</button>
            </Link>
          </div>

        </div>  
    </div>
  )
}

export default Hero