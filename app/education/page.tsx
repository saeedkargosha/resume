function Education() {
  return (
    <div className='flex flex-row gap-16 px-9'>
      <div className='flex flex-col gap-3 w-10/12'>
        <h2 className='text-neutral-800 font-medium text-xl'>
          {"Bachelor's Degree in Computer Software Engineering"}
        </h2>

        <div className='text-neutral-600 text-base'>
          {
            'During my time at university, I started an association focused on computer skills training for students. This allowed me to use my knowledge and expertise to help others learn new skills that would benefit them in their future careers.'
          }
        </div>
      </div>
      <div className='w-2/12'>
        <div className='text-neutral-400 text-sm text-center'>
          {'(02/2020 - 02/2022)'}
          <div>{'Sirjan - Iran'}</div>
        </div>
      </div>
    </div>
  )
}

export default function Educations() {
  return (
    <div className='bg-neutral-50 rounded-2xl space-y-11 py-6'>
      <Education />
      <div className='w-full h-1 bg-neutral-100' />
      <Education />
    </div>
  )
}
