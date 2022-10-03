var gr = document.createElement("canvas");
gr.id = "graph";
gr.width = 600;
gr.height = 400;
document.body.appendChild(gr);

function draw(tel){
	var graph = document.getElementById("graph");
	graph.width = graph.width;
	var g = graph.getContext("2d");
    var fx = 80;
    var fy = 80;
	g.lineWidth = 8;
	g.lineCap = "round";
	g.strokeStyle = "#aa9174";

	g.beginPath();
	g.moveTo(fx,fy);
	g.lineTo(fx,fy+30);
	g.moveTo(fx+10,fy+40);	
	g.lineTo(fx + 90,fy + 40);
	g.moveTo(fx+100,fy+30);	
	g.lineTo(fx + 100,fy);
	g.stroke();
    g.beginPath();
	g.arc(10+fx,30+fy,10,Math.PI/2,Math.PI,false);
	g.stroke();
	g.beginPath();
	g.arc(90+fx,30+fy,10,0,Math.PI/2,false);
	g.stroke();

    g.beginPath();
    g.moveTo(fx+120,fy);
    g.lineTo(fx+120,fy+40);
    g.stroke();

    g.beginPath();
	g.moveTo(fx+140,fy+10);
	g.lineTo(fx+140,fy+40);
	g.moveTo(fx+150,fy);	
	g.lineTo(fx + 230,fy);
	g.moveTo(fx+240,fy+10);	
	g.lineTo(fx + 240,fy+40);
	g.stroke();
    g.beginPath();
	g.arc(150+fx,10+fy,10,Math.PI,Math.PI/2*3,false);
	g.stroke();
	g.beginPath();
	g.arc(230+fx,10+fy,10,0,-Math.PI/2,true);
	g.stroke();

	g.beginPath();
    g.moveTo(fx+260,fy);
    g.lineTo(fx+260,fy+40);
    g.stroke();

    g.beginPath();
	g.arc(285+fx,35+fy,2.5,0,Math.PI*2,true);
	g.stroke();
	
	g.beginPath();
    g.moveTo(fx+310,fy);
    g.lineTo(fx+310,fy+40);
    g.stroke();

    g.beginPath();
	g.moveTo(fx+330,fy+10);
	g.lineTo(fx+330,fy+40);
	g.moveTo(fx+340,fy);	
	g.lineTo(fx + 420,fy);
	g.moveTo(fx+430,fy+10);	
	g.lineTo(fx + 430,fy+40);
	g.stroke();
    g.beginPath();
	g.arc(340+fx,10+fy,10,Math.PI,Math.PI/2*3,false);
	g.stroke();
	g.beginPath();
	g.arc(420+fx,10+fy,10,0,-Math.PI/2,true);
	g.stroke();

	g.fillStyle = "#9a9e9b";
	g.font = "15px sans-serif";
	g.textAlign = "right";
	g.fillText("TEL : (086)"+tel,510,120+fy);
	g.fillText("E-mail : hi@public.email.cn",510,150+fy);	
}

function nt(){
	var x = 38 + 28,
	    y = 234 + 279,
	    z = 166 + 191;

	return ' 1' + x + ' 0' + y + ' 6' + z;
}

draw(" 000 0000 0000");

var gc = document.getElementById("graph");
gc.ondblclick = function(){
	draw(nt());
}