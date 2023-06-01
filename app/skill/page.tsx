import { skills } from './data'

export default function Skill() {
  return (
    <div className='px-6 py-4 lg:py-12 lg:px-9 justify-around text-neutral-600 space-y-6 lg:space-y-10'>
      {skills.map(skill => (
        <div key={skill.title}>
          <p className='text-neutral-900 text-sm lg:text-lg font-medium mb-3 lg:mb-5'>
            {skill.title}
          </p>
          <ul className='list-none flex flex-wrap gap-2'>
            {skill.skills.map(_skill => (
              <li
                className='bg-neutral-100 py-2 px-3 lg:py-3 lg:px-5 rounded-md flex justify-center items-center text-xs lg:text-base text-neutral-600'
                key={_skill}>
                {_skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
