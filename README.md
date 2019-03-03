# imc-calculator App

Esse aplicativo foi desenvolvido para validar alguns conhecimentos, sendo apenas um aplicativo de teste. O mesmo não pode funcionar sem que sua [API](https://github.com/1fabiopereira/dotnet-imc-api) esteja em execução.

## Intalação

Para fazer a instalação desse código basta executar o seguinte comando:

`git clone https://github.com/1fabiopereira/ionic-imc-calculator.git`

Assim que o download terminar vá para dentro do diretório e execute:

`npm i`

Aguarde a conclusão do comando, se estiver com o ambiente devidamente configurado basta seguir para a sessão *Execução*.

## Execução

Para iniciar o aplicativo em modo teste basta abrir um terminal e executar:

`ionic serve`

Após isso o navegador deve se abrir com as telas do aplicativo, lembrando mais uma vez, para que as funcionalidades do app sejam executadas é necessário que sua [API](https://github.com/1fabiopereira/dotnet-imc-api) esteja em execução.

## Ambiente

O aplicativo foi desenvolvido no seguinte ambiente, para garantir o correto funcionamento de todas as funcionalidades certifique-se de estar utilizando as mesmas configurações do *Ionic* do *Cordova* e do *NodeJS*.

```
Ionic:

   ionic (Ionic CLI)             : 4.10.3 (/usr/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 4.0.1
   @angular-devkit/build-angular : 0.12.4
   @angular-devkit/schematics    : 7.2.4
   @angular/cli                  : 7.2.4
   @ionic/angular-toolkit        : 1.4.0

Cordova:

   cordova (Cordova CLI) : 8.1.2 (cordova-lib@8.1.1)
   Cordova Platforms     : android 6.4.0
   Cordova Plugins       : cordova-plugin-ionic-keyboard 2.1.3 cordova-plugin-ionic-webview 3.1.2, (and 4 other plugins)

System:

   Android SDK Tools : 26.1.1 (/home/fabio/Android/Sdk)
   NodeJS            : v8.15.0 (/usr/bin/node)
   npm               : 6.4.1
   OS                : Linux 4.15
```