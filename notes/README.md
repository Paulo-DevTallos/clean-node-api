## Pontos importantes

Para utilizar em "compilerOptions" a opção "target" é importante sempre verificar qual a versão do JavaScript é equivalente para ser executada
no servidor que hospedará sua aplicação.

## Configuração commit-linter

Para confugurar padrões de commits baseados em Conventional commits utilizamos a biblioteca:

- git-commit-msg-linter

```sh
 npm install -D git-commit-msg-linter
```

para configurar os commits no husky:

- Cria uma prepare executando o comando "husky install", esse comando gera um diretório com scripts que executam pre-commits
- Executar o comando: npx husky add .husky/pre-commit "npx lint-staged" & npx husky add .husky/commit-msg "adicionando para ele o path '.git/hooks/commit-msg '"

- Formas de commitar

- Utilizando o comando "git commit" ao realizar a verificação dos arquivos alterados ele irá abrir um editor para que a mensagem de commit seja inserida
- Utilzando a abordagem padrão do "git commit -m <commit-msg>"

## Realizando as configurações de lint da aplicação

## Observações sobre as execuções

- Como o Eslint vai sempre observar arquivos alterados dentro da pasta SRC ele sempre apontará um erro caso esse arquivo não seja adicionado ao commit. No nosso contexto isso ocorreu com o arquivo de testes unitários, pois o mesmo não foi adicionado ao commit e mesmo assim foi executado, visto que ele possui comandos de execução para o teste. Para resolver esse problema passamos para o script a flag --passWithNoTests. Isso fará que o arquivo seja aprovado pelo commiter sem que o teste precise ser executado pela primeira vez.

- Comandos para reiniciar o git: git rm -r --cached ., git add .

## Links importantes:

<a href="https://node.green/#ES2015">Doc versões do ECMAScript</a>
