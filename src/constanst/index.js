export const MARCAS=[
    {id:1,marca:'Europeo'},
    {id:2,marca:'Americano'},
    {id:3,marca:'Asiatico'}
]

const actual_year= new Date().getFullYear()
export const AÑOS_SEGURO=Array.from(new Array(30),(_,index)=>actual_year-index)

export const PLANES=[
    {id:1,plan:'Básico'},
    {id:2,plan:'Americano'}
]