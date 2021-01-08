import { NextApiResponse } from 'next'
import { getTopSpotifyArtists } from '~/lib/spotify'

export default async (req, res: NextApiResponse) => {
  const artists = await getTopSpotifyArtists()
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=21600')
  return res.status(200).json({ artists })
}
