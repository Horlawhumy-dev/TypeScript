
interface UserInterface2 {
    getFullName(): str;
}
// // custom type in tsc
// type str = string
// type num = number
// type bool = boolean

// class in typescript
class User implements UserInterface2 {
    firstName: str
    lastName: str
    readonly middleName: str

    constructor(firstName: str, lastName: str, middleName: str){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }

    getFullName(): str {
        return `Fullname is ${this.firstName}, ${this.middleName} ${this.lastName}`
    }

    changeFirstname(): void {
        this.firstName = this.lastName
    }

}
// Inheritance in tsc
// class in typescript
class Admin extends User {
   private  static editor: str

    setEditor(editor: str):void {
        Admin.editor = editor
    }

    getEditor(): str{
        return Admin.editor
    }
}


const user = new User('Arafat', 'Olayiwola','Olawumi')

const admin = new Admin("Foo", "Bar", "Doe")
console.log(user.getFullName())
console.log(user.changeFirstname())
console.log(user.getFullName())
console.log(admin.setEditor('White'))
console.log(admin.getEditor())
