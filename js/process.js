Framework7.prototype.plugins.rufo = function (app, params) {
    if (!params) return;

    return {
        hooks: {
            appInit: function () {
                console.log ("Yehey");

                    console.log("yehey");
                    $$("#mean").on('click',function(){

                    var peoplelist = $$("input[data-cmd='peoplelist']").val().split(',');
                    console.log(peoplelist);
                        $.each(peoplelist,function(a,b){
                            peoplelist[a] = parseInt(peoplelist[a]);
                        
                
                    });

                            console.log(peoplelist);
            });
            }
        }
    };
};

var $$ = Dom7;
var app = new Framework7({
	rufo:true
});

