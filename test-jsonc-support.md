# Suporte JSONC Adicionado

## O que foi implementado

Adicionado suporte completo para arquivos JSONC (JSON com comentários) em todos os plugins e no SDK principal. Isso permite:

1. **Comentários** - Linhas e blocos de comentários em arquivos JSON
2. **Vírgulas finais** - Vírgulas após o último item de arrays e objetos

## Arquivos modificados

### Plugins
- `/packages/plugins/icu1/src/plugin.ts` - Plugin ICU MessageFormat v1
- `/packages/plugins/i18next/src/import-export/importFiles.ts` - Plugin i18next

### SDK
- `/packages/sdk/src/project/loadProject.ts` - Carregamento de projetos
- `/packages/sdk/src/project/loadProjectFromDirectory.ts` - Carregamento de diretórios

## Biblioteca utilizada

**jsonc-parser** - Parser JSONC confiável desenvolvido pela Microsoft e usado pelo VS Code

## Exemplo de uso

### Antes (JSON estrito)
```json
{
  "hello": "Hello World",
  "goodbye": "Goodbye"
}
```

### Agora (JSONC suportado)
```jsonc
{
  // Mensagem de saudação
  "hello": "Hello World",
  
  /* Mensagem de despedida
     pode ter múltiplas linhas */
  "goodbye": "Goodbye", // vírgula final permitida
}
```

## Compatibilidade

A mudança é **100% retrocompatível**. Arquivos JSON existentes continuarão funcionando normalmente, mas agora também é possível usar:
- Comentários de linha (`//`)
- Comentários de bloco (`/* */`)
- Vírgulas finais em objetos e arrays

## Pacotes afetados

A dependência `jsonc-parser` foi adicionada aos seguintes pacotes:
- `@inlang/plugin-icu1`
- `@inlang/plugin-i18next`
- `@inlang/sdk`
