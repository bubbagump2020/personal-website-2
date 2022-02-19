
export interface IJob{
    company:string
    position:string
    duration:string
    description:string
}

export interface ISchool{
    name:string
    attended:string
    degree:string
    description:string
}

export interface IProject {
    name:string
    technologies:Array<string>
    description:string
    github:string
}

export interface INav {
    path:string
    name:string
}

export interface ICert {
    title:string
    issuer:string
    license:string
    obtained:number
    link:string
}

export interface IAbility {
    name:string
    strength:string
}

export interface GenericType {
    keys: Array<string>
}