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
type TypeAddress = {
  city: string
  country: string
}

let user1: TypeUser
let address1: TypeAddress
address1 = {
  city: 'SPB',
  country: 'Russia'
}
user1 = {
	age: 24,
	name: 'rick',
}
// spread
let common: TypeAddress & TypeAddress
common = {
  ...user1,
  ...address1
}