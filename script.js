
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
    
    box1.forEach(box => {
        
        const mouseOver = () => {
            box.addEventListener('mouseover', e => {
                e.target.classList.add('box2')
            });
        }
        mouseOver();
    });
    const resetBtn = () => {

        const resetBtn = document.querySelector('#reset');
        resetBtn.addEventListener('click', function(){
            location.reload();
        })
    }
    resetBtn()
}
gridX(userInput);


const colorBtn = document.querySelector('#colorBtn')
    colorBtn.addEventListener('click', () => {
        
        let box1 = document.querySelectorAll('.box1');
    
        function randomColor(){
        const colors = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'purple',
            'violet'
        ]
        let randomColor = Math.floor(Math.random() * colors.length)
        let colorPicker = colors[randomColor]
        return colorPicker;
    }
    
    box1.forEach(box => {    
        const colorBtn = () => {
            box.addEventListener('mouseover', e => {
                box.style.backgroundColor = randomColor()
                // console.log(randomColor())
            // box.style.backgroundColor = "colorPicker"
            })
        }
        colorBtn();
     });

    })
