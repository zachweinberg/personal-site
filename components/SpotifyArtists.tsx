import useSWR from 'swr'
import { FormattedSpotifyArtist } from '~/lib/spotify'
import { formatNumber } from '~/utils'

const fetcher = async () => {
  const res = await fetch('/api/spotify-artists')
  return res.json()
}

const SpotifyArtists: React.FunctionComponent = () => {
  const { data, error } = useSWR('/api/spotify-artists', fetcher)

  if (error) {
    return <p>Could not load Spotify artists...</p>
  }

  if (!data) {
    return null
  }

  const artists: FormattedSpotifyArtist[] = data.artists

  return (
    <div>
      {artists.map((artist, i) => (
        <AristCard artist={artist} rank={i + 1} />
      ))}
    </div>
  )
}

interface AristCardProps {
  artist: FormattedSpotifyArtist
  rank: number
}

const AristCard: React.FunctionComponent<AristCardProps> = ({ artist, rank }: AristCardProps) => {
  return (
    <a href={artist.artistUrl} target="_blank">
      <div className="flex mb-2 border-b border-gray-800 text-lg px-4 py-2 hover:border-gray-500">
        <div className="w-8 mr-3">
          <p className="text-gray-400">{rank}.</p>
        </div>

        <div>
          <div className="flex items-center text-gray-200">
            <p>{artist.name}</p>
          </div>
          <p className="text-gray-500 text-sm">{formatNumber(artist.followers)} followers</p>
        </div>
      </div>
    </a>
  )
}

export default SpotifyArtists
