function inside(input) {
    for (let i = 0; i < input.length; i +=3) {
        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];
        if(volume(x, y, z)){
            console.log('inside');
        }else {
            console.log('outside');
        }

    }

    function volume(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;


        if(x1 <= x && x <= x2) {
            if (y1 <= y && y <= y2) {
                if (z1 <= z && z <= z2) {
                    return true;
                }
            }
        }
        return false;
    }
}

