var selArray=fl.getDocumentDOM().selection;
//正规遍历选择对象写法
for(var i=0;i<selArray.length;i++){
    if(selArray[i].elementType == "instance"){
        fl.getDocumentDOM().selectNone();
        fl.getDocumentDOM().selection = [selArray[i]];
        fl.getDocumentDOM().setTransformationPoint({x:0, y:0});
    }
}
fl.getDocumentDOM().selection = selArray;