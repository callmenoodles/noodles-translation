const Why = () => {
  return(
    <div className='flex flex-row justify-center items-center mb-64'>
      <div className='sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-144 2xl:w-144'>
        <h1 className='text-3xl font-bold mt-12 text-primary'>Why translate?</h1>
        <p className='mt-4 text-lg'>
        English is the most common language in today’s world. However, this does not mean you should overlook potential customers or clients who do not speak English (well)!  Moreover, people generally prefer their first language and multinationals are growing in different countries where English is not the dominant language. Making sure everyone understands your business by <span className='text-primary font-semibold'>translating to different languages will lead to more success!</span>
        </p>
      </div>
      <img src='/question.svg' className='w-1/4 ml-12'/>
    </div>
  )
}

export default Why