const num=[3,5,1,4,6,8];
console.log(num);
num.sort();
console.log(num);

const ages=[34,56,23,22,32,75];

const sort_ages=ages.sort(function(a,b){return a-b});
console.log(sort_ages);


const ages2=[1,12,34,56,76,4,54,32,3];
const ages_des=ages2.sort(function(a,b){return b-a});
console.log(ages_des);

