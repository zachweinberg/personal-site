import querystring from 'querystring'

export interface FormattedTrack {
  artist: string
  title: string
  songUrl: string
}

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env

const getAccessToken = async () => {
  console.log('> Fetching Spotify access token')

  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  const response = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getTopSpotifySongs = async (): Promise<FormattedTrack[]> => {
  const { access_token } = await getAccessToken()
  const response = await fetch(`https://api.spotify.com/v1/me/top/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  const { items } = await response.json()
  const tracks: FormattedTrack[] = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }))
  return tracks
}
