import ToolTip from '@site/src/components/tooltip';

## Definition

▸ **useView**(`listId`,`viewId?`,`options?`, `deps?`): [`Nullable`](../Types/NullableT.md)<`IViewInfo`\>

Returns a list view.

## Parameters

| Name       | Type                                          | Description                                                                                |
| :--------- | :-------------------------------------------- | :----------------------------------------------------------------------------------------- |
| `listId`   | `string`                                      | List GUID id or title. <ToolTip text="Changing the value refreshes response data.">🚩</ToolTip>      |
| `viewId?`  | `string`                                      | View title or view GUID id. <ToolTip text="Changing the value refreshes response data.">🚩</ToolTip> |
| `options?` | [`ViewOptions`](../Interfaces/ViewOptions.md) | PnP hook options.                                                                          |
| `deps?`    | `DependencyList`                              | useSite refreshes response data when one of the dependencies changes.                          |

## Returns

[`Nullable`](../Types/NullableT.md)<`IViewInfo`\>

## Examples

```typescript
// get default view
const defaultView = useView("My List Title");

// get view by title
const myView = useView("My List Title", "My View");

// get view by Id
const myView = useView("My List Title", "9db07c1f-7880-4601-99d0-1c39c43f6599");

// with query
const defaultViewInfo = useView("My List", undefined, {
	query: {
		select: ["Id"]
	}
});
```
