import Image from 'next/image'

export const Card = ({
  title,
  images,
}: {
  title: string
  images: string[]
}) => {
  return (
    <button className='flex h-60 w-48 flex-col gap-4 rounded-lg border-2 border-slate-200 bg-slate-100 p-8'>
      <div className='bg-skyblue size-32 rounded-full'>
        {images.map((url) => (
          <Image key={url} src={url} alt='' width={45} height={80} />
        ))}
      </div>

      <p className='text-lg font-bold text-slate-700'>{title}</p>
    </button>
  )
}
