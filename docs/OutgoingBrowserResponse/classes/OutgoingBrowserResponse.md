[**Browser Core Documentation v0.0.2**](../../README.md)

***

[Browser Core Documentation](../../modules.md) / [OutgoingBrowserResponse](../README.md) / OutgoingBrowserResponse

# Class: OutgoingBrowserResponse

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:8](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L8)

## Extends

- `OutgoingResponse`

## Extended by

- [`RedirectBrowserResponse`](../../RedirectBrowserResponse/classes/RedirectBrowserResponse.md)

## Constructors

### new OutgoingBrowserResponse()

> **new OutgoingBrowserResponse**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:27](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L27)

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

Defined in: core/dist/index.d.ts:298

The content of the response.

#### Inherited from

`OutgoingResponse._content`

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:302

The status code of the response.

#### Inherited from

`OutgoingResponse._statusCode`

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:306

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

Defined in: core/dist/index.d.ts:294

The original content of the response.

#### Inherited from

`OutgoingResponse.originalContent`

***

### prepared

> `protected` **prepared**: `boolean`

Defined in: core/dist/index.d.ts:310

The prepared status of the response.

#### Inherited from

`OutgoingResponse.prepared`

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

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:9](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L9)

## Accessors

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: core/dist/index.d.ts:341

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

#### Inherited from

`OutgoingResponse.content`

***

### isPrepared

#### Get Signature

> **get** **isPrepared**(): `boolean`

Defined in: core/dist/index.d.ts:347

Gets the prepared status of the outgoing response.

##### Returns

`boolean`

The prepared status of the response.

#### Inherited from

`OutgoingResponse.isPrepared`

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: core/dist/index.d.ts:329

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

Defined in: core/dist/index.d.ts:335

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

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:58](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L58)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:67](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L67)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:76](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L76)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:85](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L85)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:94](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L94)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

***

### isError()

> **isError**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:112](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L112)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:139](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L139)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:38](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L38)

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

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:48](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L48)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:103](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L103)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:148](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L148)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

***

### isOk()

> **isOk**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:121](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L121)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:130](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L130)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

***

### prepare()

> **prepare**(`_event`, `_container`?): `Promiseable`\<[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)\>

Defined in: core/dist/index.d.ts:377

Prepare response before sending it.

#### Parameters

##### \_event

`IncomingEvent`

The incoming event associated with this response.

##### \_container?

`Container`

The container.

#### Returns

`Promiseable`\<[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)\>

This OutgoingResponse instance.

#### Inherited from

`OutgoingResponse.prepare`

***

### setContent()

> **setContent**(`content`): `this`

Defined in: core/dist/index.d.ts:362

Set the content of the response.

#### Parameters

##### content

`unknown`

The content to set.

#### Returns

`this`

This OutgoingResponse instance.

#### Inherited from

`OutgoingResponse.setContent`

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

### setPrepared()

> **setPrepared**(`prepared`): `this`

Defined in: core/dist/index.d.ts:369

Set the prepared status of the response.

#### Parameters

##### prepared

`boolean`

The prepared status to set.

#### Returns

`this`

This OutgoingResponse instance.

#### Inherited from

`OutgoingResponse.setPrepared`

***

### setStatus()

> **setStatus**(`code`, `text`?): `this`

Defined in: core/dist/index.d.ts:355

Set the status code of the response.

#### Parameters

##### code

`number`

The status code.

##### text?

`string`

Optional status message.

#### Returns

`this`

This OutgoingResponse instance.

#### Inherited from

`OutgoingResponse.setStatus`

***

### create()

> `static` **create**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:17](https://github.com/stonemjs/browser-core/blob/408e82465a131a47c05457385f3cbf210ec88032/src/OutgoingBrowserResponse.ts#L17)

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

Defined in: core/dist/index.d.ts:290

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

`OutgoingResponse.OUTGOING_RESPONSE`
