function setup() {
    createCanvas(400, 400)

const text1: string = `hello`
const text2: string = `world`

let text3 = `${text1} ${text2}`
text3 = `${text3}!`
text(text3, 50, 50)


const longtext= `Das ist langeeeeeeer texthhhhhhhhhhhhhhhwwwwwwwwiiiiihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`
text(longtext, 0, 200, 400, 400)

}
