import { ImageResponse } from 'next/og'
import { getOpengraph } from '@/sanity/routes'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/jpeg'

export default async function Image() {
  const og = await getOpengraph()
  const outfitBold = await readFile(
    join(process.cwd(), 'assets/outfit-bold.ttf'),
  )
  const outfitSemibold = await readFile(
    join(process.cwd(), 'assets/outfit-semibold.ttf'),
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          color: '#0F172A',
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/metadataHero.jpg`}
          alt='Background'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <p
          style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 600,
            fontSize: '3rem',
            lineHeight: '3.5rem',
            width: '52%',
            textAlign: 'center',
          }}
        >
          {og.ogText}
        </p>
        <p
          style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: '2.5rem',
            maxWidth: '50%',
          }}
        >
          {og.heroText}
        </p>
      </div>
    ),
    {
      fonts: [
        {
          name: 'outfit',
          data: outfitBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'outfit',
          data: outfitSemibold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  )
}
