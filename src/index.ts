import { Hero } from "./hero";
import { Map } from "./map";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const floor = document.getElementById('floor') as HTMLImageElement;
const wall = document.getElementById('wall') as HTMLImageElement;

const pattern: number[][] = [
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 1, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1, 2, 2, 1, 1, 1]
]

export const map = new Map(pattern)
const HERO = new Hero();
drawMap();
setTimeout(function () {
    drawHero();
}, 100)


document.body.addEventListener('keydown', onKeyPress);
function onKeyPress(event: any) {

    switch (event.keyCode) {
        case 37:
            drawMap();
            HERO.moveLeft();
            drawHero();
            break;
        case 38:
            drawMap();
            HERO.moveUp();
            drawHero();
            break;
        case 39:
            drawMap();

            HERO.moveRight();
            drawHero();
            break;
        case 40:
            drawMap();
            HERO.moveDown();
            drawHero();
            break;
    }
}

function drawHero() {
    const hero = document.getElementById(`${HERO.facingTo}`) as HTMLImageElement;
    ctx.drawImage(hero, 60 * HERO.positionX, 60 * HERO.positionY, HERO.width, HERO.height);
    console.log(HERO)
}

function drawMap(){
    for (let i: number = 0; i < map.tiles.length; i++) {
        for (let j: number = 0; j < map.tiles.length; j++) {
            const tile = document.getElementById(`${map.tiles[i][j].getType()}`) as HTMLImageElement;
            ctx.drawImage(tile, 60 * i, 60 * j);
        }
    }
    }

