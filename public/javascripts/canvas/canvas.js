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

	if( detail.shadow != null)
	{
		ctx.shadowColor = detail.shadow.color;
		ctx.shadowBlur = detail.shadow.blur;
		ctx.shadowOffsetX = detail.shadow.offset_X;
		ctx.shadowOffsetY = detail.shadow.offset_Y;
	}

	ctx.fillStyle  = detail.color;
	ctx.font = detail.font;
	ctx.fillText(detail.strings, p.pos_x, p.pos_y, null);
}
