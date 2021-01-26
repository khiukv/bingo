//This function was not created by me. I just finalized and edited it to fit my needs.
function matrix() {

  let c = document.getElementById("c");
  let ctx = c.getContext("2d");
  
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  window.onresize = function() {
    c.height = window.innerHeight;
    c.width = window.innerWidth;
  }
  
  let numbers = "0101010101000001001010101";
  numbers = numbers.split("");
  
  let font_size = 10;
  let columns = c.width/font_size;

  let drops = [];
 
  for(let x = 0; x < columns; x++)
    drops[x] = 1; 
  
  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
    for(let i = 0; i < drops.length; i++) {
      let text = numbers[Math.floor(Math.random()*numbers.length)];
      ctx.fillText(text, i*font_size, drops[i]*font_size);
      if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;
        drops[i]++;
    }
  }
  
  let matrixInterval = setInterval(draw, 20);

  function canvasNone() {
    clearInterval(matrixInterval);
    document.querySelector('#c').style.display = 'none';
  }

  c.addEventListener('click', canvasNone);
}

export default matrix;