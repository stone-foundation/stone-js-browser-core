[**Browser Core Documentation v0.0.2**](../../../README.md)

***

[Browser Core Documentation](../../../modules.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Defined in: [browser-core/src/cookies/CookieCollection.ts:8](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L8)

Class representing a collection of Cookies.

## Constructors

### new CookieCollection()

> `protected` **new CookieCollection**(`cookie`?, `options`?, `domDocument`?): [`CookieCollection`](CookieCollection.md)

Defined in: [browser-core/src/cookies/CookieCollection.ts:29](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L29)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### domDocument?

`Document`

#### Returns

[`CookieCollection`](CookieCollection.md)

## Methods

### add()

> **add**(`name`, `value`, `options`): `this`

Defined in: [browser-core/src/cookies/CookieCollection.ts:42](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L42)

Add a cookie to the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

***

### all()

> **all**(): [`Cookie`](../../Cookie/classes/Cookie.md)[]

Defined in: [browser-core/src/cookies/CookieCollection.ts:148](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L148)

Get all cookies in the collection.

#### Returns

[`Cookie`](../../Cookie/classes/Cookie.md)[]

***

### clear()

> **clear**(): `this`

Defined in: [browser-core/src/cookies/CookieCollection.ts:162](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L162)

Clear all cookies from the collection.

#### Returns

`this`

***

### get()

Get a cookie from the collection.

#### Param

Cookie name.

#### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`): `undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [browser-core/src/cookies/CookieCollection.ts:72](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L72)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`, `fallback`): [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [browser-core/src/cookies/CookieCollection.ts:81](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L81)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

###### fallback

[`Cookie`](../../Cookie/classes/Cookie.md)

Fallback value if the cookie does not exist.

##### Returns

[`Cookie`](../../Cookie/classes/Cookie.md)

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### getValue()

Get a cookie value from the collection.

#### Param

Cookie name.

#### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **getValue**\<`ValueType`\>(`name`): `undefined` \| `ValueType`

Defined in: [browser-core/src/cookies/CookieCollection.ts:100](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L100)

Get a cookie value from the collection.

##### Type Parameters

• **ValueType** = `unknown`

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| `ValueType`

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **getValue**\<`ValueType`\>(`name`, `fallback`): `ValueType`

Defined in: [browser-core/src/cookies/CookieCollection.ts:109](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L109)

Get a cookie value from the collection.

##### Type Parameters

• **ValueType** = `unknown`

##### Parameters

###### name

`string`

Cookie name.

###### fallback

`ValueType`

Fallback value if the cookie does not exist.

##### Returns

`ValueType`

Cookie value.

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### has()

> **has**(`name`): `boolean`

Defined in: [browser-core/src/cookies/CookieCollection.ts:127](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L127)

Check if the collection has a cookie.

#### Parameters

##### name

`string`

Cookie name.

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [browser-core/src/cookies/CookieCollection.ts:155](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L155)

Check if the collection is empty.

#### Returns

`boolean`

***

### remove()

> **remove**(`name`): `this`

Defined in: [browser-core/src/cookies/CookieCollection.ts:136](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L136)

Remove a cookie from the collection.

#### Parameters

##### name

`string`

Cookie name to remove.

#### Returns

`this`

***

### secure()

> **secure**(`value`): `this`

Defined in: [browser-core/src/cookies/CookieCollection.ts:172](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L172)

Set secure flag for all cookies in the collection.

#### Parameters

##### value

`boolean` = `false`

Whether the cookies are secure.

#### Returns

`this`

***

### setOptions()

> **setOptions**(`options`): `this`

Defined in: [browser-core/src/cookies/CookieCollection.ts:182](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L182)

Set options for all cookies in the collection.

#### Parameters

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Cookie options.

#### Returns

`this`

***

### update()

> **update**(`name`, `value`, `options`): `this`

Defined in: [browser-core/src/cookies/CookieCollection.ts:56](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L56)

Update a cookie in the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

***

### create()

> `static` **create**(`cookie`?, `options`?, `domDocument`?): [`CookieCollection`](CookieCollection.md)

Defined in: [browser-core/src/cookies/CookieCollection.ts:19](https://github.com/stonemjs/browser-core/blob/a1c2a931b309b7a521917fcf25e69606878b4d2b/src/cookies/CookieCollection.ts#L19)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### domDocument?

`Document`

#### Returns

[`CookieCollection`](CookieCollection.md)
