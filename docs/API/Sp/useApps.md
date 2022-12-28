## Definition

▸ **useApps**<`T`\>(`options?`, `deps?`): [`Nullable`](../Types/NullableT.md)<`T`[]\>

Returns app detail collection from the app catalog.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Return type |

## Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`WebAppsOptions`](../Interfaces/WebAppsOptions.md) | PnP hook options |
| `deps?` | `DependencyList` | useApps refreshes response data when one of the dependencies changes. |

## Returns

[`Nullable`](../Types/NullableT.md)<`T`[]\>

App info array.

## Examples

```typescript
// basic usage
const apps = useApps();

// with query
const filteredApps = useApp({
	query: {
		select: ["Title", "Id", "IsEnabled"],
		filter: "IsEnabled eq true"
	}
});
```
