import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from '@/components/devimg';
import Badge from '@/components/badge';
import Socials from '@/components/socials';

export default function Hero() {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div>
            <div>Web Developer</div>
            <h1>Hello, my name is Ryan Dav</h1>
            <p>
              Brief description with insigts into myself, my vocational journey,
              and what I engage in professional
            </p>
          </div>
          <div>image</div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
}
