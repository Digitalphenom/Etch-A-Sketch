

// Etch-a-Sketch
const screen = document.querySelector('.screen');
const screenSize = 584;
let defaultInput = 16;
let gridDimension = (screenSize/defaultInput) -2;

const gridLayout = () => {        
    loadDefaultGrid()
    setDefaultGrid()
    const newGrid = document.querySelector('#newGridBtn');
    newGrid.addEventListener('click', userGridValues);
    
    function userGridValues(){
        
        let value = Number(prompt('enter',''));
        clearScreen();
        setUserGrid(value);
        gridDimension = (screenSize/value) - 2;
        loadUserGrid(value, gridDimension);   
    }
    // default grid inputs
    function setDefaultGrid() {
        
        screen.style.gridTemplateColumns = `repeat(${defaultInput}, 1fr)`;
    }

function loadDefaultGrid () {                
    for ( i = 0; i < defaultInput **2; i++) {
        div = document.createElement('div');
        div.classList.add('box1');
        screen.append(div);
        div.style.width = `${gridDimension}px`;
        div.style.height = `${gridDimension}px`;
    }
    
    function Click(e) {
        e.target.style.backgroundColor = '#023047';
    }

    function ClickHover(e) {
        if (e.buttons > 0) {
            e.target.style.backgroundColor = '#023047';
            
        }
    }
    function listenDefault() {
        grids = document.querySelectorAll('.box1');
        for (let i = 0; i < grids.length; i++) {
            grids[i].addEventListener('mousedown', Click);
            // listen for mouse over if mouse button press
            grids[i].addEventListener('mouseenter', ClickHover);
        }
        
    }
    
    listenDefault();
}
   // user grid inputs
function setUserGrid(defaultInput) {
        
    screen.style.gridTemplateColumns = `repeat(${defaultInput}, 1fr)`;
}

function loadUserGrid (defaultInput, gridDimension){ 
    for ( i = 0; i < defaultInput **2; i++) {
        div = document.createElement('div');
        div.classList.add('box1');
        screen.append(div);
        div.style.width = `${gridDimension}px`;
        div.style.height = `${gridDimension}px`;
    }
    
    function Click(e) {
        e.target.style.backgroundColor = '#023047';
    }
  
    function ClickHover(e) {
    if (e.buttons > 0) {
        e.target.style.backgroundColor = '#023047';   
    }   
}

function listenUser() {
    grids = document.querySelectorAll('.box1');
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mousedown', Click);
        // listen for mouse over if mouse button press
        grids[i].addEventListener('mouseenter', ClickHover);
    }
}
listenUser();
}
}
    // color options
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
    
    for ( i = 0; i < defaultInput **2; i++) {
        
        colorDiv = document.createElement('div');
        colorDiv.classList.add('box1');
        //mouse click
    function Click(e) {
            e.target.style.backgroundColor = randomColor();
}
        // mouse hold down
    function ClickHover(e) {
            if (e.buttons > 0) {
                e.target.style.backgroundColor = randomColor();
            }   
}
    function listen() {
            grids = document.querySelectorAll('.box1');
            for (let i = 0; i < grids.length; i++) {
                grids[i].addEventListener('mousedown', Click);
                // listen for mouse over change color if mouse button press
                grids[i].addEventListener('mouseenter', ClickHover);
    }   
}
    }
    listen();
});

    // clear methods 
function clearScreen() {
    const gridArray = Array.from(screen.childNodes);
    gridArray.forEach((element) => {
        screen.removeChild(element);
    });
}
const resetBtn = () => {
    
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', function(){
        location.reload();
    })

}
resetBtn()
gridLayout();


