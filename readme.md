# User Preferences API

## Environment Versions

- npm: 9.3.1
- node: 18.14.0
- nvm-windows: 1.1.0

## Setting Up Environment on Windows

Use the following command to set up the Node.js version specified in `.nvmrc`:

```powershell
nvm use $(Get-Content .nvmrc).replace( 'v', '' )
```

## Setting Up Environment on Linux/Mac
```powershell
nvm use
```

## Starting the Server
To start the server, run the following command:
```powershell
npm run start
```