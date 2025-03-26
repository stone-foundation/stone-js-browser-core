[**Browser Core Documentation v0.0.2**](../../README.md)

***

[Browser Core Documentation](../../modules.md) / [RedirectBrowserResponse](../README.md) / RedirectBrowserResponse

# Class: RedirectBrowserResponse

Defined in: [browser-core/src/RedirectBrowserResponse.ts:17](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/RedirectBrowserResponse.ts#L17)

Class representing a RedirectBrowserResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md)

## Constructors

### new RedirectBrowserResponse()

> **new RedirectBrowserResponse**(`options`): [`RedirectBrowserResponse`](RedirectBrowserResponse.md)

Defined in: [browser-core/src/RedirectBrowserResponse.ts:37](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/RedirectBrowserResponse.ts#L37)

Create a RedirectBrowserResponse.

#### Parameters

##### options

[`RedirectBrowserResponseOptions`](../interfaces/RedirectBrowserResponseOptions.md)

Options for creating the RedirectBrowserResponse.

#### Returns

[`RedirectBrowserResponse`](RedirectBrowserResponse.md)

#### Throws

HttpError if the status code is not a redirect code.

#### Overrides

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`constructor`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#constructors)

## Properties

### \_content

> `protected` **\_content**: `unknown`

Defined in: core/dist/index.d.ts:291

The content of the response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`_content`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#_content)

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:295

The status code of the response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`_statusCode`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#_statuscode)

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:299

The status message of the response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`_statusMessage`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#_statusmessage)

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:47

The metadata associated with the event.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`metadata`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#metadata)

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: core/dist/index.d.ts:287

The original content of the response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`originalContent`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#originalcontent)

***

### prepared

> `protected` **prepared**: `boolean`

Defined in: core/dist/index.d.ts:303

The prepared status of the response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`prepared`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#prepared)

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: core/dist/index.d.ts:51

The source of the event.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`source`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#source)

***

### targetUrl?

> `readonly` `optional` **targetUrl**: `string` \| `URL`

Defined in: [browser-core/src/RedirectBrowserResponse.ts:19](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/RedirectBrowserResponse.ts#L19)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:55

The timestamp of the event creation.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`timeStamp`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: core/dist/index.d.ts:43

The type of the event.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`type`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#type)

***

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string` = `'stonejs@redirect_browser_response'`

Defined in: [browser-core/src/RedirectBrowserResponse.ts:18](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/RedirectBrowserResponse.ts#L18)

#### Overrides

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`OUTGOING_BROWSER_RESPONSE`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#outgoing_browser_response)

## Accessors

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: core/dist/index.d.ts:334

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`content`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#content)

***

### isPrepared

#### Get Signature

> **get** **isPrepared**(): `boolean`

Defined in: core/dist/index.d.ts:340

Gets the prepared status of the outgoing response.

##### Returns

`boolean`

The prepared status of the response.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isPrepared`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isprepared)

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: core/dist/index.d.ts:322

Gets the status code of the outgoing response.

##### Returns

`undefined` \| `number`

The status code of the response, or undefined if not set.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`statusCode`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#statuscode)

***

### statusMessage

#### Get Signature

> **get** **statusMessage**(): `undefined` \| `string`

Defined in: core/dist/index.d.ts:328

Gets the status message of the outgoing response.

##### Returns

`undefined` \| `string`

The status message of the response, or undefined if not set.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`statusMessage`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#statusmessage)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: core/dist/index.d.ts:105

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`RedirectBrowserResponse`](RedirectBrowserResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`clone`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#clone)

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

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`get`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#get)

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

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`get`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#get)

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

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`getMetadataValue`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#getmetadatavalue)

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

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`getMetadataValue`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#getmetadatavalue)

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:58](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L58)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is1xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is1xx)

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:67](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L67)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is2xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is2xx)

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:76](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L76)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is3xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is3xx)

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:85](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L85)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is4xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is4xx)

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:94](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L94)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is5xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is5xx)

***

### isError()

> **isError**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:112](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L112)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isError`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#iserror)

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:139](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L139)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isForbidden`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isforbidden)

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:38](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L38)

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

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isInStatusRange`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isinstatusrange)

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:48](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L48)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isInvalid`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isinvalid)

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:103](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L103)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isNotError`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isnoterror)

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:148](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L148)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isNotFound`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isnotfound)

***

### isOk()

> **isOk**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:121](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L121)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isOk`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isok)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [browser-core/src/OutgoingBrowserResponse.ts:130](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/OutgoingBrowserResponse.ts#L130)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isUnauthorized`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isunauthorized)

***

### prepare()

> **prepare**(`_event`, `_container`?): [`RedirectBrowserResponse`](RedirectBrowserResponse.md) \| `Promise`\<[`RedirectBrowserResponse`](RedirectBrowserResponse.md)\>

Defined in: core/dist/index.d.ts:370

Prepare response before sending it.

#### Parameters

##### \_event

`IncomingEvent`

The incoming event associated with this response.

##### \_container?

`Container`

The container.

#### Returns

[`RedirectBrowserResponse`](RedirectBrowserResponse.md) \| `Promise`\<[`RedirectBrowserResponse`](RedirectBrowserResponse.md)\>

This OutgoingResponse instance.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`prepare`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#prepare)

***

### setContent()

> **setContent**(`content`): `this`

Defined in: core/dist/index.d.ts:355

Set the content of the response.

#### Parameters

##### content

`unknown`

The content to set.

#### Returns

`this`

This OutgoingResponse instance.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`setContent`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#setcontent)

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

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`setMetadataValue`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#setmetadatavalue)

***

### setPrepared()

> **setPrepared**(`prepared`): `this`

Defined in: core/dist/index.d.ts:362

Set the prepared status of the response.

#### Parameters

##### prepared

`boolean`

The prepared status to set.

#### Returns

`this`

This OutgoingResponse instance.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`setPrepared`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#setprepared)

***

### setStatus()

> **setStatus**(`code`, `text`?): `this`

Defined in: core/dist/index.d.ts:348

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

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`setStatus`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#setstatus)

***

### create()

> `static` **create**(`options`): [`RedirectBrowserResponse`](RedirectBrowserResponse.md)

Defined in: [browser-core/src/RedirectBrowserResponse.ts:27](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/RedirectBrowserResponse.ts#L27)

Create an instance of OutgoingBrowserResponse.

#### Parameters

##### options

[`RedirectBrowserResponseOptions`](../interfaces/RedirectBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

[`RedirectBrowserResponse`](RedirectBrowserResponse.md)

A new instance of OutgoingBrowserResponse.

#### Overrides

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`create`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#create)

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string`

Defined in: core/dist/index.d.ts:283

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`OUTGOING_RESPONSE`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#outgoing_response)
