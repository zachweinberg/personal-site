import useSWR from 'swr'
import { FormattedTrack } from '~/lib/spotify'

const fetcher = async () => {
  const res = await fetch('/api/spotify-tracks')
  return res.json()
}

const SpotifyTracks: React.FunctionComponent = () => {
  const { data, error } = useSWR('/api/spotify-tracks', fetcher)

  if (error) {
    return <p>Could not load Spotify songs...</p>
  }

  if (!data) {
    return null
  }

  const tracks: FormattedTrack[] = data.tracks

  return (
    <div>
      {tracks.map((track, i) => (
        <TrackCard track={track} rank={i + 1} />
      ))}
    </div>
  )
}

interface TrackCardProps {
  track: FormattedTrack
  rank: number
}

const TrackCard: React.FunctionComponent<TrackCardProps> = ({ track, rank }: TrackCardProps) => {
  return (
    <a href={track.songUrl} target="_blank">
      <div className="text-md mb-2 border-b border-gray-800 text-lg px-4 py-2 hover:border-gray-500">
        <div className="flex items-center text-gray-200">
          <p className="mr-2">{rank}.</p>
          <p>{track.title}</p>
        </div>
        <p className="text-gray-500">{track.artist}</p>
      </div>
    </a>
  )
}

export default SpotifyTracks
