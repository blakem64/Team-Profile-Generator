export const template = (manager, intern) => {
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
function internCard(intern) {}

function engineerCard(engineer) {}