$(document).ready(function(){
    
    var counter1 = counter2 = counter3 = counter4 = counter5 = counter6 = counter7 = 10;
    var totalV1 = totalV2 = totalV3 = totalV4 = totalV5 = totalV6 = totalV7 = 0;

    var V1 = window.setInterval(CountV1,20);
    var V2 = window.setInterval(CountV2,20);
    var V3 = window.setInterval(CountV3,20);
    var V4 = window.setInterval(CountV4,20);
    var V5 = window.setInterval(CountV5,20);
    var V6 = window.setInterval(CountV6,20);
    var V7 = window.setInterval(CountV7,20);
        
    function CountV1() {
        var V1A = Number($('#V1A').val());
        var V1B = Number($('#V1B').val());
        var V1C = Number($('#V1C').val());
        var V1D = Number($('#V1D').val());
        var V1E = Number($('#V1E').val());
        var V1F = Number($('#V1F').val());
        var V1G = Number($('#V1G').val());
        var V1H = Number($('#V1H').val());
        var V1I = Number($('#V1I').val());

        var id = '#counter1';
        

        if (totalV1 != V1A + V1B + V1C + V1D + V1E + V1F + V1G + V1H + V1I) {
            totalV1 = V1A + V1B + V1C + V1D + V1E + V1F + V1G + V1H + V1I;
            counter1 = 10 - totalV1;
            $('#counter1').html("Nog "+ counter1 + " punten");
        };

        if (counter1 == 0){
            equalZero(id);
        } else if (counter1 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    function CountV2() {
        var V2A = Number($('#V2A').val());
        var V2B = Number($('#V2B').val());
        var V2C = Number($('#V2C').val());
        var V2D = Number($('#V2D').val());
        var V2E = Number($('#V2E').val());
        var V2F = Number($('#V2F').val());
        var V2G = Number($('#V2G').val());
        var V2H = Number($('#V2H').val());
        var V2I = Number($('#V2I').val());

        var id = '#counter2';


        if (totalV2 != V2A + V2B + V2C + V2D + V2E + V2F + V2G + V2H + V2I) {
            totalV2 = V2A + V2B + V2C + V2D + V2E + V2F + V2G + V2H + V2I;
            counter2 = 10 - totalV2;
            $('#counter2').html("Nog "+counter2+" punten");
        };

        if (counter2 == 0){
            equalZero(id);
        } else if (counter2 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    function CountV3() {
        var V3A = Number($('#V3A').val());
        var V3B = Number($('#V3B').val());
        var V3C = Number($('#V3C').val());
        var V3D = Number($('#V3D').val());
        var V3E = Number($('#V3E').val());
        var V3F = Number($('#V3F').val());
        var V3G = Number($('#V3G').val());
        var V3H = Number($('#V3H').val());
        var V3I = Number($('#V3I').val());

        var id = '#counter3';

        if (totalV3 != V3A + V3B + V3C + V3D + V3E + V3F + V3G + V3H + V3I) {
            totalV3 = V3A + V3B + V3C + V3D + V3E + V3F + V3G + V3H + V3I;
            counter3 = 10 - totalV3;
            $('#counter3').html("Nog "+counter3+" punten");
        };

        if (counter3 == 0){
            equalZero(id);
        } else if (counter3 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    function CountV4() {
        var V4A = Number($('#V4A').val());
        var V4B = Number($('#V4B').val());
        var V4C = Number($('#V4C').val());
        var V4D = Number($('#V4D').val());
        var V4E = Number($('#V4E').val());
        var V4F = Number($('#V4F').val());
        var V4G = Number($('#V4G').val());
        var V4H = Number($('#V4H').val());
        var V4I = Number($('#V4I').val());
        
        var id = '#counter4';

        if (totalV4 != V4A + V4B + V4C + V4D + V4E + V4F + V4G + V4H + V4I) {
            totalV4 = V4A + V4B + V4C + V4D + V4E + V4F + V4G + V4H + V4I;
            counter4 = 10 - totalV4;
            $('#counter4').html("Nog "+counter4+" punten");
        };

        if (counter4 == 0){
            equalZero(id);
        } else if (counter4 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    function CountV5() {
        var V5A = Number($('#V5A').val());
        var V5B = Number($('#V5B').val());
        var V5C = Number($('#V5C').val());
        var V5D = Number($('#V5D').val());
        var V5E = Number($('#V5E').val());
        var V5F = Number($('#V5F').val());
        var V5G = Number($('#V5G').val());
        var V5H = Number($('#V5H').val());
        var V5I = Number($('#V5I').val());

        var id = '#counter5';
        

        if (totalV5 != V5A + V5B + V5C + V5D + V5E + V5F + V5G + V5H + V5I) {
            totalV5 = V5A + V5B + V5C + V5D + V5E + V5F + V5G + V5H + V5I;
            counter5 = 10 - totalV5;
            $('#counter5').html("Nog "+counter5+" punten");
        };

        if (counter5 == 0){
            equalZero(id);
        } else if (counter5 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    function CountV6() {
        var V6A = Number($('#V6A').val());
        var V6B = Number($('#V6B').val());
        var V6C = Number($('#V6C').val());
        var V6D = Number($('#V6D').val());
        var V6E = Number($('#V6E').val());
        var V6F = Number($('#V6F').val());
        var V6G = Number($('#V6G').val());
        var V6H = Number($('#V6H').val());
        var V6I = Number($('#V6I').val());

        var id = '#counter6';
        

        if (totalV6 != V6A + V6B + V6C + V6D + V6E + V6F + V6G + V6H + V6I) {
            totalV6 = V6A + V6B + V6C + V6D + V6E + V6F + V6G + V6H + V6I;
            counter6 = 10 - totalV6;
            $('#counter6').html("Nog "+counter6+" punten");
        };

        if (counter6 == 0){
            equalZero(id);
        } else if (counter6 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    function CountV7() {
        var V7A = Number($('#V7A').val());
        var V7B = Number($('#V7B').val());
        var V7C = Number($('#V7C').val());
        var V7D = Number($('#V7D').val());
        var V7E = Number($('#V7E').val());
        var V7F = Number($('#V7F').val());
        var V7G = Number($('#V7G').val());
        var V7H = Number($('#V7H').val());
        var V7I = Number($('#V7I').val());

        var id = '#counter7';
        

        if (totalV7 != V7A + V7B + V7C + V7D + V7E + V7F + V7G + V7H + V7I) {
            totalV7 = V7A + V7B + V7C + V7D + V7E + V7F + V7G + V7H + V7I;
            counter7 = 10 - totalV7;
            $('#counter7').html("Nog "+counter7+" punten");
        };

        if (counter7 == 0){
            equalZero(id);
        } else if (counter7 < 0){
            belowZero(id);
        } else {
            notZero(id);
        };
    };

    $('.start_btn').click(function(){
        $('.start').slideUp("fast");
        $('.vraag1').delay(400).slideDown("fast");
        
    });

    $('.verder1').click(function(){
        $('.vraag1').slideUp("fast");
        $('.vraag2').delay(400).slideDown("fast");
        clearInterval(V1);
        
    });

    $('.verder2').click(function(){
        $('.vraag2').slideUp("fast");
        $('.vraag3').delay(400).slideDown("fast");
        clearInterval(V2);
    
    });

    $('.verder3').click(function(){
        $('.vraag3').slideUp("fast");
        $('.vraag4').delay(400).slideDown("fast");
        clearInterval(V3);
    
    });

    $('.verder4').click(function(){
        $('.vraag4').slideUp("fast");
        $('.vraag5').delay(400).slideDown("fast");
        clearInterval(V4);
    
    });

    $('.verder5').click(function(){
        $('.vraag5').slideUp("fast");
        $('.vraag6').delay(400).slideDown("fast");
        clearInterval(V5);
    
    });

    $('.verder6').click(function(){
        $('.vraag6').slideUp("fast");
        $('.vraag7').delay(400).slideDown("fast");
        clearInterval(V6);
    
    });




// Calculations
    $('.verder7').click(function(){
        clearInterval(V7);

        // Gathering values //
        var V1A = Number($('#V1A').val());
        var V1B = Number($('#V1B').val());
        var V1C = Number($('#V1C').val());
        var V1D = Number($('#V1D').val());
        var V1E = Number($('#V1E').val());
        var V1F = Number($('#V1F').val());
        var V1G = Number($('#V1G').val());
        var V1H = Number($('#V1H').val());
        var V1I = Number($('#V1I').val());
        
        var V2A = Number($('#V2A').val());
        var V2B = Number($('#V2B').val());
        var V2C = Number($('#V2C').val());
        var V2D = Number($('#V2D').val());
        var V2E = Number($('#V2E').val());
        var V2F = Number($('#V2F').val());
        var V2G = Number($('#V2G').val());
        var V2H = Number($('#V2H').val());
        var V2I = Number($('#V2I').val());

        var V3A = Number($('#V3A').val());
        var V3B = Number($('#V3B').val());
        var V3C = Number($('#V3C').val());
        var V3D = Number($('#V3D').val());
        var V3E = Number($('#V3E').val());
        var V3F = Number($('#V3F').val());
        var V3G = Number($('#V3G').val());
        var V3H = Number($('#V3H').val());
        var V3I = Number($('#V3I').val());

        var V4A = Number($('#V4A').val());
        var V4B = Number($('#V4B').val());
        var V4C = Number($('#V4C').val());
        var V4D = Number($('#V4D').val());
        var V4E = Number($('#V4E').val());
        var V4F = Number($('#V4F').val());
        var V4G = Number($('#V4G').val());
        var V4H = Number($('#V4H').val());
        var V4I = Number($('#V4I').val());
        
        var V5A = Number($('#V5A').val());
        var V5B = Number($('#V5B').val());
        var V5C = Number($('#V5C').val());
        var V5D = Number($('#V5D').val());
        var V5E = Number($('#V5E').val());
        var V5F = Number($('#V5F').val());
        var V5G = Number($('#V5G').val());
        var V5H = Number($('#V5H').val());
        var V5I = Number($('#V5I').val());

        var V6A = Number($('#V6A').val());
        var V6B = Number($('#V6B').val());
        var V6C = Number($('#V6C').val());
        var V6D = Number($('#V6D').val());
        var V6E = Number($('#V6E').val());
        var V6F = Number($('#V6F').val());
        var V6G = Number($('#V6G').val());
        var V6H = Number($('#V6H').val());
        var V6I = Number($('#V6I').val());

        var V7A = Number($('#V7A').val());
        var V7B = Number($('#V7B').val());
        var V7C = Number($('#V7C').val());
        var V7D = Number($('#V7D').val());
        var V7E = Number($('#V7E').val());
        var V7F = Number($('#V7F').val());
        var V7G = Number($('#V7G').val());
        var V7H = Number($('#V7H').val());
        var V7I = Number($('#V7I').val());

        // Voorzitter //
        var VZ = ((V1E + V2B + V3A + V4I + V5F + V6C + V7H)/70) * 100;

        // Vormer //
        var VM = ((V1G + V2F + V3C + V4B + V5D + V6H + V7F)/70) * 100;

        // Plant //
        var PL = ((V1D + V2H + V3D + V4E + V5H + V6A + V7G)/70) * 100;

        // Monitor //
        var MO = ((V1I + V2E + V3H + V4C + V5A + V6F + V7C)/70) * 100;

        // Bedrijfsman //
        var BM = ((V1H + V2A + V3I + V4D + V5B + V6G + V7A)/70) * 100;

        // Brononderzoeker //
        var BO = ((V1B + V2D + V3G + V4H + V5E + V6I + V7E)/70) * 100;

        // Groepswerker //
        var GW = ((V1C + V2G + V3F + V4A + V5C + V6B + V7I)/70) * 100;

        // Zorgdrager //
        var ZD = ((V1F + V2I + V3B + V4G + V5G + V6E + V7D)/70) * 100;

        // Specialist //
        var SP = ((V1A + V2C + V3E + V4F + V5I + V6D + V7B)/70) * 100;

        // print to html //
        $('#vz_val').html(Math.round(VZ*10)/10 + '%');
        $('#vm_val').html(Math.round(VM*10)/10 + '%');
        $('#pl_val').html(Math.round(PL*10)/10 + '%');
        $('#mo_val').html(Math.round(MO*10)/10 + '%');
        $('#bm_val').html(Math.round(BM*10)/10 + '%');
        $('#bo_val').html(Math.round(BO*10)/10 + '%');
        $('#gw_val').html(Math.round(GW*10)/10 + '%');
        $('#zd_val').html(Math.round(ZD*10)/10 + '%');
        $('#sp_val').html(Math.round(SP*10)/10 + '%');

        $('.vraag7').slideUp("slow");
        $('.uitslag').delay(400).slideDown(3000);

        
    
    });

    




});