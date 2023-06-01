import { Fragment } from 'react'
import { experiences, Experience } from './data'

function Experince({ experience }: { experience: Experience }) {
  return (
    <div className='flex flex-row gap-16 lg:px-9'>
      <div className='flex flex-col'>
        <h2 className='text-neutral-900 text-sm font-bold lg:text-xl mb-1'>
          {`${experience.title}, `}
          <a
            href={experience.link}
            target='_blank'
            className='text-neutral-400 font-normal text-xs lg:text-sm'>
            {experience.company}
          </a>
        </h2>
        <div className='flex gap-5 text-neutral-400 text-xs lg:text-sm font-medium text-center mb-5'>
          <div>{`${experience.country}, ${experience.type}`}</div>
          {`(${experience.start} - ${experience.end})`}
        </div>
        <ul className='space-y-3 list-disc pl-6 text-neutral-600 font-medium text-sm lg:text-base'>
          {experience.bulletPoints.map((bulletPoint, index) => (
            <li key={index}>{bulletPoint}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experinces() {
  return (
    <div className='lg:py-6 space-y-11'>
      {experiences?.map(experience => (
        <Fragment key={experience.company}>
          <Experince experience={experience} />
          <div className='w-full h-[2px] bg-neutral-200' />
        </Fragment>
      ))}
    </div>
  )
}
