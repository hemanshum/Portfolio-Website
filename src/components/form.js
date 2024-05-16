'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

export default function Form() {
  return (
    <form className='flex flex-col gap-y-4'>
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
    </form>
  );
}
