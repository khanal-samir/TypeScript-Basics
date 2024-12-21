let score:number | string = 50;
score = 'fifty';
score = 50;
// score=false; // Error: Type 'false' is not assignable to type 'string | number'.

type User = {
    name:string
    id:number
}

type Admin = {
    name:string
    id:number
    role:string
}

let user1 :User | Admin = {
    name:'John',
    id:1
}
// can be redefined to another role
user1= {
    name:"samir",
    id:1,
    role:"Admin"
}

function getDb(id:string | number){
    if(id==="string") id.toLocaleLowerCase()

    console.log(`id is ${id}`);  

}
getDb(3)
getDb("3")
// getDb(true


const myArr:string[]|number[]=[12,44,]// either number only array or string only array
const myArr2:(string | number)[]=[12,44,"Sm"]// now accepts both values

type newArr = string | number
const arr:newArr[]=[1,2,3,"Samir","khanal"]// can add both types of values

let aeroSeat : "aisle" | "middle" | "window"
 aeroSeat="aisle"
//  aeroSeat= "crew" only three values accepted