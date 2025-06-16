## Weili Utils Library

A collection of TypeScript utility functions for common operations, with full type safety and comprehensive documentation.

## Features

- **Type Safety**: Built with TypeScript for better developer experience
- **Documentation**: JSDoc comments for all functions
- **Tested**: Includes test coverage for all utilities
- **Modular**: Import only what you need

## Installation

```bash
npm install weili-utils-library
```

## Available Utilities

### Array Utilities

#### `partialMatch<T>(input: string, list: T[], searchProp: keyof T): T[]`

Filters an array of objects based on a partial, case-insensitive match of a specified property.

```typescript
import { partialMatch } from 'weili-utils-library';

const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' }
];

const result = partialMatch('app', items, 'name');
// Returns: [{ id: 1, name: 'Apple' }]
```

#### `mergeTwoListsAsUnique<T>(list1: T[], list2: T[], uniqueKey: keyof T): T[]`

Merges two arrays of objects, removing duplicates based on a specified key.

```typescript
import { mergeTwoListsAsUnique } from 'weili-utils-library';

const list1 = [{ id: 1, name: 'Apple' }];
const list2 = [{ id: 1, name: 'Updated Apple' }, { id: 2, name: 'Banana' }];

const result = mergeTwoListsAsUnique(list1, list2, 'id');
// Returns: [
//   { id: 1, name: 'Updated Apple' },
//   { id: 2, name: 'Banana' }
// ]
```

#### `sortListByProperty<T>(list: T[], property: keyof T, isAscending = true): T[]`

Sorts an array of objects by a specified property.

```typescript
import { sortListByProperty } from 'weili-utils-library';

const items = [
  { id: 2, name: 'Banana' },
  { id: 1, name: 'Apple' }
];

const result = sortListByProperty(items, 'id');
// Returns: [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' }
// ]
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Build the project: `npm run build`

## Building Documentation

To generate documentation:

```bash
npm run docs:build
```

To serve the documentation locally:

```bash
npm run docs:serve
```

## License

MIT
