function areaOfTriangle(side1,side2,side3) {
    const semiperimeter = (side1+side2+side3)/2;
    const radicand = semiperimeter * (semiperimeter-side1) * (semiperimeter-side2) * (semiperimeter-side3);
    return Math.sqrt(radicand)
}