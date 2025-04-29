var personDescription1 = (name: string, city: string, age: number) =>
    `${name} lives in ${city}, his age is ${age}. In 10 he'll be ${age+10}`

console.log(personDescription1("kostas", "athens", 20));