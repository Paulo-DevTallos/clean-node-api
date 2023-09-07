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
- Implementar CI para testes

- Uma abordagem importante relacionada a variavel "sut" para injeção de dependencias e mocks é mover a criação do sut para uma factory
  const makeSut = (): SignUpController => {
  return new SignUpController();
  };

O benefício dessa abordagem está em garantir que ao adicionar novas dependencias essa alteração não precisará ser alterada em todos os construtores de todos os testes.

- Stub é um tipo de mock que marreta um valor que sempre vai retornar a mesma coisa
- Uma Observação a cerca de mocks para testar falso positivo com mocks. Uma boa pratica é que todo teste em casos booleanos sejam true por padrão, com isso caso você precise chekar um dado como false por padrão, ao aplicar o stub é necessário retornar a especificação do seu valor onde você deseja fazer essa chekagem, ou seja, é preciso realizar um mock ao contrário.
  Ex:

  Cria-se uma interface que estabelece tipos de retorno que a interface irá receber com isso a instancia da classe principal receberá o tipo de acordo com a interface para gerir suas instancias:

  interface SutTypes {
  sut: SignUpController;
  emailValidatorStub: EmailValidator;
  }

const makeSut = (): SutTypes => {
class EmailValidatorStub implements EmailValidator {
isValid(email: string): boolean {
console.log(email);
return true;
}
}

const emailValidatorStub = new EmailValidatorStub();
const sut = new SignUpController(emailValidatorStub);

return {
sut,
emailValidatorStub,
};
};

Como o retorno é do tipo SutTypes os demais testes que utilizam essa variavel passam a receber um objeto { sut }

- Dica: Em caso de erros por parte do client, é importante categorizar erros que deixem ele ciente de algum erro que ele tenha cometido
- Em caso de erros do servidor ou algo mais interno voce pode aplicar uma mensagem mais generica

## Links importantes:

<a href="https://node.green/#ES2015">Doc versões do ECMAScript</a>
