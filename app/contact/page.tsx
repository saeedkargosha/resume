export default function ContactUs() {
  return (
    <div className='flex lg:flex-row lg:py-24 lg:px-9 rounded-2xl justify-center items-center'>
      <form className='w-4/5'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full'>
          <div className='w-full'>
            <label htmlFor='name' className='label'>
              {'First name'}
            </label>
            <input
              type='text'
              id='name'
              className='input w-full'
              placeholder='Saeed Kargosha'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='label'>
              {'Email'}
            </label>
            <input
              type='email'
              id='email'
              className='input'
              placeholder='saeedkargosha@gmail.com'
              required
            />
          </div>
        </div>
        <div className='mt-9'>
          <label htmlFor='memo' className='label'>
            {'Text'}
          </label>
          <textarea
            rows={5}
            id='memo'
            className='input w-full'
            placeholder='Write your thoughts here...'
            required
          />
        </div>
        <div className='flex gap-3 justify-center mt-12'>
          <button className='btn btn-secondary'>{'Cancel'}</button>
          <button className='btn btn-primary'>{'Send'}</button>
        </div>
      </form>
    </div>
  )
}
