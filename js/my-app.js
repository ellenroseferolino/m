Framework7.prototype.plugins.statistics = function (app, params) {
if (!params) return;
  
    //FUNCTIONS
    //MEAN
            var mean = function(num){
              var y = 0;
                $.each(num,function(a,b){
                    y = y + b;
                })
                return y/num.length;
            }
   //MMEDIAN       
           var median =  function(num){
                var middle = Math.floor(num.length/2);
                
                if (num.length % 2)
                    return num[middle];
                else
                    return (num[middle-1]+num[middle])/2.0;
            }
    //MODE
            var mode = function(num){

     if (num.length == 0)
        return null;

    var modeMap = {},
        maxEl = num[0],
        maxCount = 1;

    for(var i = 0; i < num.length; i++)
    {
        var el = num[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount)
        {
            maxCount = modeMap[el];
            if(num.length != 0)
           return("no mode");
      
        }
    }
    return maxEl;
            }


    return {
        hooks: {
            appInit: function () {

//BUTTON CLICK------------------------------------
                console.log("yehey");
                $$("#btn_calculate").on('click',function(){

	                var numbers = $$("input[data-cmd='numbers']").val().split('.');
	                $.each(numbers,function(a,b){
                        numbers[a] = parseInt(numbers[a]);
		            });
				          	var mean1 = mean(numbers);
                    var median1 = median(numbers);
                    var mode1 = mode(numbers);

                    var content = " <p><b>RESULTS</b></p> "+"Mean is : " + mean1 + "<br>" 
                                + "Median is : " + median1 + "<br>" 
                                + "Mode is : "+ mode1 ;

    document.getElementById("statsHere").innerHTML = content;
    
              });
	        }
	    }
    };
};

var $$ = Dom7;
var app = new Framework7({
    statistics:true
});

