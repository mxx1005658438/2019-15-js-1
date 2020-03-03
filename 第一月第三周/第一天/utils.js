let utils = (function () {
    function toArray(likeAry) {
        let ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary.push(likeAry[i])
            }
        }
        return ary
    };
    function mean(){
        let ary = toArray(arguments);
        ary.sort((a,b)=>a-b);
        ary.pop();
        ary.shift();
        return (eval(ary.join('+'))/ary.length).toFixed(2);
    }   
    return {
        toArray:toArray,
        mean:mean
    }
})()
