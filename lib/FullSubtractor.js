function FullSubtractor(A, B, BIn) {


    // first half subtractor
    var result1 = [];
    result1 = HalfSubtractor(A, B);
    var D1 = result1[0];
    var Bo1 = result1[1];

    // second half subtractor
    var result2 = [];
    result2 = HalfSubtractor(D1, BIn);
    var Diff = result2[0];
    var Bo2 = result2[1];

    // Or gate
    Bout = OR(Bo2,Bo1);

    return [Diff, Bout];
}