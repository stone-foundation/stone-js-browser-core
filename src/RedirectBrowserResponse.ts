import { isEmpty } from '@stone-js/core'
import { BrowserError } from './errors/BrowserError'
import { OutgoingBrowserResponse, OutgoingBrowserResponseOptions } from './OutgoingBrowserResponse'

/**
 * Options for creating a Redirect HTTP Response.
 */
export interface RedirectBrowserResponseOptions extends OutgoingBrowserResponseOptions {
  url: string | URL
}

/**
 * Class representing a RedirectBrowserResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class RedirectBrowserResponse extends OutgoingBrowserResponse {
  static OUTGOING_BROWSER_RESPONSE = 'stonejs@redirect_browser_response'
  public readonly targetUrl?: string | URL

  /**
   * Create an instance of RedirectBrowserResponse.
   *
   * @param options - Options for the outgoing browser response.
   * @returns A new instance of RedirectBrowserResponse.
   */
  static create (options: RedirectBrowserResponseOptions): RedirectBrowserResponse {
    return new RedirectBrowserResponse(options)
  }

  /**
   * Create an instance of RedirectBrowserResponse from the given path or URL.
   *
   * @param url - The path or URL to redirect to. If a string is provided, it will be treated as a relative path.
   * @param statusCode - The HTTP status code for the redirect (default is 302).
   * @returns A new instance of RedirectBrowserResponse.
   */
  static to (url: string | URL, statusCode: number = 302): RedirectBrowserResponse {
    return new RedirectBrowserResponse({ url, statusCode })
  }

  /**
   * Create a RedirectBrowserResponse.
   *
   * @param options - Options for creating the RedirectBrowserResponse.
   * @throws HttpError if the status code is not a redirect code.
   */
  constructor (options: RedirectBrowserResponseOptions) {
    super(options)
    if (isEmpty(options.url ?? options.content)) {
      throw new BrowserError('Cannot redirect to an empty URL.')
    }
    this.targetUrl = options.url ?? (options.content as any)?.redirect ?? options.content
  }
}
