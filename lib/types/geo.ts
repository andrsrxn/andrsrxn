export interface GeolocationAPIResponse {
  ip: string
  isp: {
    asn: string
    org: string
    isp: string
  }
  location: {
    country: string
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    country_code: string
    city: string
    state: string
    zipcode: string
    latitude: number
    longitude: number
    timezone: string
    localtime: string
  }
  risk: {
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    is_mobile: boolean
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    is_vpn: boolean
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    is_tor: boolean
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    is_proxy: boolean
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    is_datacenter: boolean
    // biome-ignore lint/style/useNamingConvention: becasuse of the api
    risk_score: number
  }
}
