import querystring from 'querystring'

export interface FormattedSpotifyArtist {
  name: string
  followers: number
  artistUrl: string
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

export const getTopSpotifyArtists = async (): Promise<FormattedSpotifyArtist[]> => {
  const { access_token } = await getAccessToken()
  const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=15&time_range=short_term`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  const { items } = await response.json()
  const artists: FormattedSpotifyArtist[] = items.map((track) => ({
    followers: track.followers.total,
    artistUrl: track.external_urls.spotify,
    name: track.name,
  }))
  return artists
}
