var gr = document.createElement("canvas");
gr.id = "graph";
gr.width = 800;
gr.height = 800;
document.body.appendChild(gr);

var graph = document.getElementById("graph");

graph.onclick = function(){
	document.location = "index.html";
}

graph.width = graph.width;

var rc = function(){
	return Math.floor(Math.random()*256);
}

var rp = function(){
	return Math.floor(Math.random()*801);
}

var rr = function(){
	return Math.floor(Math.random()*100);
}

var g = graph.getContext("2d");

g.fillStyle = "rgb("+rc()+","+rc()+","+rc()+")";
g.fillRect(0,0,800,800);

for(var i=0;i<256;i++){
	g.fillStyle = "rgb("+rc()+","+rc()+","+rc()+")";
	g.fillRect(rp(),rp(),rr(),rr());
}