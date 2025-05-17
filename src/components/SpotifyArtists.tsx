import useSWR from 'swr'
import Heading from '~/components/Heading'
import { FormattedSpotifyArtist } from '~/lib/spotify'
import { formatNumber } from '~/utils'

const fetcher = async () => {
  const res = await fetch('/api/spotify-artists')
  return res.json()
}

const SpotifyArtists: React.FunctionComponent = () => {
  const { data, error } = useSWR('/api/spotify-artists', fetcher, { revalidateOnFocus: false })

  if (error) {
    return null
  }

  const artists: FormattedSpotifyArtist[] = data?.artists ?? null

  return (
    <>
      <Heading subheading title="Who I'm Listening To" />
      <p className="mb-4 text-lg text-gray-400">
        I always have Spotify open. My top played artists over the past month are:
      </p>
      <div>
        {!artists ? null : artists.map((artist, i) => <ArtistCard artist={artist} rank={i + 1} key={i} />)}
      </div>
    </>
  )
}

interface ArtistCardProps {
  artist: FormattedSpotifyArtist
  rank: number
}

const ArtistCard: React.FunctionComponent<ArtistCardProps> = ({ artist, rank }: ArtistCardProps) => {
  return (
    <a href={artist.artistUrl} target="_blank">
      <div className="flex px-4 py-2 mb-2 text-lg border-b border-gray-800 hover:border-gray-500">
        <div className="w-8 mr-3">
          <p className="text-gray-400">{rank}.</p>
        </div>

        <div>
          <div className="flex items-center text-gray-200">
            <p>{artist.name}</p>
          </div>
          <p className="text-sm text-gray-500">{formatNumber(artist.followers)} followers</p>
        </div>
      </div>
    </a>
  )
}

export default SpotifyArtists
