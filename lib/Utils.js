function DecimalToBinary(n) {
    binary = Number(n).toString(2);
    return binary;
}

function BinaryToDecimal(n) {
 
    decimal = parseInt(n, 2);
    return decimal;
}

function BinaryNumberToBits(binary) {

    var bits = [];
    for (var i = 0; i < binary.length; i++) {
        
        bits[i] = binary.charAt(i)
 
    }
    return bits;
}

function PaddingBinaries(binary1,binary2) {

    var lengthOfBinary1 = BinaryNumberToBits(binary1).length;
    var lengthOfBinary2 = BinaryNumberToBits(binary2).length;

    if ( lengthOfBinary1 > lengthOfBinary2 ) {

         for (var i = 0; i < (lengthOfBinary1 - lengthOfBinary2); i++) {

            binary2 = "0" + binary2
           
        }

    } else if ( lengthOfBinary1 < lengthOfBinary2 ) {

        for (var i = 0; i < (lengthOfBinary2 - lengthOfBinary1); i++) {
            
            binary1 = "0" + binary1
          
        }
    }

    return [binary1,binary2];
}

