fl.outputPanel.clear();

var dom = fl.getDocumentDOM();
var sel = dom.selection;
var dx=0, dy=0;

for(var i=0; i<sel.length; i++){

	dx = (sel[i].x).toString();
	if(dx.indexOf(".")>0){ dx = 1-parseFloat("0." + dx.split(".")[1]) }else{ dx = 0; }
	
	dy = (sel[i].y).toString();
	if(dy.indexOf(".")>0){ dy = 1-parseFloat("0." + dy.split(".")[1]) }else{ dy = 0; }
	
	dom.moveSelectionBy({x:dx, y:dy});

}

dom.selection = sel;