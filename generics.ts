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
console.log(object(user3))
console.log(user3)