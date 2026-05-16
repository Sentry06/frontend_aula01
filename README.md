Depois de instalar o Git local no PC
Abrir a pasta com Git Bash Here
No Git fazemos:

Comandos:

## inicializar um repositorio git
- git init .

## download de repositorio remoto
git clone <link do repositorio>

git clone <https://github.com/Sentry06/backend_aula01.git>

## adicionando versionamento dos arquivos novos e envia para area de stage

## adicionar todos os arquivos para o git
git add .

## adicionar um arquivo específico
git add <index.html> (exemplo)

## para confirmar a adição ou alteração de arquivos, versionando as mudanças, persistindo a nivel local
git commit -m "o que voce deseja escrever"

## exemplos:
git commit -m "inicializar repositorio"

git commit -m "add file index.html"

git commit -m "remold javascript files"

## enviar para o repositório remoto
git push origin main/branch

git push -u origin main


## verificar momento do versionamento
git status

## para retirar os arquivos do add, sem ser commit, usamos:
git rm --cached <file>







