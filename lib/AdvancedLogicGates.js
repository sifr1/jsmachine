function NAND(A,B) {

    // A NAND B = ~(A.B)
    return NOT(AND(A,B));
}

function NOR(A,B) {
    // A NOR B = ~(A+B)
    return NOT(OR(A,B))
}

function XOR(A,B) {

    // A XOR B = ~A.B + A.~B  
    return OR(AND(A,NOT(B)),AND(NOT(A),B))

}

function XNOR(A,B) {
    // A XNOR B = ~A.~B + A.B
    return OR(AND(NOT(A),NOT(B)),AND(A,B))

}

