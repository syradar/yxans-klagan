import { nanoid } from 'nanoid'

/** Used by Flavor to mark a type in a readable way. */
interface Flavoring<FlavorT> {
  _type?: FlavorT
}
/** Create a "flavored" version of a type. TypeScript will disallow mixing flavors, but will allow unflavored values of that type to be passed in where a flavored version is expected. This is a less restrictive form of branding. */
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>

/** Used by Brand to mark a type in a readable way. */
interface Branding<BrandT> {
  _type: BrandT
}
/** Create a "branded" version of a type. TypeScript won't allow implicit conversion to this type */
export type Brand<T, BrandT> = T & Branding<BrandT>

export type ID = Brand<string, 'ID'>
export type Unique = {
  id: ID
}

export const getId = (): ID => nanoid() as ID

export type CollapseAble = {
  collapse: boolean
}
