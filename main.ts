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

// массивы
let array: string[]
array = ['s1', 's2', 's3']

const arr2:ReadonlyArray<number> = [0, 1, 2, 3] //неизменяемый массив
console.log(arr2[2])

// кортежи
type TypeArray = [number, string, null]
const newArr: TypeArray = [1, 's1', null]