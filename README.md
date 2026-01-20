# Vue Datatable

A Vue 3 component for creating customizable and feature-rich data tables.

## Installation

Install the package using npm:

```bash
npm install @sammyod/vue-datatable
```

## Usage

### Basic Example

```vue
<template>
  <Datatable
    :headings="['Name', 'Age', 'Email']"
    :data="[
      { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
      { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' }
    ]"
    :loading="false"
  />
</template>

<script setup>
import Datatable from '@sammyod/vue-datatable';
import '@sammyod/vue-datatable/vue-datatable.css';
</script>

<style>
/* Add any custom styles here */
</style>
```

### Props

| Prop             | Type                          | Default     | Description                                      |
|------------------|-------------------------------|-------------|--------------------------------------------------|
| `headings`       | `Array<string>`               | `[]`        | Column headings for the table.                  |
| `data`           | `Array<Record<string, any>>` | `[]`        | Data to display in the table.                   |
| `verticalSpacing`| `'narrow' \| 'standard' \| 'wide'` | `'standard'` | Controls the vertical spacing of rows.          |
| `scrollable`     | `boolean`                    | `false`     | Enables horizontal scrolling for wide tables.   |
| `pagination`     | `boolean`                    | `false`     | Enables pagination for the table.               |
| `paginationMode` | `'static' \| 'server'`        | `'static'`  | Pagination mode: static or server-side.         |
| `loading`        | `boolean`                    | `false`     | Displays a loading indicator when `true`.       |

### Advanced Example

```vue
<template>
  <Datatable
    :headings="['Name', 'Age', 'Email']"
    :data="data"
    verticalSpacing="wide"
    :scrollable="true"
    :pagination="true"
    paginationMode="server"
    :loading="isLoading"
  />
</template>

<script setup>
import Datatable from '@sammyod/vue-datatable';

const data = [
  { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
  { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' }
];

const isLoading = false;
</script>

<style>
/* Add any custom styles here */
</style>
```

## License

MIT