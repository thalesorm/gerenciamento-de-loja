# Estrutura Inicial

<details>
	<summary>
		<strong>Criação  da aplicação</strong>
	</summary><br>

1. Com o  [Node.js](https://nodejs.org/pt-br)  instalado na versão superior a 16.0.0;
2. Utilize o comando abaixo para criar uma aplicação React com TypeScript usando o Vite:

```
npm create vite@latest
```

3. Perguntas serão respondidas conforme abaixo:

```
√ Project name: ... meu-app-react
√ Select a framework: » React
√ Select a variant: » TypeScript
```

Acima utilizei como exemplo de nome de aplicação "meu-app-react"
caso você já tenha criado um diretório antes, utilize no final do comando um ponto ( . ).
Exemplo:

```
npm create vite@latest .
```

4. Por fim, rode os seguintes comandos:

```
cd /meu-app-react
npm install
npm run dev
```

5. após o comando "npm run deve" o resultado em seu terminal deve ser algo parecido com:

```
  VITE v5.3.5  ready in 847 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

</details>

# EsLint:

<details>
	<summary>
		<strong>Instalando o Lint</strong>
	</summary><br>


1. No terminal da raiz do projeto execute o comando abaixo:

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks --save-dev
```

2. Instale o Prettier (opcional, mas recomendado para formatação consistente):

```
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

3. Crie um arquivo .eslintrc.cjs na raiz do seu projeto e adicione o seguinte conteúdo:

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
};
```

4. Se você decidiu usar o Prettier para formatação, crie um arquivo `.prettierrc` na raiz do seu projeto com a configuração desejada. Um exemplo básico é:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80
}
```

5. Adicione os scripts de lint e lint fix no seu `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src/**/*.{js,ts,tsx}",
    "lint:fix": "eslint src/**/*.{js,ts,tsx} --fix",
    "prettier": "prettier --write src/**/*.{js,ts,tsx,css,html}"
  }
}
```

6. Se houver arquivos ou diretórios que você não deseja que o ESLint analise, você pode criar um arquivo .eslintignore na raiz do projeto e adicionar os caminhos a serem ignorados. Exemplo:

```
node_modules/
dist/
public/
```

### Execução do ESLint:

1. Execute o ESLint para verificar problemas no código:

```
npm run lint
```

2. Execute o ESLint com o parâmetro `--fix` para corrigir problemas automaticamente, se possível:

```
npm run lint:fix
```

3. Se estiver usando Prettier, execute o comando para formatar o código:

```
npm run prettier
```

### Configuração opcional:

Se você estiver usando o Visual Studio Code, pode configurar o ESLint e o Prettier para que funcionem automaticamente. Instale as extensões "ESLint" e "Prettier - Code formatter" e adicione as seguintes configurações ao seu arquivo de configurações do VSCode (.vscode/settings.json):

```json
{
  "editor.codeActionsOnSave": true,
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "typescript", "typescriptreact"],
  "eslint.alwaysShowStatus": true,
  "prettier.requireConfig": true
}

```

</details>
