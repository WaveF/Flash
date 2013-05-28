fl.outputPanel.clear();
fl.getDocumentDOM().selectNone();

var libItems = fl.getDocumentDOM().library.items;
var i = 0;
var rangeX = 140;
var rangeY = 120;
var rangeWidth = 260;
var rangeHeight = 50;
var marginBottom = 30;

if(libItems.length == 0){
	addRangeSymbol(rangeX, rangeY, rangeWidth, rangeHeight);
}

for(i=0; i<libItems.length; i++){
	var itemName = libItems[i].name.toLowerCase();
	if(itemName != "rangeMC"){
		addRangeSymbol(rangeX, rangeY, rangeWidth, rangeHeight);
	}
}

function addRangeSymbol(rx, ry, rw, rh){
	//var totalLayers = fl.getDocumentDOM().getTimeline().layers.length;
	//fl.getDocumentDOM().getTimeline().setSelectedLayers(totalLayers-1);
	//fl.getDocumentDOM().getTimeline().addNewLayer('range', 'guide', 'false');
	fl.getDocumentDOM().addNewRectangle({left:0, top:0, right:rangeWidth, bottom:rangeHeight}, 0);
	fl.getDocumentDOM().setFillColor('#00ccff00');
	fl.getDocumentDOM().mouseClick({x:1, y:1}, false, true);
	fl.getDocumentDOM().group();
	fl.getDocumentDOM().convertToSymbol('movie clip', 'rangeMC', 'top left');
	fl.getDocumentDOM().setTransformationPoint({x:0, y:0});
	fl.getDocumentDOM().deleteSelection();
}

if(fl.getDocumentDOM().getTimeline().findLayerIndex("main") != undefined){
	var mainLayerIdx = fl.getDocumentDOM().getTimeline().findLayerIndex("main")[0];
	//fl.getDocumentDOM().getTimeline().setSelectedLayers(mainLayerIdx);
	//var totalFrames = fl.getDocumentDOM().getTimeline().frameCount;

	var totalFrames = fl.getDocumentDOM().getTimeline().layers[mainLayerIdx].frames.length;

	var symbolName = "";
	var targetHeight = 0;

	for(i=0; i<totalFrames; i++){
		symbolName = "textContent" + (i+1);
		
		fl.getDocumentDOM().getTimeline().currentFrame = i;
		fl.getDocumentDOM().selection = fl.getDocumentDOM().getTimeline().layers[mainLayerIdx].frames[i].elements;
		fl.getDocumentDOM().group();
		targetHeight = fl.getDocumentDOM().selection[0].height;
		fl.getDocumentDOM().breakApart();

		
		fl.getDocumentDOM().library.selectItem("rangeMC");
		fl.getDocumentDOM().library.addItemToDocument({x:0, y:0}, "rangeMC");
		fl.getDocumentDOM().mouseClick({x:0, y:0}, false, true);
		fl.getDocumentDOM().moveSelectionBy({x:rangeX+rangeWidth*.5, y:rangeY+rangeHeight*.5});
		fl.getDocumentDOM().setTransformationPoint({x:0, y:0});
		fl.getDocumentDOM().selection[0].height = targetHeight + marginBottom;
		fl.getDocumentDOM().arrange('back');
		fl.getDocumentDOM().setInstanceAlpha(0);
		fl.getDocumentDOM().selectNone();
		
		//fl.getDocumentDOM().selectAll();
		fl.getDocumentDOM().selection = fl.getDocumentDOM().getTimeline().layers[mainLayerIdx].frames[i].elements;
		fl.getDocumentDOM().convertToSymbol('movie clip', symbolName, 'top left');
		fl.getDocumentDOM().library.setItemProperty('linkageExportForAS', true);
		fl.getDocumentDOM().library.setItemProperty('linkageExportInFirstFrame', true);
		fl.getDocumentDOM().library.setItemProperty('linkageClassName', symbolName);
	}

	fl.outputPanel.trace("Done");
}else{
	fl.outputPanel.trace("Can not find 'main' layer, abort.");
}