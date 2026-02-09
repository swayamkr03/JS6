let user="admin";
let accessLevel;

if(user=="admin"){
    accessLevel="full";
}else if(user=="manager"){
    accessLevel="limited"
}else{
    accessLevel="No";
}

console.log("Access Level:",accessLevel)
