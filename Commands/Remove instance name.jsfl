var selArray=fl.getDocumentDOM().selection

for(var i=0;i<selArray.length;i++)
{
	fl.getDocumentDOM().selectNone()
	var myArray=new Array()
	myArray.push(selArray[i])
	fl.getDocumentDOM().selection = myArray;

	fl.getDocumentDOM().selection[0].name="";
}