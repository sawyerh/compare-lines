Compare two files and output the lines that are in the first file but not the second.

## Usage

```js
node compare.js file1.txt file2.txt
```

## Example

Example `file.txt`:

```
Foo
Bar
Baz
```

Example `file2.txt`:

```
Foo
Baz
```

Example script output:

```sh
[
  'Bar'
]
```
