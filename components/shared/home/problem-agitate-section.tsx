"use client";
import {TextGenerateEffect} from '@/components/ui/text-generation-effect';
import {ProblemAgitateCard} from './problem-agitate-card';

const words = `Many hardworking people like you sacrifice everything for your family—make sure your health doesn't become another sacrifice.
`;


export function ProblemAgitateSection() {
  return ( 
  
  <div className='mt-40 max-w-7xl mx-auto text-center space-y-8'>
    <TextGenerateEffect duration={3} filter={false} words={words} />
    <ProblemAgitateCard />
    <p className='lg:text-3xl text-xl mx-auto text-center mt-12 max-w-3xl'>
      There's a better way to protect yourself and your family—without sacrificing what matters most.
      </p>
  </div>
);
}
