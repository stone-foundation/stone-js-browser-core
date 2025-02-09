[**Browser Core Documentation v0.0.2**](../../README.md)

***

[Browser Core Documentation](../../modules.md) / [OutgoingBrowserResponse](../README.md) / OutgoingBrowserResponse

# Class: OutgoingBrowserResponse

Defined in: browser-core/src/OutgoingBrowserResponse.ts:8

## Extends

- `OutgoingResponse`

## Constructors

### new OutgoingBrowserResponse()

> **new OutgoingBrowserResponse**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: browser-core/src/OutgoingBrowserResponse.ts:27

Constructor for OutgoingBrowserResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingBrowserResponseOptions`](../interfaces/OutgoingBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

#### Overrides

`OutgoingResponse.constructor`

## Properties

### \_content

> `protected` **\_content**: `unknown`

Defined in: core/dist/index.d.ts:279

The content of the response.

#### Inherited from

`OutgoingResponse._content`

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:283

The status code of the response.

#### Inherited from

`OutgoingResponse._statusCode`

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:287

The status message of the response.

#### Inherited from

`OutgoingResponse._statusMessage`

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:47

The metadata associated with the event.

#### Inherited from

`OutgoingResponse.metadata`

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: core/dist/index.d.ts:275

The original content of the response.

#### Inherited from

`OutgoingResponse.originalContent`

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: core/dist/index.d.ts:51

The source of the event.

#### Inherited from

`OutgoingResponse.source`

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:55

The timestamp of the event creation.

#### Inherited from

`OutgoingResponse.timeStamp`

***

### type

> `readonly` **type**: `string`

Defined in: core/dist/index.d.ts:43

The type of the event.

#### Inherited from

`OutgoingResponse.type`

***

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string` = `'stonejs@outgoing_browser_response'`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:9

## Accessors

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: core/dist/index.d.ts:318

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

#### Inherited from

`OutgoingResponse.content`

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: core/dist/index.d.ts:306

Gets the status code of the outgoing response.

##### Returns

`undefined` \| `number`

The status code of the response, or undefined if not set.

#### Inherited from

`OutgoingResponse.statusCode`

***

### statusMessage

#### Get Signature

> **get** **statusMessage**(): `undefined` \| `string`

Defined in: core/dist/index.d.ts:312

Gets the status message of the outgoing response.

##### Returns

`undefined` \| `string`

The status message of the response, or undefined if not set.

#### Inherited from

`OutgoingResponse.statusMessage`

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: core/dist/index.d.ts:105

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

`OutgoingResponse.clone`

***

### get()

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: core/dist/index.d.ts:68

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.get`

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: core/dist/index.d.ts:76

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.get`

***

### getMetadataValue()

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: core/dist/index.d.ts:83

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.getMetadataValue`

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: core/dist/index.d.ts:91

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

##### Inherited from

`OutgoingResponse.getMetadataValue`

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:58

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:67

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:76

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:85

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:94

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

***

### isError()

> **isError**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:112

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:139

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:38

Check if the status code falls within the specified range.

#### Parameters

##### start

`number`

The starting value of the range (inclusive).

##### end

`number`

The ending value of the range (exclusive).

#### Returns

`boolean`

True if the status code is within the specified range, otherwise false.

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:48

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:103

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:148

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

***

### isOk()

> **isOk**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:121

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: browser-core/src/OutgoingBrowserResponse.ts:130

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

***

### prepare()

> **prepare**(`_event`, `_container`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md) \| `Promise`\<[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)\>

Defined in: core/dist/index.d.ts:326

Prepare response before sending it.

#### Parameters

##### \_event

`IncomingEvent`

The incoming event associated with this response.

##### \_container

`Container`

The container.

#### Returns

[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md) \| `Promise`\<[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)\>

This OutgoingResponse instance.

#### Inherited from

`OutgoingResponse.prepare`

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value`?): `this`

Defined in: core/dist/index.d.ts:99

Add data to metadata.

#### Parameters

##### key

The key or object to add to metadata.

`string` | `Record`\<`string`, `unknown`\>

##### value?

`unknown`

The value to associate with the key.

#### Returns

`this`

This Event instance.

#### Inherited from

`OutgoingResponse.setMetadataValue`

***

### create()

> `static` **create**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: browser-core/src/OutgoingBrowserResponse.ts:17

Create an instance of OutgoingBrowserResponse.

#### Parameters

##### options

[`OutgoingBrowserResponseOptions`](../interfaces/OutgoingBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

A new instance of OutgoingBrowserResponse.

#### Overrides

`OutgoingResponse.create`

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string`

Defined in: core/dist/index.d.ts:271

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

`OutgoingResponse.OUTGOING_RESPONSE`
