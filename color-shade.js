function getColor( percentage, start, end ) {

    return 'rgb(' + end.map( (channel, index) => {
        return channel + percentage * ( start[index] - channel ) | 0;
    }).join(',') + ')';

}
