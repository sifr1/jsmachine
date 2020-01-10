function Add(binary1,binary2) {

    var pairs = [];

    // filling empty left spaces with zeros to make both binary have same length.
    
    pairs = PaddingBinaries(binary1,binary2);   
    var bitsCount = pairs[0].length;
    
    var carry = 0;
    var total = [];
    
    for (var i = bitsCount-1; i >= 0; i--) {   
        
        var a = pairs[0].charAt(i) == 0? false:true;
        var b = pairs[1].charAt(i) == 0? false:true;
    
        var result = [];

        
        result =  FullAdder(a,b,carry);
      
        bit = result[0] == true? 1:0;
        total.unshift(bit);
        carry = result[1];
    
    }
    

    return total.join('');
    
    }
    
    function Subtract(binary1,binary2) {
    
    var pairs = [];
    // fill empty spaces with 0's
    pairs = PaddingBinaries(binary1,binary2);   
    var bitsCount = pairs[0].length;
    
    var borrow = 0;
    var total = [];
    
    for (var i = bitsCount-1; i >= 0; i--) {   
        
        var a = pairs[0].charAt(i) == 0? false:true;
        var b = pairs[1].charAt(i) == 0? false:true;
    
        var result = [];
        result =  FullSubtractor(a,b,borrow);
      
        bit = result[0] == true? 1:0;
        total.unshift(bit);
        borrow = result[1];
    
    }
    
    return total.join('');
    
    }