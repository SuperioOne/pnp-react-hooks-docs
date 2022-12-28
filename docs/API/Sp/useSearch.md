import ToolTip from '@site/src/components/tooltip';

## Definition

▸ **useSearch**(`searchQuery`, `options?`, `deps?`): [[`Nullable`](../Types/NullableT.md)<[`SpSearchResult`](../Interfaces/SpSearchResult.md)\>, [`GetPageDispatch`](../Types/GetPageDispatch.md)]

Conduct search on SharePoint.

## Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchQuery` | `string` \| `ISearchQuery` | `ISearchQuery` query or search text. <ToolTip text="Changing the value refreshes response data.">🚩</ToolTip> |
| `options?` | [`SearchOptions`](../Interfaces/SearchOptions.md) | PnP hook options. |
| `deps?` | `DependencyList` | useSearch refreshes response data when one of the dependencies changes. |

## Returns

[[`Nullable`](../Types/NullableT.md)<[`SpSearchResult`](../Interfaces/SpSearchResult.md)\>, [`GetPageDispatch`](../Types/GetPageDispatch.md)]

## Examples

```typescript
// basic usage
const [results, setPage] = useSearch("search text");

// load next page
setPage(2);

// load page with callback
setPage(3, () => alert("Page Loaded!"));
```

:::danger

Be careful when using `ISearchQuery` query. Improper use can result in infinite render loop due to shallow equality check.

:::

**Correct usage**

```typescript
const [query, setQuery] = React.useState<ISearchQuery>({
        Querytext: "*",
        RowLimit: 5,
        RowsPerPage: 5,
        SelectProperties: ["Title"]
	});

const [results, setPage] = useSearch(query);
```

**Incorrect usage**

```typescript
// Causes infinite render loop because of the 'SelectProperties' reference always changes and shallowEquality check always fails.
const [results, setPage] = useSearch({
        Querytext: "*",
        RowLimit: 5,
        RowsPerPage: 5,
        SelectProperties: ["Title"]
	});
```