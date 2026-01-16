<p align="center">
  <a href="https://github.com/opral/inlang">  </a>

  <img src="https://github.com/opral/inlang/blob/main/assets/logo_rounded.png?raw=true" alt="inlang icon" width="90px">
  
  <h2 align="center">
    The open file format for localization (i18n) tools.
  </h2>

  <p align="center">
    <br>
    <a href='https://inlang.com/c/apps' target="_blank">🕹️ Apps</a>
    ·
    <a href='https://inlang.com/documentation' target="_blank">📄 Docs</a>
    ·
    <a href='https://discord.gg/gdMPPWy57R' target="_blank">💙 Discord</a>
    ·
    <a href='https://twitter.com/inlangHQ' target="_blank">𝕏 Twitter</a>
  </p>
</p>

<br>

## The problem

i18n tools are not interoperable.

No common file format for i18n tools exists. Data formats like JSON or YAML are unsuited for complex tools that need CRUD APIs, need to scale to hundreds of thousands of messages, or require version control.

The result is fragmented tooling:

- Switching tools requires migrations and refactoring
- Cross-team work requires manual exports and hand-offs
- Automating workflows requires custom scripts and glue code

```
┌──────────┐        ┌───────────┐         ┌──────────┐
│ i18n lib │───✗────│Translation│────✗────│   CI/CD  │
│          │        │   Tool    │         │Automation│
└──────────┘        └───────────┘         └──────────┘
```

Every tool has its own format, its own sync, its own collaboration layer. Cross-team work? Manual exports and hand-offs.

## The solution

Inlang is an open file format designed for building localization (i18n) tooling. It provides:

- CRUD API — Read and write translations programmatically
- SQL queries — Query messages like a database, scale to millions
- Plugin system — Import/export any format (JSON, XLIFF, etc.)
- Version control — Built-in version control via [lix](https://github.com/opral/lix)


```
┌──────────┐        ┌───────────┐         ┌────────────┐
│ i18n lib │        │Translation│         │   CI/CD    │
│          │        │   Tool    │         │ Automation │
└────┬─────┘        └─────┬─────┘         └─────┬──────┘
     │                    │                     │
     └─────────┐          │          ┌──────────┘
               ▼          ▼          ▼
           ┌──────────────────────────────────┐
           │          .inlang file            │
           └──────────────────────────────────┘
```

The result:

- Switch tools without migrations — they all use the same file
- Cross-team work without hand-offs — developers, translators, and designers all edit the same source
- Automation just works — one source of truth, no glue code
- 
## Popular tools

- [Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) — i18n library for JS/TS with fully translated, typesafe & fast apps in minutes
- [Fink](https://inlang.com/m/tdozzpar/app-inlang-finkLocalizationEditor) — translation editor in the browser, invite collaborators to help
- [Sherlock](https://inlang.com/m/r7kp499g/app-inlang-ideExtension) — VS Code extension to translate right in your editor
- [Parrot](https://inlang.com/m/gkrpgoir/app-parrot-figmaPlugin) — see translations directly in Figma
- [CLI](https://inlang.com/m/2qj2w8pu/app-inlang-cli) — lint messages, machine translate, quality control in CI/CD

## Build your own

```ts
import { loadProjectFromDirectory } from "@inlang/sdk";

const project = await loadProjectFromDirectory({
  path: "./project.inlang",
});

const messages = await project.db.selectFrom("message").selectAll().execute();
```

[Read the docs →](https://inlang.com/docs)

## Contributing

There are many ways you can contribute to inlang! Here are a few options:

- Star this repo
- Create issues every time you feel something is missing or goes wrong
- Upvote issues with 👍 reaction so we know what the demand for a particular issue to prioritize it within the roadmap

If you would like to contribute to the development of the project, please refer to our [Contributing guide](https://github.com/opral/inlang/blob/main/CONTRIBUTING.md).

All contributions are highly appreciated. 🙏
