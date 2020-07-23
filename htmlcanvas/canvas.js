window.addEventListener("load",()=>{
    

    const canvas = document.querySelector('canvas');
    var co=canvas.getContext('2d');

    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;

    let painting = false;

    function startPosition(e){
        painting=true;
        drawPencil(e);
    }

    function endfinish(){
        painting=false;
        co.beginPath();
        
    }
    function drawPencil(e){
        if(!painting) return; 
        co.lineWidth=10;
        co.lineCap="round";
        co.lineTo(e.clientX,e.clientY);
        co.stroke();
        co.beginPath();
        co.moveTo(e.clientX,e.clientY);
        co.save();
       
    }
    
    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",endfinish);
    canvas.addEventListener("mousemove",drawPencil);






});


