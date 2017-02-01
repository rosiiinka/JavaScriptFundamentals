// function solve([speed, area]) {
//
//     let limit = (function getLimit(area) {
//         switch (area) {
//             case "motorway" :
//                 return 130;
//             case "interstate" :
//                 return 90;
//             case "city" :
//                 return 50;
//             case "residential" :
//                 return 20;
//         }
//     })(area);
//
//     let infraction = (function getInfraction(speed, limit) {
//         let parsedSpeed = Number(speed);
//         let overSpeed = parsedSpeed - limit;
//         if (overSpeed <= 0) {
//             return "";
//         } else {
//             if (overSpeed > 0 && overSpeed <= 20) {
//                 return "speeding";
//             } else if (overSpeed > 20 && overSpeed <= 40) {
//                 return "excessive speeding";
//             } else {
//                 return "reckless driving";
//             }
//         }
//     })(speed, limit);
//
//     console.log(infraction);
// }
// solve(["120", "interstate"]);



function solve([speed, area]) {
    function getLimit(area) {
        switch (area) {
            case "motorway" :
                return 130;
            case "interstate" :
                return 90;
            case "city" :
                return 50;
            case "residential" :
                return 20;
        }
    }

    function getInfraction(speed, limit) {
        let parsedSpeed = Number(speed);
        let overSpeed = parsedSpeed - limit;
        if (overSpeed <= 0) {
            return "";
        } else {
            if (overSpeed > 0 && overSpeed <= 20) {
                return "speeding";
            } else if (overSpeed > 20 && overSpeed <= 40) {
                return "excessive speeding";
            } else {
                return "reckless driving";
            }
        }
    }

    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);
    console.log(infraction);
}
solve(["120", "interstate"]);