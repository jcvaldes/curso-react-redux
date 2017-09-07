export default class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }
  toString() {
    return `Persona ${this.nombre}`
  }
}