// CSS Properties
// Based on Larry Battle code (http://bateru.com/news/2011/03/css-reference-in-json/)

var css = {
	"legend": {
		"propList": ["background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-color", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-style", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-width", "outline", "outline-color", "outline-style", "outline-width", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-radius", "border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "box-shadow", "overflow-x", "overflow-y", "overflow-style", "rotation", "rotation-point", "opacity", "height", "width", "max-height", "max-width", "min-height", "min-width", "box-align", "box-direction", "box-flex", "box-flex-group", "box-lines", "box-ordinal-group", "box-orient", "box-pack", "font", "font-family", "font-size", "font-style", "font-variant", "font-weight", "font-size-adjust", "font-stretch", "content", "counter-increment", "counter-reset", "quotes", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "column-count", "column-fill", "column-gap", "column-rule", "column-color", "column-style", "column-width", "column-span", "columns", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "bottom", "clear", "clip", "cursor", "display", "float", "left", "overflow", "position", "right", "top", "visibility", "z-index", "orphans", "page-break-after", "page-break-before", "page-break-inside", "widows", "border-collapse", "border-spacing", "caption-side", "empty-cells", "table-layout", "color", "direction", "letter-spacing", "line-height", "text-align", "text-decoration", "text-indent", "text-transform", "unicode-bidi", "vertical-align", "white-space", "word-spacing", "hanging-punctuation", "punctuation-trim", "text-justify", "text-overflow", "text-shadow", "text-wrap", "word-break", "word-wrap"],
		"categoryList": ["Background Properties", "Border and Outline Properties", "Box Properties", "Color Properties", "Dimension Properties", "Flexible Box Properties", "Font Properties", "Generated Content Properties", "List Properties", "Margin Properties", "Multi-column Properties", "Padding Properties", "Positioning Properties", "Print Properties", "Table Properties", "Text Properties"],
		"unitType": {
			"Color" : ["Color name", "Hex: # + ( 0 - FFFFFF )", "RGB: rgb( *number, *number, *number )"],
			"FontFamily": ["Arial, Helvetica, sans-serif", "'Arial Black', Gadget, sans-serif", "'Bookman Old Style', serif", "'Comic Sans MS', cursive", "Courier, monospace", "'Courier New', Courier, monospace", "Garamond, serif", "Georgia, serif", "Impact, Charcoal, sans-serif", "'Lucida Console', Monaco, monospace", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "'MS Sans Serif', Geneva, sans-serif", "'MS Serif', 'New York', sans-serif", "'Palatino Linotype', 'Book Antiqua', Palatino, serif", "Symbol, sans-serif", "Tahoma, Geneva, sans-serif", "'Times New Roman', Times, serif", "'Trebuchet MS', Helvetica, sans-serif", "Verdana, Geneva, sans-serif", "Webdings, sans-serif", "Wingdings, 'Zapf Dingbats', sans-serif" ],
			"Number": "number",
			"Length": ["cm","em","in","pt","px"],
			"Rect": "rect( *Position, *Position, *Position, *Position )", 
			"Percentage": "%",
			"Angle": "deg",
			"undefinedTerms" : [ "*url(url)", "*attr(x)", "*counter", "*identifier", "*string" ]
		}
	},
	"props": {
		// Background Properties
		"background": {
			"info": "Sets all the background properties in one declaration",
			"cssVersion": "1",
			"category": "Background Properties",
			"unitType": [ "background-color&background-image&background-repeat&background-attachment&background-position" ]
		},
		"background-attachment": {
			"info": "Sets whether a background image is fixed or scrolls with the rest of the page",
			"cssVersion": "1",
			"category": "Background Properties",
			"unitType": ["scroll", "fixed"]
		},
		"background-clip": {
			"indo": "Specifies the painting area of the background",
			"cssVersion": "3",
			"category": "Background Properties",
			"unitType": ["border-box", "padding-box", "content-box"]
		},
		"background-color": {
			"info": "Sets the background color of an element",
			"cssVersion": "1",
			"category": "Background Properties",
			"unitType": ["transparent", "*Color"]
		},
		"background-image": {
			"info": "Sets the background image for an element",
			"cssVersion": "1",
			"category": "Background Properties",
			"unitType": ["none", "*url(url)"]
		},
		"background-origin": {
			"indo": "Specifies what the background-position property should be relative to",
			"cssVersion": "3",
			"category": "Background Properties",
			"unitType": ["padding-box", "border-box", "content-box"]
		},
		"background-position": {
			"info": "Sets the starting position of a background image",
			"cssVersion": "1",
			"category": "Background Properties",
			"unitType": ["*Percentage", "*Length", "top", "bottom", "left", "right", "center"]
		},
		"background-repeat": {
			"info": "Sets how a background image will be repeated",
			"cssVersion": "1",
			"category": "Background Properties",
			"unitType": ["repeat", "repeat-x", "repeat-y", "no-repeat"]
		},
		"background-size": {
			"indo": "Specifies the size of the background images",
			"cssVersion": "3",
			"category": "Background Properties",
			"unitType": ["*Percentage", "*Length", "cover", "contain"]
		},
		// Border and Outline Properties
		"border": {
			"info": "Sets all the border properties in one declaration",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": [ "border-width&border-style&border-color"]
		},
		"border-bottom": {
			"info": "Sets all the bottom border properties in one declaration",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": [ "border-bottom-width&border-bottom-style&border-bottom-color"]
		},
		"border-bottom-color": {
			"info": "Sets the color of the bottom border",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": [ "*Color", "transparent" ]
		},
		"border-bottom-style": {
			"info": "Sets the style of the bottom border",
			"cssVersion": "2",
			"unitType": ["none", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"border-bottom-width": {
			"info": "Sets the width of the bottom border",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["medium", "*Length", "thin", "thick"]
		},
		"border-color": {
			"info": "Sets the color of the four borders",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["*Color", "transparent"]
		},
		"border-left": {
			"info": "Sets all the left border properties in one declaration",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": [ "border-left-width&border-left-style&border-left-color"]
		},
		"border-left-color": {
			"info": "Sets the color of the left border",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["*Color", "transparent"]
		},
		"border-left-style": {
			"info": "Sets the style of the left border",
			"cssVersion": "2",
			"unitType": ["none", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"border-left-width": {
			"info": "Sets the width of the left border",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["medium", "*Length", "thin", "thick"]
		},
		"border-right": {
			"info": "Sets all the right border properties in one declaration",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": [ "border-right-width&border-right-style&border-right-color" ]
		},
		"border-right-color": {
			"info": "Sets the color of the right border",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["*Color", "transparent"]
		},
		"border-right-style": {
			"info": "Sets the style of the right border",
			"cssVersion": "2",
			"unitType": ["none", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"border-right-width": {
			"info": "Sets the width of the right border",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["medium", "*Length", "thin", "thick"]
		},
		"border-style": {
			"info": "Sets the style of the four borders",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["none", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"border-top": {
			"info": "Sets all the top border properties in one declaration",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": [ "border-top-width&border-top-style&border-top-color" ]
		},
		"border-top-color": {
			"info": "Sets the color of the top border",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["*Color", "transparent"]
		},
		"border-top-style": {
			"info": "Sets the style of the top border",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["none", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"border-top-width": {
			"info": "Sets the width of the top border",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["medium", "*Length", "thin", "thick"]
		},
		"border-width": {
			"info": "Sets the width of the four borders",
			"cssVersion": "1",
			"category": "Border and Outline Properties",
			"unitType": ["medium", "*Length", "thin", "thick"]
		},
		"outline": {
			"info": "Sets all the outline properties in one declaration",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": [ "outline-width&outline-style&outline-color" ]
		},
		"outline-color": {
			"info": "Sets the color of an outline",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["*Color", "transparent"]
		},
		"outline-style": {
			"info": "Sets the style of an outline",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["none", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"outline-width": {
			"info": "Sets the width of an outline",
			"cssVersion": "2",
			"category": "Border and Outline Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"border-image": {
			"info": "A shorthand property for setting all the border-image-* properties",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["border-image-source&border-image-slice&border-image-width&border-image-outset&border-image-repeat"]
		},
		"border-image-outset": {
			"info": "Specifies the amount by which the border image area extends beyond the border box",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Number"]
		},
		"border-image-repeat": {
			"info": "Specifies whether the image-border should be repeated, rounded or stretched",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["stretch", "repeat", "round"]
		},
		"border-image-slice": {
			"info": "Specifies the inward offsets of the image-border",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Number", "*Percentage", "fill"]
		},
		"border-image-source": {
			"info": "Specifies an image to be used as a border",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["none", "*url(url)"]
		},
		"border-image-width": {
			"info": "Specifies the widths of the image-border",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Number", "*Percentage", "auto"]
		},
		"border-radius": {
			"info": "A shorthand property for setting all the four border-*-radius properties",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"border-bottom-left-radius": {
			"info": "Defines the shape of the border of the bottom-left corner",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"border-bottom-right-radius": {
			"info": "Defines the shape of the border of the bottom-right corner",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"border-top-left-radius": {
			"info": "Defines the shape of the border of the top-left corner",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"border-top-right-radius": {
			"info": "Defines the shape of the border of the top-right corner",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"box-shadow": {
			"info": "Attaches one or more drop-shadows to the box",
			"cssVersion": "3",
			"category": "Border and Outline Properties",
			"unitType": ["*Length", "*Percentage", "*Color", "inset"]
		},
		// Box Properties
		"overflow-x": {
			"info": "Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area",
			"cssVersion": "3",
			"category": "Box Properties",
			"unitType": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"]
		},
		"overflow-y": {
			"info": "Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area",
			"cssVersion": "3",
			"category": "Box Properties",
			"unitType": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"]
		},
		"overflow-style": {
			"info": "Specifies the preferred scrolling method for elements that overflow",
			"cssVersion": "3",
			"category": "Box Properties",
			"unitType": ["auto", "scrollbar", "panner", "move", "marquee"]
		},
		"rotation": {
			"info": "Rotates an element around a given point defined by the rotation-point property",
			"cssVersion": "3",
			"category": "Box Properties",
			"unitType": ["*Angle"]
		},
		"rotation-point": {
			"info": "Defines a point as an offset from the top left border edge",
			"cssVersion": "3",
			"category": "Box Properties",
			"unitType": ["*Percentage", "*Length", "top", "bottom", "left", "right", "center"]
		},
		// Color Properties
		"opacity": {
			"info": "Sets the opacity level for an element",
			"cssVersion": "3",
			"category": "Color Properties",
			"unitType": ["*Number"]
		},
		// Dimension Properties
		"height": {
			"info": "Sets the height of an element",
			"cssVersion": "1",
			"category": "Dimension Properties",
			"unitType": ["auto", "*Length"]
		},
		"width": {
			"info": "Sets the width of an element",
			"cssVersion": "1",
			"category": "Dimension Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"max-height": {
			"info": "Sets the maximum height of an element",
			"cssVersion": "2",
			"category": "Dimension Properties",
			"unitType": [ "none", "*Length", "*Percentage"]
		},
		"max-width": {
			"info": "Sets the maximum width of an element",
			"cssVersion": "2",
			"category": "Dimension Properties",
			"unitType": [ "none", "*Length", "*Percentage"]
		},
		"min-height": {
			"info": "Sets the minimum height of an element",
			"cssVersion": "2",
			"category": "Dimension Properties",
			"unitType": [ "none", "*Length", "*Percentage"]
		},
		"min-width": {
			"info": "Sets the minimum width of an element",
			"cssVersion": "2",
			"category": "Dimension Properties",
			"unitType": [ "none", "*Length", "*Percentage"]
		},
		// Flexible Box Properties
		"box-align": {
			"info": "Specifies how to align the child elements of a box",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "start", "end", "center", "baseline", "stretch"]
		},
		"box-direction": {
			"info": "Specifies in which direction the children of a box are displayed",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "normal", "reverse", "inherit"]
		},
		"box-flex": {
			"info": "Specifies whether the children of a box is flexible or inflexible in size",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "*Number"]
		},
		"box-flex-group": {
			"info": "Assigns flexible elements to flex groups",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "*Number"]
		},
		"box-lines": {
			"info": "Specifies whether columns will go onto a new line whenever it runs out of space in the parent box",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "single", "multiple"]
		},
		"box-ordinal-group": {
			"info": "Specifies the display order of the child elements of a box",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "*Number"]
		},
		"box-orient": {
			"info": "Specifies whether the children of a box should be laid out horizontally	or vertically",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "horizontal", "vertical", "inline-axis", "block-axis", "inherit"]
		},
		"box-pack": {
			"info": "Specifies the horizontal position in horizontal boxes and the vertical position in vertical boxes",
			"cssVersion": "3",
			"category": "Flexible Box Properties",
			"unitType": [ "start", "end", "center", "justify"]
		},
		// Font Properties
		"font": {
			"info": "Sets all the font properties in one declaration",
			"cssVersion": "1",
			"category": "Font Properties",
			"unitType": [ "font-style&font-variant&font-weight&font-size&font-family", "font-style&font-variant&font-weight&line-height&font-family" ]
		},
		"font-family": {
			"info": "Specifies the font family for text",
			"cssVersion": "1",
			"category": "Font Properties",
			"unitType": ["*FontFamily", "cursive", "fantasy", "monospace", "sans-serif", "serif"]
		},
		"font-size": {
			"info": "Specifies the font size of text",
			"cssVersion": "1",
			"category": "Font Properties",
			"unitType": ["*Length", "*Percentage", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "smaller", "larger"]
		},
		"font-style": {
			"info": "Specifies the font style for text",
			"cssVersion": "1",
			"category": "Font Properties",
			"unitType": ["normal", "italic", "oblique"]
		},
		"font-variant": {
			"info": "Specifies whether or not a text should be displayed in a small-caps font",
			"cssVersion": "1",
			"category": "Font Properties",
			"unitType": ["normal", "small-caps"]
		},
		"font-weight": {
			"info": "Specifies the weight of a font",
			"cssVersion": "1",
			"category": "Font Properties",
			"unitType": ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
		},
		"font-size-adjust": {
			"info": "Preserves the readability of text when font fallback occurs",
			"cssVersion": "3",
			"category": "Font Properties",
			"unitType": [ "*Number", "none", "inherit"]
		},
		"font-stretch": {
			"info": "Selects a normal, condensed, or expanded face from a font family",
			"cssVersion": "3",
			"category": "Font Properties",
			"unitType": [ "wider", "narrower", "ultra-condensed", "extra-condenses", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", "inherit"]
		},
		// Generated Content Properties
		"content": {
			"info": "Used with the :before and :after pseudo-elements, to insert generated content",
			"cssVersion": "2",
			"category": "Generated Content Properties",
			"unitType": [ "none", "*string", "*url(url)", "*attr(x)", "*counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote" ]
		},
		"counter-increment": {
			"info": "Increments one or more counters. Used with 'content' property.",
			"cssVersion": "2",
			"category": "Generated Content Properties",
			"unitType": [ "none", "*identifier", "*identifier&*Number" ]
		},
		"counter-reset": {
			"info": "Creates or resets one or more counters",
			"cssVersion": "2",
			"category": "Generated Content Properties",
			"unitType": [ "none", "*identifier", "*identifier&*Number" ]
		},
		"quotes": {
			"info": "Sets the type of quotation marks for embedded quotations",
			"cssVersion": "2",
			"category": "Generated Content Properties",
			"unitType": [ "none", "*string&*string" ]
		},
		// List Properties
		"list-style": {
			"info": "Sets all the properties for\u000a a list in one declaration",
			"cssVersion": "1",
			"category": "List Properties",
			"unitType": [ "list-style-type&list-style-position&list-style-image"]
		},
		"list-style-image": {
			"info": "Specifies an image as the list-item marker",
			"cssVersion": "1",
			"category": "List Properties",
			"unitType": ["none", "*url(url)"]
		},
		"list-style-position": {
			"info": "Specifies if the list-item markers should appear inside or outside the content flow",
			"cssVersion": "1",
			"category": "List Properties",
			"unitType": ["outside", "inside"]
		},
		"list-style-type": {
			"info": "Specifies the type of list-item marker",
			"cssVersion": "1",
			"category": "List Properties",
			"unitType": ["disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-alpha", "upper-alpha", "lower-roman", "upper-roman", "upper-alpha",  "none"]
		},
		// Margin Properties
		"margin": {
			"info": "Sets all the margin properties in one declaration",
			"cssVersion": "1",
			"category": "Margin Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"margin-bottom": {
			"info": "Sets the bottom margin of an element",
			"cssVersion": "1",
			"category": "Margin Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"margin-left": {
			"info": "Sets the left margin of an element",
			"cssVersion": "1",
			"category": "Margin Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"margin-right": {
			"info": "Sets the right margin of an element",
			"cssVersion": "1",
			"category": "Margin Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"margin-top": {
			"info": "Sets the top margin of an element",
			"cssVersion": "1",
			"category": "Margin Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		// Multi-column Properties
		"column-count": {
			"info": "Specifies the number of columns an element should be divided into",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "*Number", "auto"]
		},
		"column-fill": {
			"info": "Specifies how to fill columns",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "balance", "auto"]
		},
		"column-gap": {
			"info": "Specifies the gap between the columns",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "*Length", "normal"]
		},
		"column-rule": {
			"info": "A shorthand property for setting all the column-rule-* properties",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "column-rule-width&column-rule-style&column-rule-color"]
		},
		"column-color": {
			"info": "Specifies the color of the rule between columns",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": ["*Color"]
		},
		"column-style": {
			"info": "Specifies the style of the rule between columns",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": ["none", "hidden", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"]
		},
		"column-width": {
			"info": "Specifies the width of the rule between columns",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": ["medium", "*Length", "thin", "thick"]
		},
		"column-span": {
			"info": "Specifies how many columns an element should span across",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "1", "all"]
		},
		"column-width": {
			"info": "Specifies the width of the columns",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "auto", "*Length"]
		},
		"columns": {
			"info": "A shorthand property for setting column-width and column-count",
			"cssVersion": "3",
			"category": "Multi-column Properties",
			"unitType": [ "column-width&column-count"]
		},
		// Padding Properties
		"padding": {
			"info": "Sets all the padding properties in one declaration",
			"cssVersion": "1",
			"category": "Padding Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"padding-bottom": {
			"info": "Sets the bottom padding of an element",
			"cssVersion": "1",
			"category": "Padding Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"padding-left": {
			"info": "Sets the left padding of an element",
			"cssVersion": "1",
			"category": "Padding Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"padding-right": {
			"info": "Sets the right padding of an element",
			"cssVersion": "1",
			"category": "Padding Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"padding-top": {
			"info": "Sets the top padding of an element",
			"cssVersion": "1",
			"category": "Padding Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		// Positioning Properties
		"bottom": {
			"info": "Sets the bottom margin edge for a positioned box",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"clear": {
			"info": "Specifies which sides of an element where other floating elements are not allowed",
			"cssVersion": "1",
			"category": "Positioning Properties",
			"unitType": ["none", "left", "right", "both"]
		},
		"clip": {
			"info": "Clips an absolutely positioned element",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": [ "auto", "*Rect( *Position, *Position, *Position, *Position)" ]
		},
		"cursor": {
			"info": "Specifies the type of cursor to be displayed",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["auto", "crosshair", "hand", "help", "move", "pointer", "text", "wait", "n-resize", "s-resize", "e-resize", "w-resize", "ne-resize", "se-resize", "nw-resize", "sw-resize"]
		},
		"display": {
			"info": "Specifies the type of box an element should generate",
			"cssVersion": "1",
			"category": "Positioning Properties",
			"unitType": ["block", "inline", "list-item", "none"]
		},
		"float": {
			"info": "Specifies whether or not a box should float",
			"cssVersion": "1",
			"category": "Positioning Properties",
			"unitType": ["none", "left", "right"]
		},
		"left": {
			"info": "Sets the left margin edge for a positioned box",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"overflow": {
			"info": "Specifies what happens if content overflows an element's box",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": [ "visible", "hidden", "scroll", "auto" ]
		},
		"position": {
			"info": "Specifies the type of positioning for an element",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["static", "absolute", "fixed", "relative"]
		},
		"right": {
			"info": "Sets the right margin edge for a positioned box",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"top": {
			"info": "Sets the top margin edge for a positioned box",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["auto", "*Length", "*Percentage"]
		},
		"visibility": {
			"info": "Specifies whether or not an element is visible",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["inherit", "visible", "hidden"]
		},
		"z-index": {
			"info": "Sets the stack order of an element",
			"cssVersion": "2",
			"category": "Positioning Properties",
			"unitType": ["auto", "*Number"]
		},
		// Print Properties
		"orphans": {
			"info": "Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element",
			"cssVersion": "2",
			"category": "Print Properties",
			"unitType": [ "*Number" ]
		},
		"page-break-after": {
			"info": "Sets the page-breaking behavior after an element",
			"cssVersion": "2",
			"category": "Print Properties",
			"unitType": [ "avoid", "auto", "always", "left", "right"  ]
		},
		"page-break-before": {
			"info": "Sets the page-breaking behavior before an element",
			"cssVersion": "2",
			"category": "Print Properties",
			"unitType": [ "avoid", "auto", "always", "left", "right"  ]
		},
		"page-break-inside": {
			"info": "Sets the page-breaking behavior inside an element",
			"cssVersion": "2",
			"category": "Print Properties",
			"unitType": [ "avoid", "auto" ]
		},
		"widows": {
			"info": "Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element",
			"cssVersion": "2",
			"category": "Print Properties",
			"unitType": [ "*Number" ]
		},
		// Table Properties
		"border-collapse": {
			"info": "Specifies whether or not table borders should be collapsed",
			"cssVersion": "2",
			"category": "Table Properties",
			"unitType": ["collapse", "separate"]
		},
		"border-spacing": {
			"info": "Specifies the distance between the borders of adjacent cells",
			"cssVersion": "2",
			"category": "Table Properties",
			"unitType": [ "*Length", "*Length&*Length" ]
		},
		"caption-side": {
			"info": "Specifies the placement of a table caption",
			"cssVersion": "2",
			"category": "Table Properties",
			"unitType": [ "top", "bottom" ]
		},
		"empty-cells": {
			"info": "Specifies whether or not to display borders and background on empty cells in a table",
			"cssVersion": "2",
			"category": "Table Properties",
			"unitType": [ "show", "hide" ]
		},
		"table-layout": {
			"info": "Sets the layout algorithm to be used for a table",
			"cssVersion": "2",
			"category": "Table Properties",
			"unitType": [ "auto", "fixed" ]
		},
		// Text Properties
		"color": {
			"info": "Sets the color of text",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["*Color"]
		},
		"direction": {
			"info": "Specifies the text direction/writing direction",
			"cssVersion": "2",
			"category": "Text Properties",
			"unitType": [ "ltr", "rtl" ]
		},
		"letter-spacing": {
			"info": "Increase or decrease the space between characters in a text",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["normal", "*Length"]
		},
		"line-height": {
			"info": "Sets the line height",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["normal", "*Length", "*Number", "*Percentage"]
		},
		"text-align": {
			"info": "Specifies the horizontal alignment of text",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["left", "right", "center", "justify"]
		},
		"text-decoration": {
			"info": "Specifies the decoration added to text",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["none", "underline", "overline", "line-through", "blink"]
		},
		"text-indent": {
			"info": "Specifies the indentation of the first line in a text-block",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["*Length", "*Percentage"]
		},
		"text-transform": {
			"info": "Controls the capitalization of text",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["none", "capitalize", "uppercase", "lowercase"]
		},
		"unicode-bidi": {
			"info": "influences how bi-directional text is rendered.",
			"cssVersion": "2",
			"category": "Text Properties",
			"unitType": ["normal", "embed", "bidi-override"]
		},
		"vertical-align": {
			"info": "Sets the vertical alignment of an element",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["baseline", "*Length", "*Percentage", "sub", "super", "top", "middle", "bottom", "text-top", "text-bottom"]
		},
		"white-space": {
			"info": "Specifies how white-space inside an element is handled",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["normal", "pre", "nowrap", "pre-wrap", "pre-line"]
		},
		"word-spacing": {
			"info": "Increases or decreases the space between words in a text",
			"cssVersion": "1",
			"category": "Text Properties",
			"unitType": ["normal", "*Length"]
		},
		"hanging-punctuation": {
			"info": "Specifies whether a punctuation character may be placed outside the line box",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "none", "first", "last", "allow-end", "force-end"]
		},
		"punctuation-trim": {
			"info": "Specifies whether a punctuation character should be trimmed",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "none", "start", "end", "allow-end", "adjacent"]
		},
		"text-justify": {
			"info": "Specifies the justification method used when text-align is 'justify'",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "auto", "inter-word", "inter-ideograph", "inter-cluster", "distribute", "kashida", "none"]
		},
		"text-overflow": {
			"info": "Specifies what should happen when text overflows the containing element",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "clip", "ellipsis", "*string"]
		},
		"text-shadow": {
			"info": "Specifies the shadow effect added to text",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "*Color&*Position&*Position&*Length" ]
		},
		"text-wrap": {
			"info": "Specifies line breaking rules for text",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "normal", "none", "unrestricted", "suppress"]
		},
		"word-break": {
			"info": "Specifies line breaking rules for non-CJK scripts",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "normal", "break-all", "hyphenate"]
		},
		"word-wrap": {
			"info": "Allows long, unbreakable words to be broken and wrap to the next line",
			"cssVersion": "3",
			"category": "Text Properties",
			"unitType": [ "normal", "break-word"]
		}
	}
};