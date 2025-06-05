import { BrowserError } from '../src/errors/BrowserError'
import { RedirectBrowserResponse } from '../src/RedirectBrowserResponse'

describe('RedirectBrowserResponse', () => {
  it('should create an instance using static create()', () => {
    const response = RedirectBrowserResponse.create({
      url: 'https://stonejs.com',
      statusCode: 302,
      content: ''
    })
    expect(response).toBeInstanceOf(RedirectBrowserResponse)
    expect(response.statusCode).toBe(302)
    expect(response.targetUrl).toBe('https://stonejs.com')
  })

  it('should extract targetUrl from content.redirect if url is missing', () => {
    const response = new RedirectBrowserResponse({
      content: { redirect: 'https://stonejs.com' },
      statusCode: 302,
      // @ts-expect-error: url is empty
      url: undefined // fallback to avoid isEmpty
    })
    expect(response.targetUrl).toBe('https://stonejs.com')
  })

  it('should extract targetUrl from content if url is missing', () => {
    const response = new RedirectBrowserResponse({
      content: 'https://stonejs.com',
      statusCode: 302,
      // @ts-expect-error: url is empty
      url: undefined // fallback value to skip `isEmpty` check
    })
    expect(response.targetUrl).toBe('https://stonejs.com')
  })

  it('should throw BrowserError url is empty', () => {
    expect(() => {
      // @ts-expect-error: url is empty
      RedirectBrowserResponse.to(undefined)
    }).toThrowError(BrowserError)
  })

  it('should throw BrowserError content is empty', () => {
    expect(() => {
      // @ts-expect-error: content is empty
      RedirectBrowserResponse.create({ statusCode: 302, content: '' })
    }).toThrowError(BrowserError)
  })
})
