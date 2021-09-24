var color = "rgb(0, 0, 0)"

var canvas = document.getElementById('can'),
    ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height,
    x0,
    y0,
    x2,
    y2,
    x1,                 
    y1,
    r,
    isDown = false;     

/// мышь опущена   
canvas.onmousedown = function(e) {

    /// get corrected mouse position and store as first point
    var rect = canvas.getBoundingClientRect();
    x0 = e.clientX - rect.left;
    y0 = e.clientY - rect.top;
    isDown = true;
}

/// мышь "поднята"
canvas.onmouseup = function() {

    var radius = (Math.sqrt(Math.pow((x2-x0),2)+Math.pow((y2-y0),2)))/2
    console.log("X0 Y0", x0,y0)
    console.log("X2 Y2", x2,y2)
    console.log("r",radius)
    xA=yA=0
    xA= (x0+x2)/2
    yA=(y0+y2)/2
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(xA, yA, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    isDown = false;
}

/// движение мышкой
canvas.onmousemove = function(e) {

    if (!isDown) return;
    var rect = canvas.getBoundingClientRect();
    x1 = e.clientX - rect.left;
    y1 = e.clientY - rect.top;

    const fi = Math.atan2(y1-y0,x1-x0)/Math.PI*180
    if(fi == 45){
        console.log(fi)
        x2=x1
        y2=y1
    }
    
}
