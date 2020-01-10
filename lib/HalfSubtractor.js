
function HalfSubtractor(A,B) {

    Bo = AND(NOT(A),B);
    D = XOR(A,B);
    return [D,Bo];
}


