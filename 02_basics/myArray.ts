// two ways to declare array in typescript

const superHeros:string[] =[]//Array of strings
superHeros.push('Ironman')

const heroPower:Array<number>=[]//Array of numbers
heroPower.push(100)


type User = {
    name:string,
    age:number  
}

const users:User[]=[] //Array of objects
users.push({name:"Samir",age:21})