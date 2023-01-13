 const template = (manager, intern, engineer) => {
  return `<style>
header{
  height:100px;
  width:100%;
  background-color:pink;
}
header h1{
  color:white;
  height:100%;
  text-align:center;
}
main{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;

}
.card-header{
  background:blue;
  color:white;
  padding:15px;
}
</style>
<body>
 <header>
 <h1 class="team">My Team</h1>
 </header>
 <main >
 
 ${managerCard(manager)}
 ${internCard(intern)}
 ${engineerCard(engineer)}
 </main>
<body>
`;
};
function managerCard(manager) {
  return `
<div class="card">
   <div class="card-header">
    <p> ${manager.getName()}</p>
  <p>Manager</p>
  </div>
  <div class="card-body">
  <ul>
  <li>ID: ${manager.getId()}</li>
  <li>Email :<a href="mailTo:${manager.getEmail()}" >${manager.getEmail()}</a></li>
  <li>Office Number:${manager.getOfficeNumber()}</li>
  </ul>
  </div>
</div>
`;
}
function internCard(intern) {
  return `
  <div class="card">
   <div class="card-header">
    <p> ${intern.getName()}</p>
  <p>Intern</p>
  </div>
  <div class="card-body">
  <ul>
  <li>ID: ${intern.getId()}</li>
  <li>Email :<a href="mailTo:$intern{.getEmail()}" >${intern.getEmail()}</a></li>
  <li>School:${intern.getschool()}</li>
  </ul>
  </div>
</div>
`;
}

function engineerCard(engineer) {
  return `
  <div class="card">
     <div class="card-header">
      <p> ${engineer.getName()}</p>
    <p>Engineer</p>
    </div>
    <div class="card-body">
    <ul>
    <li>ID: ${engineer.getId()}</li>
    <li>Email :<a href="mailTo:${engineer.getEmail()}" >${engineer.getEmail()}</a></li>
    <li>Github:${engineer.getGithub()}</li>
    </ul>
    </div>
  </div>
  `;

}
module.exports = template;