function setup() {
    createCanvas(400, 400)


}
let x: number = 0
let direction: number = +3

function draw(){
background("black")

x = x + direction
if (x >=width){
    direction = -3
}else if (x <=0){
    direction= +3
}
circle(x, height / 2, 50)
}