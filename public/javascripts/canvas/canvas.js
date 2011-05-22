/*-- Requesting --*/

$(document).ready(drawAllPieces());

function drawAllPieces(){

	$.getJSON(getPiecesUrl(),null,function(data,status){
		$.each(data,function(index,item){
			drawPiece(item.piece);
		})
	})
}

function getPiecesUrl(){
	var url = document.URL
	return url + (url.charAt(url.length-1) === '/'?'':'/') + "pieces"
}

/*-- Drawing --*/

function getActiveCanvas(){
	return $("#boardCanvas")[0];
}

function drawPiece(piece){
	switch (piece.type_of_shape){
		case "line":
			drawLinePiece(piece,getActiveCanvas());
			break;
		case "text":
			drawTextPiece(piece,getActiveCanvas());
			break;
		case "freehand":
			drawFreehandPiece(piece,getActiveCanvas());
			break;
		case "circle":
			drawCirclePiece(piece,getActiveCanvas());
			break;
		default:
			break;
	}
}

function drawLinePiece(p,canv){
	var ctx = canv.getContext('2d');
	var detail = eval("("+p.data+")");

	ctx.beginPath();
	ctx.moveTo(p.pos_x,p.pos_y);
	ctx.lineTo(detail.end_x,detail.end_y);
/* change line width*/
       ctx.lineWidth = detail.width;
/* change line color*/
       ctx.strokeStyle = detail.color;
	ctx.closePath();

	ctx.stroke();
}

function drawTextPiece(p,canv){
	var ctx = canv.getContext('2d');
	var detail = eval("("+p.data+")");

	ctx.font = detail.font;
	ctx.fillStyle  = detail.color;
	if( detail.shadow != null)
	{
		ctx.shadowOffsetX = detail.shadow.offset_X;
		ctx.shadowOffsetY = detail.shadow.offset_Y;
		ctx.shadowColor = detail.shadow.color!=null? detail.shadow.color:"#000000";
		ctx.shadowBlur = detail.shadow.blur;
	}

	ctx.fillText(detail.strings!=null? detail.strings:"", p.pos_x, p.pos_y, detail.width);
}

function drawFreehandPiece(p,canv){
	var ctx = canv.getContext('2d');
	var detail = eval("("+p.data+")");
	var pre_x = p.pos_x;
	var pre_y = p.pos_y;

	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.strokeStyle = detail.color;
	ctx.lineWidth = detail.width;
	if( detail.shadow != null)
	{
		ctx.shadowOffsetX = detail.shadow.offset_X;
		ctx.shadowOffsetY = detail.shadow.offset_Y;
		ctx.shadowColor = detail.shadow.color!=null? detail.shadow.color:"#000000";
		ctx.shadowBlur = detail.shadow.blur;
	}

	for (var i=0; i<detail.points.length; i++) {
		ctx.beginPath();
		ctx.moveTo(pre_x, pre_y);
		ctx.quadraticCurveTo( (pre_x+detail.points[i].x)/2, (pre_y+detail.points[i].y)/2, detail.points[i].x, detail.points[i].y);
		ctx.closePath();
		ctx.stroke();
		pre_x= detail.points[i].x;
		pre_y= detail.points[i].y;
	}
}


function drawCirclePiece(p,canv){
	var ctx = canv.getContext('2d');
	var detail = eval("("+p.data+")");

	//円の描写
	ctx.beginPath();
	ctx.strokeStyle = "#FFcc00";
	ctx.arc(p.pos_x, p.pos_y, detail.radius, 0, Math.PI * 2, false);
	ctx.stroke();
}

