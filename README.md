

<h1 align="center">
    <a href="">🔗 Projeto Trutec Leads Auth - Back-End</a>
</h1>
<p align="center">🚀 Authenticação Leads Api</p>

<img src="https://trutec.com.br/wp-content/themes/theme_trutec/img/logo.svg"/>

<h4 align="center"> 
   Tecnologias Usadas
</h4>

<p> - Node </p>
<p> - Express </p>
<p> - Typescript </p>
<p> - MongoDb </p>
<p> - TypeOrm </p>
<p> - dotenv </p>
<p> - SES </p>
<p> - bcrypt, jsonwebtoken </p>

# Menu
<br>
<p align="center">
 <a href="#arquitetura">Arquitetura</a> •
<a href="#env">.env</a> • 
 <a href="#instalacao">Instalação</a> •
 <a href="#routes">Routes</a> • 
 <a href="#config">Config</a> • 
 <a href="#postman">Postman</a> •
 <a href="#bancodedadosexemplo">Banco de dados exemplo</a> •
</p>

# Arquitetura
<br>
<div id="arquitetura">

<p><b>Entities:</b> contém nossas entidades de banco de dados . </p>
<p><b>Repositories:</b> contém nossas classes de acesso ao banco de dados .  </p>
<p><b>UseCases:</b> Eles são responsáveis ​​por atender ao que os controladores REST precisam, acessando diferentes repositórios  </p>
<p><b>Controladores:</b>ontém nossos controladores REST . Eles são responsáveis ​​por mediar a comunicação entre o usuário e os UseCases. Eles recebem solicitações e retornam respostas.  </p>

</div>

# .Env
<br>

<div id="env">
Adicione o arquivo <b>.env</b> como descrito acima.

🚧   O arquivo .env tem um modelo em env.exemplo , caso não tenha pedir alguem que tenha na equipe.   🚧

</div>

# Instalação
<br>
<div id="instalacao">

Execute o codigo abaixo abaixo;

```bash
npm install ou yarn ou yarn install
```
</div>

# Routes

<br>
<div id="routes">

Existem as Rotas principais dentro de routes/index

As rotas filhas:

```bash
 routes.***.ts
```
</div>

# Config
<br>
<div id="config">

<p><b>errors:</b> Aqui sera colocar uma padronização dos erros. </p>
<p><b>events:</b> Todas aplicações que será necessario ter uma ação em um determinado dia ou em um intervalo de tempo sera colocados em events. </p>
<p><b>helpers:</b> Metodos que serão replicados por toda aplicação. </p>

</div>

# Postmam 

<br>

<div id="postman">

  Caso precise existe postman.

</div>

# Banco de dados Exemplo 

<br>

<div id="bancodedadosexemplo">

 Dados restritos deve-se pedir alguam que tenha acesso.

</div>




<h4 align="center"> 
	🚧   Não esqueça de inserir arquivo .env e executar npm install no terminal   🚧
</h4>