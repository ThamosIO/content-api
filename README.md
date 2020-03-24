# Content API

## Installation

First and foremost, you must have `Docker` and `direnv` installed.

This will enable the env vars in your project folder.

```bash
$ direnv allow
```

Install modules :

```bash
$ yarn
```

Then, in the `.envrc` file, you must add an env variable `CONTENT_URL` which will be the URL to your `.json` file.

## Usage

For a local run :

```bash
$ yarn run start
```

The API is available at `http://localhost:8080`.

Available routes are :

- `/players`
- `/players/:id`

## Available commands

| Command                  | Description                                    |
| :----------------------- | :--------------------------------------------- |
| `yarn run start`         | starts the API (local)                         |
| `yarn run test`          | launches the whole test suite                  |
| `yarn run test-coverage` | launches the test suite but with code coverage |
| `yarn run test-watch`    | launches the test suite in watch mode          |
