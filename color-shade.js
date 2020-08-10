// This is not the unminified version of the minified version.
// This one is a bit more understandable and still super small, even unminified.

function getColor( percentage, start, end ) {

    var result = end.map( (channel, index) => {
        return Math.round( channel + percentage * ( start[index] - channel ) );
    } ).join(',');

    return 'rgb(' + result + ')';

}
