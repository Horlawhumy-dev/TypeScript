// generics interface in tsc

// This allows the interface to have multiple differents data types
interface UserInterface3 <T, V> {
    name: string,
    data: T,
    prop: V
}

const object = (obj) => {
    const id = Math.floor(Math.random()*10000).toString(16)
    return {
        ...obj,
        id
    }
}


const user3: UserInterface3 <{}, any[]> = {
    name: "Arafat",
    data: {
        meta: [1,2,3,4]
    },
    prop: ['foo', 2, true]
}
// console.log(object(user3))
// console.log(user3)


function firstElement<Type>(arr: Type[]){
    return arr[0]
}

const s = firstElement([true, 2, 'c'])
// console.log(typeof s)

function firstElement2<Type>(arr2: Type[]){
    return arr2[0]
}
// firstElement2 ahs type of Type
// But having instatiated, it has type of string | number like below

const a = firstElement2([1, 'a'])
// console.log(typeof a)


function filter1<Type>(arr: Type[], func: (arg: Type) => boolean){
    return arr.filter(func)
}

// console.log(filter1([1, 2, 3, 4, 'a'], (n) => n > 2));

function myForEach<Type>(arr: Type[], callback: (arg: any, index?: number) => void){
    for(let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i], i);
    }
}

myForEach([1, 2, 3, 5], (a, i) => console.log(a, i));


