//Sum = A XOR B
//Carry = A AND B

function HalfAdder(A,B) {
    return [XOR(A,B),AND(A,B)]
}

// const [Sum, Carry] = HalfAdder(A,B);