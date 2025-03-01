[**Browser Core Documentation v0.0.2**](../../../README.md)

***

[Browser Core Documentation](../../../modules.md) / [errors/BrowserError](../README.md) / BrowserError

# Class: BrowserError

Defined in: [browser-core/src/errors/BrowserError.ts:6](https://github.com/stonemjs/browser-core/blob/dd41465b84f4b80e02cbd545eabae9ceb9083e35/src/errors/BrowserError.ts#L6)

Custom error for Browser operations.

## Extends

- `InitializationError`

## Constructors

### new BrowserError()

> **new BrowserError**(`message`, `options`?): [`BrowserError`](BrowserError.md)

Defined in: [browser-core/src/errors/BrowserError.ts:7](https://github.com/stonemjs/browser-core/blob/dd41465b84f4b80e02cbd545eabae9ceb9083e35/src/errors/BrowserError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`BrowserError`](BrowserError.md)

#### Overrides

`InitializationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:2854

#### Inherited from

`InitializationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:2853

#### Inherited from

`InitializationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:2855

#### Inherited from

`InitializationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:2876

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`InitializationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:2862

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`InitializationError.create`
