import { ImageResponse } from 'next/server'
import { notFound } from 'next/navigation'
import json from '../../JSON/data.json'

export const runtime = 'edge'
export const contentType = 'image/png'

export const size = {
  width: 32,
  height: 32,
}

export default function Icon({
  params
}: {
  params: { page: string }
}) {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) return notFound()

  const name = page.name.split(' ')
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          textTransform: 'uppercase'
        }}
      >
        {name[0].charAt(0)}
      </div>
    ),
    {
      ...size,
    }
  )
}