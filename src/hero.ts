import { map } from "./index";
export class Hero {
    positionX: number;
    positionY: number;
    facingTo: string;
    height: number = 60;
    width: number = 60;

    constructor(positionX: number=0,positionY:number=0, facingTo: string = 'hero-down') {
        this.positionX = positionX;
        this.positionY = positionY;
        this.facingTo = facingTo;
    }
    moveUp(): void {
        if (1 <= this.positionY&&map.tiles[this.positionX][this.positionY-1].getType()==='floor') {
            this.positionY --;
        }
        this.facingTo = 'hero-up';
    }
    moveDown(): void {
        if (this.positionY <= 8&&map.tiles[this.positionX][this.positionY+1].getType()==='floor') {
            this.positionY ++;
        }
        this.facingTo = 'hero-down';
    }
    moveLeft(): void {
        if (1 <= this.positionX&&map.tiles[this.positionX-1][this.positionY].getType()==='floor') {
            this.positionX --;
        }
        this.facingTo = 'hero-left';
    }
    moveRight(): void {
        if (this.positionX <= 8&&map.tiles[this.positionX+1][this.positionY].getType()==='floor') {
            this.positionX ++;
        }
        this.facingTo = 'hero-right';
    }
}
