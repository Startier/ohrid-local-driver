# @startier/ohrid-local-driver

> A driver for @startier/ohrid that executes methods locally.

> [!WARNING]  
> This driver doesn't have any RPC or transport protocols associated with it.
> It should only be used for testing.

## Usage

Install the package using `npm` (or anything compatible):

```sh
npm install @startier/ohrid-local-driver
```

Add the driver to `services.json`.

### Global

```json
{
  "driver": "@startier/ohrid-local-driver"
}
```

### Service-specific

```json
{
  "services": {
    "example": {
      "driver": "@startier/ohrid-local-driver",
      "settings": {}
    }
  }
}
```

## Settings

```ts
{
    executeRemoteCalls?: boolean
}
```

### `executeRemoteCalls`

When set to `true` remote calls are executed as if they were local instead of throwing an exception.
