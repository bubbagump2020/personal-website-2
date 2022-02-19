export class Job{
    private _company!:string;
    private _position!:string;
    private _duration!:string;
    private _description!:string;

    constructor(company: string, position: string, duration: string, description: string) {
        this._company = company;
        this._position = position;
        this._duration = duration;
        this._description = description;
    }

    get company(): string {
        return this._company;
    }

    set company(value: string) {
        this._company = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }

    get duration(): string {
        return this._duration;
    }

    set duration(value: string) {
        this._duration = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}

export class School{
    private _name!:string;
    private _attended!:string;
    private _degree!:string;
    private _description!:string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get attended(): string {
        return this._attended;
    }

    set attended(value: string) {
        this._attended = value;
    }

    get degree(): string {
        return this._degree;
    }

    set degree(value: string) {
        this._degree = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    constructor(name: string, attended: string, degree: string, description: string) {
        this._name = name;
        this._attended = attended;
        this._degree = degree;
        this._description = description;
    }

}

export class Project{
    private _name!:string;
    private _technologies!:Array<string>;
    private _description!:string;
    private _github!:string;

    constructor(name: string, technologies: Array<string>, description: string, github: string) {
        this._name = name;
        this._technologies = technologies;
        this._description = description;
        this._github = github;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get technologies(): Array<string> {
        return this._technologies;
    }

    set technologies(value: Array<string>) {
        this._technologies = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get github(): string {
        return this._github;
    }

    set github(value: string) {
        this._github = value;
    }
}

export class Nav{
    private _path!:string;
    private _name!:string;

    constructor(path: string, name: string) {
        this._path = path;
        this._name = name;
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

export class Cert{
    private _title!:string;
    private _issuer!:string;
    private _license!:string;
    private _obtained!:string;
    private _link!:string;

    constructor(title: string, issuer: string, license: string, obtained: string, link: string) {
        this._title = title;
        this._issuer = issuer;
        this._license = license;
        this._obtained = obtained;
        this._link = link;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get issuer(): string {
        return this._issuer;
    }

    set issuer(value: string) {
        this._issuer = value;
    }

    get license(): string {
        return this._license;
    }

    set license(value: string) {
        this._license = value;
    }

    get obtained(): string {
        return this._obtained;
    }

    set obtained(value: string) {
        this._obtained = value;
    }

    get link(): string {
        return this._link;
    }

    set link(value: string) {
        this._link = value;
    }
}

export class Ability{
    private _name!:string;
    private _strength!:string;

    constructor(name: string, strength: string) {
        this._name = name;
        this._strength = strength;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get strength(): string {
        return this._strength;
    }

    set strength(value: string) {
        this._strength = value;
    }
}