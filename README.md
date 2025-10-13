# Documentación de Trabajosonline

Este repositorio contiene la documentación pública de Trabajosonline generada con [Mintlify](https://mintlify.com/).

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

El comando `npm run dev` inicia el servidor de desarrollo de Mintlify en modo watch.

## Generar la versión estática

```bash
npm run build
```

## Despliegue

```bash
npm run deploy
```

Antes de ejecutar `npm run deploy` necesitas crear las variables de entorno `MINTLIFY_PROJECT_ID` y `MINTLIFY_API_KEY`, que se obtienen desde el panel de Mintlify. Puedes definirlas en tu terminal o en un archivo `.env`.

Consulta la [guía oficial de Mintlify](https://mintlify.com/docs) para más opciones de despliegue.

## Traducciones pendientes

La migración a Mintlify solo incluye la documentación en español. Las traducciones que existían en Docusaurus (por ejemplo, inglés y alemán) no se han importado todavía y deberán revisarse y recrearse manualmente en la nueva estructura de `docs/`.
