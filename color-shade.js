function getColor( percentage, startColor, endColor ) {
    
    var start = {
        r: startColor[0],
        g: startColor[1],
        b: startColor[2]
    }
    
    var end = {
        r: endColor[0],
        g: endColor[1],
        b: endColor[2]
    }
    
    var result = {
        r: Math.round( start.r + percentage * (end.r - start.r) ),
        g: Math.round( start.g + percentage * (end.g - start.g) ),
        b: Math.round( start.b + percentage * (end.b - start.b) )
    }
    
    return 'rgb(' + result.r + ',' + result.g + ',' + result.b + ')';

}
