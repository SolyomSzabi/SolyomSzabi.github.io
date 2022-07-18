import { Tile } from "./tile";
export class Map {
    pattern: number[][];
    tiles:Tile[][];
    constructor(pattern: number[][]) {
        this.pattern = pattern;
        this.generateMap();
    }
generateMap():void{
    this.tiles=new Array(10).fill(0).map(() => new Array(10).fill(0).map(() => (new Tile('asd'))));

    for (let i:number=0;i<this.pattern.length;i++){
        for (let j:number=0;j<this.pattern.length;j++){
            if (this.pattern[j][i]===1){
                this.tiles[i][j]=new Tile('floor');
            } else {
                this.tiles[i][j]=new Tile('wall');
            }
        }
    }
}
}