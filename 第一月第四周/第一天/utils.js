let utils  = (function(){
    function offset(curEle) {
        let left = curEle.offsetLeft;
        let top = curEle.offsetTop;
        let parent = curEle.offsetParent;
        while (parent !== document.body) {
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clinetTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left,
            top
        }

    };
    function win(attr,value){
        if(value === undefined){
            return document.documentElement[attr] || document.body[attr]
        }
        // 设置属性存在兼容，把这个两个都写上
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }

    return {
        offset,
        win
    }
})()
