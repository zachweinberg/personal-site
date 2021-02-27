import Skeleton from 'react-loading-skeleton'
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
      <p className="text-gray-400 text-lg mb-4">
        I always have Spotify open. My top played artists over the past month are:
      </p>
      <div>
        {!artists ? (
          <Skeleton count={5} height={30} />
        ) : (
          artists.map((artist, i) => <ArtistCard artist={artist} rank={i + 1} key={i} />)
        )}
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
