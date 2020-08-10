function getColor( percentage, start, end ) {

    return 'rgb(' + end.map( (channel, index) => {
        return Math.round( channel + percentage * ( start[index] - channel ) );
    }).join(',') + ')';

}
