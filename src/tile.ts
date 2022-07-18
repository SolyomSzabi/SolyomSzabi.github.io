export class Tile{
    type:string;
    height:number=60;
    width:number=60;

    constructor(type:string){
        this.type=type;
    }
    getType():string{
        return this.type
    }
}