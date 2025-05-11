/*
data types

number, string, boolean, object, undefined, unknown, void
*/

//imports
import { list } from "."

console.log(list)

// кастомные типы
type TypeUser = {
  name: string
  age: number
  address: string
}

let user1: TypeUser

user1 = {
  address: 'SPB',
  age: 24,
  name: 'rick'
}