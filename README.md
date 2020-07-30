Arquivo para testes durante as aulas.

Como funciona o Git.

git add file name com extension

git commit -m "descricao"

git checkout para voltar ao estado anterior caso o novo file tenha algum erro

git log

git status

#Gerar chave para ssh
https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


git push -u origin master 
caso deia erro na primeira tentativa, seguir os passos abaixo:

Siga as etapas abaixo, pois também tive o mesmo problema:

$ git pull origin master --allow-unrelated-histories 
(Para ver se a filial local pode ser facilmente mesclada com a remota)

$ git push -u origin master 
(Agora, envie o conteúdo inteiro do repositório git local para o seu repositório online)
