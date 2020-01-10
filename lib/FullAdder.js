function FullAdder(A, B, CIn) {


    // first half adder
    var result1 = [];
    result1 = HalfAdder(A, B);
    var S = result1[0];
    var cOut1 = result1[1];

    // second half adder
    var result2 = [];
    result2 = HalfAdder(CIn, S);
    var Sum = result2[0];
    var cOut2 = result2[1];

    // Or gate
    cOut = OR(cOut1,cOut2);

    return [Sum, cOut];
}



