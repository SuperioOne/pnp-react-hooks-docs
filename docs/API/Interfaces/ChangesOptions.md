import ToolTip from '@site/src/components/tooltip';

## Hierarchy

- [`RenderOptions`](RenderOptions.md)

- [`ContextOptions`](ContextOptions.md)

- [`ErrorOptions`](ErrorOptions.md)

- [`BehaviourOptions`](BehaviourOptions.md)

  ↳ **`ChangesOptions`**

## Properties

### behaviors

• `Optional` **behaviors**: `TimelinePipe`<`any`\>[]

Additional behaviors for hooks PnP request.

#### Inherited from

[BehaviourOptions](BehaviourOptions.md).[behaviors](BehaviourOptions.md#behaviors)

___

### disabled

• `Optional` **disabled**: [`DisableOptionValueType`](../Types/DisableOptionType.md#disableoptionvaluetype) \| (`changeQuery`: `IChangeQuery`) => `boolean`

Disable hook calls and renders.

#### Overrides

[RenderOptions](RenderOptions.md).[disabled](RenderOptions.md#disabled)

___

### error

• `Optional` **error**: [`ErrorFunc`](../Types/ErrorFunc.md#errorfunc) \| [`ErrorMode`](../Enums/ErrorMode.md)

Error handling. Default is [`ErrorMode.Default`](../Enums/ErrorMode.md#default).

#### Inherited from

[ErrorOptions](ErrorOptions.md).[error](ErrorOptions.md#error)

___

### keepPreviousState

• `Optional` **keepPreviousState**: `boolean`

Keep previous state until new request is resolved rather than clearing the state as `undefined`. Default is `false`.

#### Inherited from

[RenderOptions](RenderOptions.md).[keepPreviousState](RenderOptions.md#keeppreviousstate)

___

### list

• `Optional` **list**: `string`

List GUID Id or title for getting list changes. Keep `undefined` for web changes. <ToolTip text="Changing list value refreshes response data.">🚩</ToolTip>

___

### sp

• `Optional` **sp**: `SPFI`

Pnp SP context. <ToolTip text="Changing sp value refreshes response data.">🚩</ToolTip>

#### Inherited from

[ContextOptions](ContextOptions.md).[sp](ContextOptions.md#sp)
