function Experince() {
  return (
    <div className='flex flex-row gap-16 px-9'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-neutral-800 font-medium text-xl'>
          {'Senior Frontend Engineer'}
        </h2>
        <ul className='space-y-3 list-disc pl-6'>
          <li className='text-neutral-600 text-base'>
            {
              'Developing blockchain-based software and technology, mesh network communication solutions and enterprise software products.'
            }
          </li>
          <li className='text-neutral-600 text-base'>
            {
              'Used cryptocurrencies to develop e-commerce transactions in a fully decentralized marketplace.'
            }
          </li>
          <li className='text-neutral-600 text-base'>
            {
              'Planned a chat system to connect customers and get more information before purchasing.'
            }
          </li>
          <li className='text-neutral-600 text-base'>
            {'Designed the app according to design systems with Figma'}
          </li>
        </ul>
      </div>
      <div>
        <div className='text-neutral-400 text-sm text-center'>
          {'(03/2022 - Present'}
          <div>{'Slovakia, Remote'}</div>
        </div>
      </div>
    </div>
  )
}

export default function Experinces() {
  return (
    <div className='bg-neutral-50 py-6 rounded-2xl space-y-11'>
      <Experince />
      <div className='w-full h-[3px] bg-neutral-100' />
      <Experince />
      <div className='w-full h-[3px] bg-neutral-100' />
      <Experince />
      <div className='w-full h-[3px] bg-neutral-100' />
      <Experince />
      <div className='w-full h-[2px] bg-neutral-200' />
      <Experince />
    </div>
  )
}
