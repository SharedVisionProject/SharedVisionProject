
/*-- Requesting --*/

$(document).ready(drawAllPieces());

function drawAllPieces(){
	
	$.getJSON("/pieces",null,function(data,status){
		$.each(data,function(index,item){
			drawPiece(item.piece);
		})
	})	
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
	ctx.closePath();
	
	ctx.stroke();
}
