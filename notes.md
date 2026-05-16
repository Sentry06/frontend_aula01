COMANDOS:


## inicializar um repositorio git local
git init .

## download de repositorio remoto
git clone <link>

git clone https://github.com/allanandradeprofessor/backend_aula01.git

# Enviar codigos para repositorio remoto

## adicionando versionamento dos arquivos novos e envia para area de stage
git add .

git add index.html

git add <arquivo>

## persisto a mudança a nivel local

git commit -m 'inicializar repositorio'


git commit -m 'add file index.html'

git commit -m 'remold javascript files'


## Enviar para o repositorio remoto

git push origin main/branch


## verificar momento do versionamento

git status