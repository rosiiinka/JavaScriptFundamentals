function distance([x, y, z, x2, y2, z2]) {
    [x, y, z, x2, y2, z2] = [x, y, z, x2, y2, z2].map(Number);

   let deltaX = x - x2;
   let deltaY = y - y2;
   let deltaZ = z - z2;

   let dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

    console.log(dist)
}
distance([1, 1, 0, 5, 4, 0])