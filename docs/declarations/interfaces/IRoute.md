[**Browser Core Documentation v0.0.2**](../../README.md)

***

[Browser Core Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [browser-core/src/declarations.ts:9](https://github.com/stonemjs/browser-core/blob/58b3a039142f6865ef6912ef058985d46f08d508/src/declarations.ts#L9)

Represents a route.

## Properties

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback`?) => `undefined` \| `TReturn`

Defined in: [browser-core/src/declarations.ts:11](https://github.com/stonemjs/browser-core/blob/58b3a039142f6865ef6912ef058985d46f08d508/src/declarations.ts#L11)

#### Type Parameters

• **TReturn** = `unknown`

#### Parameters

##### name

`string`

##### fallback?

`TReturn`

#### Returns

`undefined` \| `TReturn`

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [browser-core/src/declarations.ts:10](https://github.com/stonemjs/browser-core/blob/58b3a039142f6865ef6912ef058985d46f08d508/src/declarations.ts#L10)
