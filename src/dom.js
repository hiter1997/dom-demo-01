window.dom = {
    find(selector){
        return document.querySelectorAll(selector)
    },
    //老师的代码
    find1(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node,name,value){
        if (arguments.length===3) {
            node.style[name]=value;
        }else if(arguments.length===2){
            return node.style[name]
        }else if(name instanceof Object){
            // dom.style(div, {color: 'red'})
            const obj = name;
            for (key in obj) {
               node.style[name] = obj[key]
            }
        }
    },
    each(nodeList,fn){
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(undefined,nodeList[i])
        }
    }
}