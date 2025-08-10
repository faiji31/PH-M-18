const employee = [{name:"liam", Designation:"Student"},
    {name:"Mustaq", Designation:"devloper"},
    {name:"tasfiq",Designation:"Kuwait probashi"}];
// console.log(employee[1]);
console.log(employee.name);


for (i of employee){
    console.log(i.name, i.Designation);
}