function getColor( percentage, start, end ) {

    return 'rgb(' + start.map( (channel, index) => {
        return Math.round( channel + percentage * ( end[index] - channel ) );
    }).join(',') + ')';

}
