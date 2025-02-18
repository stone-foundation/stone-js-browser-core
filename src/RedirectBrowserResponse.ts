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
