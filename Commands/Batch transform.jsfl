var selArray=fl.getDocumentDOM().selection;
var transNum = prompt("Input transform number(1.0=100%):", "1.000000");

for(var i=0;i<selArray.length;i++)
{
	fl.getDocumentDOM().selectNone();
	var myArray=new Array();
	myArray.push(selArray[i]);
	fl.getDocumentDOM().selection = myArray;

	fl.getDocumentDOM().transformSelection(Number(transNum), 0, 0, Number(transNum));
}