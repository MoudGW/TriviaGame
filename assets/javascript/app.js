    var guess;
	var incorrect;
	var unguessed;
	var j;
	var count;
	var countdown;
	var loop;
	var quiz;
	var playSound;
	function init(){
     guess=0;
	 incorrect=0;
	 unguessed=0;
	 j=0;
	 count=30;
	quiz=[
	{Q:"what is the real name of The mother of dragons ?",R:"Emilia Clarke",I:"assets/images/emilia.jpg"},
	{Q:"what is the real name of Jonh Snow ?",R:"Kit Harington",I:"assets/images/john.jpg"},
	{Q:"what is the real name of littlefinger ?",R:"Aidan Gillen",I:"assets/images/finger.jpg"},
	{Q:"what is the real name of Arya Stark?",R:"Maisie Williams",I:"assets/images/Maisie.jpg"}];
	}
	$("document").ready(function(){
		$("#Start").click(function(){
	init();
    start();
	});
	function start(){
          display();
          countdown=setInterval(displaytime,1000);
            $(".childclass").click(function(){
                clearInterval(countdown);
                count=30;
                if($(this).text()===quiz[j].R){
                    $(this).text("correct");
                    $(this).append("<img style= 'zoom:40%;' src='"+quiz[j].I+"'/>");
                    guess++;
                }else{
                $(this).text("incorrect");
                $("#"+j.toString()).css("background-color", "#2ECC40");
                $(this).css("background-color", "#FF4136");
                $("#"+j.toString()).append("<img style= 'zoom:40%;' src='"+quiz[j].I+"'/>");
                incorrect++;
                }
              j++;
             loop=setTimeout(start,5000);
             end();
            });
	}
	function displaytime(){
             $("#anim").text(count);
		    count=count-1;
		    if(count<0)
		    {
		    count=30;
		    clearInterval(countdown);
		    $("#"+j.toString()).text("Out of Time");
		    $("#"+j.toString()).css("background-color", "#2ECC40");
		    $("#"+j.toString()).append("<img style= 'zoom:40%;' src='"+quiz[j].I+"'/>");
		    unguessed++; 
            loop=setTimeout(start,5000);
            j++;
            end();
		    }
	}
	function display(){
		$("#game").empty();
		$("#game").css("padding"," 25px");
	    $("#game").append("<div id='clock'><div id='anim'>"+count+"</div><div id='counter'></div></div>");
		$("#game").append(quiz[j].Q).css("font-size", "20px");
		$("#game").append("<div id='Answer'></div>");
		for(var i=0;i<quiz.length;i++)
		{
			$("#Answer").append("<span class='childclass' id="+i.toString()+">"+quiz[i].R+"</span>"); 
		}
		$(".childclass").hover(function(){
			$(this).css("font-size", "20px");
			$(this).css("background-color", "#2ECC40");
		}, function(){
			$(this).css("font-size", "18px");
			$(this).css("background-color","");
		});
	}
	function end(){
		if(j>quiz.length-1)
		    {
		    clearTimeout(loop);
		    setTimeout(function(){$("#game").empty();
			$("#game").append("<div>unguessed :"+unguessed+"</div");
			$("#game").append("<div>incorrect :"+incorrect+"</div");
			$("#game").append("<div>correct :"+guess+"</div");
			$("#game").append("<button class='button' id='over'>Start over</button>");
				$("#over").click(function(){
					   init();
                       start();
				});
            },1000);
	     }}
    
    });
 

