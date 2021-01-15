import { NextApiRequest, NextApiResponse } from 'next'
import { getTopSpotifyArtists } from '~/lib/spotify'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(404).end()
  }

  const artists = await getTopSpotifyArtists()
  res.setHeader('Cache-Control', 'max-age=86400, stale-while-revalidate=43200')
  return res.status(200).json({ artists })
}
