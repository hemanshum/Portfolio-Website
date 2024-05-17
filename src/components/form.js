'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

export default function Form() {
  return (
    <form className='flex flex-col gap-y-4'>
      <div className='relative flex items-center'>
        <Input
          type='name'
          id='name'
          placeholder='Name'
          className='bg-[#32334C]'
        />
        <User className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input
          type='email'
          id='email'
          placeholder='Email'
          className='bg-[#32334C]'
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Textarea
          type='name'
          id='name'
          placeholder='Type Your Message Here'
          className='bg-[#32334C]'
        />
        <MessageSquare className='absolute top-6 right-6' size={20} />
      </div>
      <Button className='flex items-center gap-x-2 max-w-[166px]'>
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}
