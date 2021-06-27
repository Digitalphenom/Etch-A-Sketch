

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
        function Click(e) {
            e.target.style.backgroundColor = div2;
           
      }
    //   mouse held down
      function ClickHover(e) {
        if (e.buttons > 0) {
              e.target.style.backgroundColor = '#023047';
            
        }
    
      }
      function listen() {
        grids = document.querySelectorAll('.box1');
        for (let i = 0; i < grids.length; i++) {
          grids[i].addEventListener('mousedown', Click);
          // listen for a mouse over if mouse button is pressed
          grids[i].addEventListener('mouseenter', ClickHover);
        }
    
      }
      
      listen();
    }

    const resetBtn = () => {

        const resetBtn = document.querySelector('#reset');
        resetBtn.addEventListener('click', function(){
            location.reload();
        })
    }
    resetBtn()
}
  
        function randomColor(){
        const colors = [
            '#4cc9f0',
            '#4895ef',
            '#4361ee',
            '#3f37c9',
            '#3a0ca3',
            '#480ca8',
            '#560bad',
            '#7209b7',
            '#b5179e',
            '#f72585'
            
        ]
        let randomColor = Math.floor(Math.random() * colors.length)
        let colorPicker = colors[randomColor]
        return colorPicker;
    }

const colorBtn = document.querySelector('#colorBtn')

    colorBtn.addEventListener('click', () => {

    for ( i = 0; i < userInput **2; i++) {
        
    colorDiv = document.createElement('div');
    colorDiv.classList.add('box1');
    //mouse click
    function Click(e) {
        e.target.style.backgroundColor = randomColor();
  }
  // mouse held down
  function ClickHover(e) {
    if (e.buttons > 0) {
          e.target.style.backgroundColor = randomColor();
    }

  }
  function listen() {
    grids = document.querySelectorAll('.box1');
    for (let i = 0; i < grids.length; i++) {
      grids[i].addEventListener('mousedown', Click);
      // listen for a mouse over and change colour only if mouse button is pressed
      grids[i].addEventListener('mouseenter', ClickHover);
    }
  
  }

  
}
listen();
});
gridX(userInput);


