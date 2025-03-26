[**Browser Core Documentation v0.0.2**](../../../README.md)

***

[Browser Core Documentation](../../../modules.md) / [cookies/Cookie](../README.md) / Cookie

# Class: Cookie

Defined in: [browser-core/src/cookies/Cookie.ts:7](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L7)

Class representing a Cookie.

## Constructors

### new Cookie()

> `protected` **new Cookie**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: [browser-core/src/cookies/Cookie.ts:27](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L27)

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

[`Cookie`](Cookie.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [browser-core/src/cookies/Cookie.ts:8](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L8)

***

### options

> `readonly` **options**: [`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Defined in: [browser-core/src/cookies/Cookie.ts:10](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L10)

***

### value

> `readonly` **value**: `unknown`

Defined in: [browser-core/src/cookies/Cookie.ts:9](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L9)

## Methods

### cloneWith()

> **cloneWith**(`value`, `options`): [`Cookie`](Cookie.md)

Defined in: [browser-core/src/cookies/Cookie.ts:78](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L78)

Clone the cookie with new name, value, and options.

#### Parameters

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

New cookie options.

#### Returns

[`Cookie`](Cookie.md)

A new cookie instance.

***

### getValue()

> **getValue**\<`ValueType`\>(): `ValueType`

Defined in: [browser-core/src/cookies/Cookie.ts:37](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L37)

Get the cookie value.

#### Type Parameters

• **ValueType** = `unknown`

#### Returns

`ValueType`

The cookie value.

***

### serialize()

> **serialize**(): `string`

Defined in: [browser-core/src/cookies/Cookie.ts:62](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L62)

Serialize the cookie value.

#### Returns

`string`

***

### setExpires()

> **setExpires**(`value`): `this`

Defined in: [browser-core/src/cookies/Cookie.ts:45](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L45)

Set expiration date for the cookie.

#### Parameters

##### value

`Date`

Expiration date.

#### Returns

`this`

***

### setSecure()

> **setSecure**(`value`): `this`

Defined in: [browser-core/src/cookies/Cookie.ts:54](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L54)

Set secure flag for the cookie.

#### Parameters

##### value

`boolean`

Whether the cookie is secure.

#### Returns

`this`

***

### create()

> `static` **create**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: [browser-core/src/cookies/Cookie.ts:18](https://github.com/stonemjs/browser-core/blob/fa5573518c1ef095e02e60009eef605c26ff056c/src/cookies/Cookie.ts#L18)

Create a Cookie.

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

[`Cookie`](Cookie.md)
