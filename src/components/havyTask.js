function havyTask(from,to,cb) {
    let i = from ;

    function count () {
        do {
            i++;
            cb(i);
          } while (i % 100 !== 0 && i !== to);
        if(i < to) setTimeout(count);
    }
    return count ;
    
}