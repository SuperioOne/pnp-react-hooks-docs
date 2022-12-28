import ToolTip from '@site/src/components/tooltip';

## Hierarchy

- [`ErrorOptions`](ErrorOptions.md)

- [`RenderOptions`](RenderOptions.md)

- [`ContextOptions`](ContextOptions.md)

- [`BehaviourOptions`](BehaviourOptions.md)

  ↳ **`UserPermissionOptions`**

## Properties

### behaviors

• `Optional` **behaviors**: `TimelinePipe`<`any`\>[]

Additional behaviors for hooks PnP request.

#### Inherited from

[BehaviourOptions](BehaviourOptions.md).[behaviors](BehaviourOptions.md#behaviors)

___

### disabled

• `Optional` **disabled**: [`DisableOptionValueType`](../Types/DisableOptionType.md#disableoptionvaluetype) \| (`permissionKinds`: `PermissionKind` \| `PermissionKind`[], `userId`: `string` \| `number`) => `boolean`

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

### scope

• `Optional` **scope**: [`Scope`](Scope.md)

List and list item scope configuration. Default is current web scope. <ToolTip text="Changing scope values refreshes response data.">🚩</ToolTip>

___

### sp

• `Optional` **sp**: `SPFI`

Pnp SP context. <ToolTip text="Changing sp value refreshes response data.">🚩</ToolTip>

#### Inherited from

[ContextOptions](ContextOptions.md).[sp](ContextOptions.md#sp)

___

### userId

• `Optional` **userId**: `string` \| `number`

User email, login name or Id. Default is current user. <ToolTip text="Changing userId refreshes response data.">🚩</ToolTip>
