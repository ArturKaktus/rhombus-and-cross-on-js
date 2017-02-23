jQuery('document').ready(function() {
    jQuery('button').on('click', function() {
        var num, mid, out, i, j, four;
        num = jQuery('#numbox').val();
        if(num % 2 != 0) {
            mid = (num-1 )/2;   
            out = " ";
            for(i=mid*(-1); i<=mid; i++){
                for(j=mid*(-1); j<=mid; j++){
                    four=Math.abs(j)+Math.abs(i);
                    if(j==0 || i==0 || four==mid){out = out+'1 ';}else{out = out+'0 ';}
                }
                jQuery('body').append(out,'<br/>');
                out = " ";
            }
        }
    });
});