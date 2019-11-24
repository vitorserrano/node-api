<p align="center">
  <img width="150" height="174" src="https://user-images.githubusercontent.com/51726945/69487282-e5391380-0e35-11ea-8f82-569186b851b0.png">
</p>

<h1 align="center">       
   Node-API 
</h1>

<h5 align="center">
  Repositório introdutório em Nodejs <br>
</h5>

  <h4 align="center">
    <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> |  
    <a href="#repositório">Repositório</a> |
    <a href="#importações">Importações</a> |              
    <a href="#anotações">Anotações</a>
  </h4>

<h2> 
 <br> Tecnologias Utilizadas  
 <ul>
 <br>
   <li><a href="https://www.docker.com/"> Docker</li> 
   <li><a href="https://insomnia.rest/"> Insomnia </li>
   <li><a href="https://nodejs.org/en/">Node</li>      
   <li><a href="https://robomongo.org/"> Robo 3T </li>      
 <ul>
</h2>

##  Repositório 
  - Este repositório é uma APIRest desenvolvida em NodeJs, com utilização de MongoDB como Banco de Dados, a partir do curso "Starter" distribuido pela Rocketseat. 
  
  - É possível realizar as operações de Listagem (Index), amostra de Detalhes (show), atualizaço de dados (update) e remoção de dados (destroy).


## Importações 
 - **Express** - Controle das Rotas.
 - **Nodemon** - Reinicialização automática do arquivo configurado/iniciado.
 - **Mongoose** - Ao inves de usar "insert, select, update e delete" o mongoose faz com que seja possível realizar essas operações via JavaScript, também transforma as tablelas em objsetos, para que fique extremamente simples as suas manipulações.
 - **Require-Dir** - Faz o require para todos os arquivos de um determinado diretório.
 - **Mongoose Paginte** - Faz a paginaço dos dados do Banco de Dados.
 - **Cors** - Permitir acesso de outros dominios.
   
## Anotações
 - Listagem de Imagens do Docker: ```docker ps```
 - Startar imagem do Docker: ```docker start "nomedaimagem"```
 - Setar url_base no Insomnia: 
 "No Environment" -> Manage Environments -> ```{ "base_url": "urldesejada"}```
 - Para abrir o Robo 3T no ubuntu: ```source ~/.bashrc``` em seguinda, ```robomongo``` 
  
    
