// Etch-a-Sketch


const screen = document.querySelector('.screen');

let userInput =16;
let div = ""
let div2 = ""

const gridX = (userInput) => {
    
    screen.style.gridTemplateColumns = `repeat(${userInput}, auto)`;
    screen.style.gridTemplaterows = `repeat(${userInput}, auto)`;
    for ( i = 0; i < userInput **2; i++) {
        
        div = document.createElement('div');
        div.classList.add('box1');
        screen.append(div);        
    }
    let box1 = document.querySelectorAll('.box1');
    let box2 = document.querySelectorAll('.box2')

    box1.forEach(box => {
        
        const mouseOver = () => {
            box.addEventListener('mouseover', e => {
                e.target.classList.add('box2')
                console.log('on')
                // console.log('hui')
            });
        }
        // const mouseOut = () => {
        //     box.addEventListener('mouseout', e => {
        //         e.target.classList.add('box1')
        //         console.log('off')
        //         // console.log('hui')
        //     });
        // }
        mouseOver();
        // mouseOut();
     });
    
}
gridX(userInput);


