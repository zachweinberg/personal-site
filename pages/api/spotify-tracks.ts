import { getTopSpotifySongs } from '~/lib/spotify'

export default async (req, res) => {
  const tracks = await getTopSpotifySongs()
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=21600')
  return res.status(200).json({ tracks })
}
