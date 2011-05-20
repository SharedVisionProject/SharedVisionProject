
function checkTypeofShape( typeofshape )
{
	makeShapePropertiesForm(typeofshape);
    setMouseEvent(typeofshape);
}

//“ü—ÍIF(‰¼)
function makeShapePropertiesForm( typeofshape )
{
	var form = document.ShapeProperties;
	var i_width   = document.createElement( "input" );
    var i_color   = document.createElement( "input" );
    var i_strings = document.createElement( "input" );
    var i_font    = document.createElement( "input" );
    var i_shadow  = document.createElement( "input" );
    var i_points  = document.createElement( "input" );

    for (var i =form.childNodes.length-1; i>=0; i--) {
    	form.removeChild(form.childNodes[i]);
    }

	switch (typeofshape) {
	case "line":
		i_width.setAttribute( "type" , "text" );
		i_width.setAttribute( "name" , "width" );
		i_width.setAttribute( "value" , "1" );
	    form.appendChild( i_width );

	    i_color.setAttribute( "type" , "text" );
	    i_color.setAttribute( "name" , "color" );
	    i_color.setAttribute( "value" , "#00FF00" );
	    form.appendChild( i_color );

		break;
	case "text":
		i_strings.setAttribute( "type" , "text" );
		i_strings.setAttribute( "name" , "strings" );
		i_strings.setAttribute( "value" , "text" );
	    form.appendChild( i_strings );

	    i_color.setAttribute( "type" , "text" );
	    i_color.setAttribute( "name" , "color" );
	    i_color.setAttribute( "value" , "#00FF00" );
	    form.appendChild( i_color );

	    i_font.setAttribute( "type" , "text" );
	    i_font.setAttribute( "name" , "font" );
	    i_font.setAttribute( "value" , "18px'MonotypeCorsiva'" );
	    form.appendChild( i_font );

	    i_shadow.setAttribute( "type" , "checkbox" );
	    i_shadow.setAttribute( "name" , "shadow" );
	    i_shadow.setAttribute( "onclick" , "createShadowForm()" );
	    form.appendChild( i_shadow );

		break;
	case "freehand":
		i_width.setAttribute( "type" , "text" );
		i_width.setAttribute( "name" , "width" );
		i_width.setAttribute( "value" , "1" );
	    form.appendChild( i_width );

	    i_color.setAttribute( "type" , "text" );
	    i_color.setAttribute( "name" , "color" );
	    i_color.setAttribute( "value" , "#00FF00" );
	    form.appendChild( i_color );

	    i_shadow.setAttribute( "type" , "checkbox" );
	    i_shadow.setAttribute( "name" , "shadow" );
	    i_shadow.setAttribute( "onclick" , "createShadowForm()" );
	    form.appendChild( i_shadow );
		break;

	default:
		break;
	}
}

function createShadowForm( )
{
	var form = document.ShapeProperties;

	var i_offsetX = document.createElement( "input" );
    var i_offsetY = document.createElement( "input" );
    var i_s_color = document.createElement( "input" );
    var i_blur = document.createElement( "input" );

    document.ShapeProperties.shadow.value="checked";

    i_offsetX.setAttribute( "type" , "text" );
    i_offsetX.setAttribute( "name" , "offset_X" );
    i_offsetX.setAttribute( "value" , "offset_X" );
    form.appendChild( i_offsetX );

    i_offsetY.setAttribute( "type" , "text" );
    i_offsetY.setAttribute( "name" , "offset_Y" );
    i_offsetY.setAttribute( "value" , "offset_Y" );
    form.appendChild( i_offsetY );

    i_s_color.setAttribute( "type" , "text" );
    i_s_color.setAttribute( "name" , "s_color" );
    i_s_color.setAttribute( "value" , "#00FF00" );
    form.appendChild( i_s_color );

    i_blur.setAttribute( "type" , "text" );
    i_blur.setAttribute( "name" , "blur" );
    i_blur.setAttribute( "value" , "blur" );
    form.appendChild( i_blur );
}


