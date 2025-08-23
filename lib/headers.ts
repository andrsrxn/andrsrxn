import 'server-only'

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

interface DeviceData {
  osName: string
  osVersion: string
  browserName: string
  browserVersion: string | undefined
  deviceName: string | undefined
  deviceModel: string | undefined
  userAgent: string
  fullBrowser: string
  fullDevice: string
}

export const getUserAgent = async (): Promise<DeviceData | null> => {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') ?? ''

  if (!userAgent) {
    return null
  }
  try {
    const parser = UAParser(userAgent)

    if (
      parser.os.name !== undefined &&
      parser.os.version !== undefined &&
      parser.browser.name !== undefined
    ) {
      return {
        browserName: parser.browser.name,
        browserVersion: parser.browser.major,
        deviceName: parser.device.vendor,
        deviceModel: parser.device.model,
        osName: parser.os.name,
        osVersion: parser.os.version,
        userAgent: parser.ua,
        fullBrowser: `${parser.browser.name} ${parser.browser.major ?? ''}`.trim(),
        fullDevice:
          parser.device.vendor !== undefined && parser.device.model !== undefined
            ? `${parser.device.vendor} ${parser.device.model}`
            : `${parser.os.name} ${parser.os.version}`.trim(),
      }
    }
    return null
  } catch {
    return null
  }
}
