import { Fragment } from 'react'
import { Education, educations } from './data'

function EducationItem({ education }: { education: Education }) {
  return (
    <div className='flex flex-row gap-16 lg:px-9'>
      <div className='flex flex-col'>
        <h2 className='text-neutral-900 text-sm font-bold lg:text-xl mb-1'>
          {`${education.title}, `}
          <a
            href={education.link}
            target='_blank'
            className='text-neutral-400 font-normal text-xs lg:text-sm'>
            {education.university}
          </a>
        </h2>
        <div className='flex gap-5 text-neutral-400 text-xs lg:text-sm font-medium text-center mb-5'>
          <div>{`${education.country}`}</div>
          {`(${education.start} - ${education.end})`}
        </div>
        <p className='text-neutral-600 font-medium text-sm lg:text-base leading-7 lg:leading-9'>
          {education.des}
        </p>
      </div>
    </div>
  )
}

export default function Educations() {
  return (
    <div className='space-y-11 lg:py-6'>
      {educations.map(education => (
        <EducationItem key={education.title} education={education} />
      ))}
    </div>
  )
}
