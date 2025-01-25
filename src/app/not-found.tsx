import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='w-full h-64 overflow-hidden'>
      <Image
        src='/404-background.png'
        alt='background-img'
        fill
        className='object-cover object-bottom'
      />
    </div>
  )
}
