$(function(){
		//$("#pagetwo").load("../html/人人赚/index.html",function(){ $("#pagetwo").fadeIn(100);
			//$("#pagetwo button").click(function(){
		//	alert("aa");
			//})
		//}
  // $("#pagetwo").load("",function(){ $("#pagetwo").fadeIn(100);})

   
   
   $.ajax({
        url: "../myweb.html",
        type: "POST",
         function(data,status){
		  alert("数据: " + data + "状态: " + status);
		}),
        async: false,
    })
   
   })
