import ToolTip from '@site/src/components/tooltip';

## Hierarchy

- [`PnpHookOptions`](PnpHookOptions.md)<[`ODataQueryableCollection`](ODataQueryableCollection.md)\>

  ↳ **`RecycleBinItemsOptions`**

## Properties

### behaviors

• `Optional` **behaviors**: `TimelinePipe`<`any`\>[]

Additional behaviors for hooks PnP request.

#### Inherited from

[PnpHookOptions](PnpHookOptions.md).[behaviors](PnpHookOptions.md#behaviors)

___

### disabled

• `Optional` **disabled**: [`DisableOptionValueType`](../Types/DisableOptionType.md#disableoptionvaluetype) \| [`DisableOptionFuncType`](../Types/DisableOptionType.md#disableoptionfunctype)

Disable hook calls and renders.

#### Inherited from

[PnpHookOptions](PnpHookOptions.md).[disabled](PnpHookOptions.md#disabled)

___

### error

• `Optional` **error**: [`ErrorFunc`](../Types/ErrorFunc.md#errorfunc) \| [`ErrorMode`](../Enums/ErrorMode.md)

Error handling. Default is [`ErrorMode.Default`](../Enums/ErrorMode.md#default).

#### Inherited from

[PnpHookOptions](PnpHookOptions.md).[error](PnpHookOptions.md#error)

___

### keepPreviousState

• `Optional` **keepPreviousState**: `boolean`

Keep previous state until new request is resolved rather than clearing the state as `undefined`. Default is `false`.

#### Inherited from

[PnpHookOptions](PnpHookOptions.md).[keepPreviousState](PnpHookOptions.md#keeppreviousstate)

___

### query

• `Optional` **query**: [`Nullable`](../Types/NullableT.md)<[`ODataQueryableCollection`](ODataQueryableCollection.md)\>

Pnp SP context. <ToolTip text="Changing sp value refreshes response data.">🚩</ToolTip>

#### Inherited from

[PnpHookOptions](PnpHookOptions.md).[query](PnpHookOptions.md#query)


___

### scope

• `Optional` **scope**: ``"web"`` \| ``"site"``

Recycle bin scope. Available options are `"site"` and `"web"`. Default is `"web"`. <ToolTip text="Changing scope type refreshes response data.">🚩</ToolTip>

___

### sp

• `Optional` **sp**: `SPFI`

Pnp SP context. <ToolTip text="Changing sp value refreshes response data.">🚩</ToolTip>

#### Inherited from

[PnpHookOptions](PnpHookOptions.md).[sp](PnpHookOptions.md#sp)