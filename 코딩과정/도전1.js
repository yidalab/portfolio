<script src="js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
<script>

    $(function(){
        //--------------------------전화랑 메일 클릭시
        $("a.pn_btn").click(function(){
        
            $(".pn").slideToggle();
            return false;
        });
        
        $("a.mail_btn").click(function(){
        
            $(".mail").slideToggle();
            return false;
        });
        
        
        
        //--------------------------아래 화살표 클릭시
                
       $("a.down").click(function(){
            
            var b = $('html,body').scrollTop();
           
            
            if((b>=0) && (b <1200)){
            
                $("html,body").animate({ scrollTop:1200 });
                $(".h_inner h2").css({display:'none'});
                $(".h_inner p").css({display:'none'});
                $(".t1").css({opacity:1});           
                $(".t2").css({opacity:1});
                
                            
            }
            
           if((b>=1200) && (b <2600)){
            
                $("html,body").animate({ scrollTop:2600 });
                $(".t1").css({opacity:0});           
                $(".t2").css({opacity:0});
                $(".t3").css({opacity:1}); 
                $(".t4").css({opacity:1});           
                
            }
            
            if((b>=2600) && (b <3900)){
            
                $("html,body").animate({ scrollTop:3900 });               
                $(".t3").css({opacity:0}); 
                $(".t4").css({opacity:0});           
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                
            }
            
             if((b>=3900) && (b <4700)){
            
                $("html,body").animate({ scrollTop:4700 });              
                $(".t3").css({opacity:0}); 
                $(".t4").css({opacity:0});           
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                
            }
            
            if((b>=4700) && (b <6400)){
            
                $("html,body").animate({ scrollTop:6400 });                           
                $(".t5").css({opacity:0});           
                $(".t6").css({opacity:0});           
                $(".t7").css({opacity:1});           
                $(".t8").css({opacity:1});           
                
            }
            
            return false;
            
            
        });
        
        
       
         //--------------------------위 화살표 클릭시
       $("a.up").click(function(){
            
            var b = $('html,body').scrollTop();
            
                  
            if((b<=6400) && (b>4700)){
            
                $("html,body").animate({ scrollTop:4700 });                         
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                $(".t7").css({opacity:0});           
                $(".t8").css({opacity:0});    
                
               
            }
            
            if((b<=4700) && (b>3900)){
                
                $("html,body").animate({ scrollTop:3900 });                         
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                $(".t7").css({opacity:0});           
                $(".t8").css({opacity:0});           
                
            }
            
            
             if((b<=3900) && (b>2600)){
            
                $("html,body").animate({ scrollTop:2600 });                         
                $(".t5").css({opacity:0});           
                $(".t6").css({opacity:0}); 
                $(".t3").css({opacity:1});           
                $(".t4").css({opacity:1});   
                                            
            
            }
            
             if((b<=2600) && (b>1200)){
            
                $("html,body").animate({ scrollTop:1200 });                         
                $(".t3").css({opacity:0});           
                $(".t4").css({opacity:0}); 
                $(".t2").css({opacity:1});           
                $(".t1").css({opacity:1});   
                       
                
            }
            
             if((b<=1200) && (b>0)){
            
                $("html,body").animate({ scrollTop:0 });                         
                $(".t2").css({opacity:0});           
                $(".t1").css({opacity:0});
                $(".h_inner h2").css({display:'block'});
                $(".h_inner p").css({display:'block'});
               
                
            }
            return false;
            
        });
        
        
        
        /////////////////스크롤시/////////////////////////
        
         $(window).scroll(function(){ //스크롤하는동안 //스크롤링사이트-메뉴바 참고
		  
			  var b = $(document).scrollTop(); 
			      
		  
			  if((b >=0) && (b < 1100)) {	//home 구간
				   
                
			  } 
	
			  if((b >= 1100) && (b < 2600)) {	//about
                    $(".h_inner h2").css({display: 'none'})
                    $(".h_inner p").hide(); 
                    $("h1").hide();
                    $(".t1").css({opacity:1});           
                    $(".t2").css({opacity:1});
              
				    
			  } 
							  
			  if((b >= 2600) && (b < 3900)) { //skill
                    $(".t1").css({opacity:0});           
                    $(".t2").css({opacity:0});
                    $(".t3").css({opacity:1}); 
                    $(".t4").css({opacity:1});               
				    
			  } 
              
              if((b >= 3900) && (b < 4700)) { //works1	
                    $(".t3").css({opacity:0}); 
                    $(".t4").css({opacity:0});           
                    $(".t5").css({opacity:1});           
                    $(".t6").css({opacity:1});     
                
			  } 
              
               if((b >= 4700) && (b < 5800)) { //works1	
                    $(".t3").css({opacity:0}); 
                    $(".t4").css({opacity:0});           
                    $(".t5").css({opacity:1});           
                    $(".t6").css({opacity:1});     
                
			  }
			  
			  if(b >= 5800) {	//contact                
                    $(".t5").css({opacity:0}); 
                    $(".t6").css({opacity:0});           
                    $(".t7").css({opacity:1});           
                    $(".t8").css({opacity:1});  
				       
			  } 						  
							  
		  
	  });
      
      
       $(window).scroll(function(){
            
            var b = $(document).scrollTop();
            
                  
            if((b<=5800) && (b>4700)){            
                                        
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                $(".t7").css({opacity:0});           
                $(".t8").css({opacity:0});    
                
               
            }
            
            if((b<=4700) && (b>3900)){
                
                                         
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                $(".t7").css({opacity:0});           
                $(".t8").css({opacity:0});           
                
            }
            
            
             if((b<=3900) && (b>2600)){
            
                                        
                $(".t5").css({opacity:0});           
                $(".t6").css({opacity:0}); 
                $(".t3").css({opacity:1});           
                $(".t4").css({opacity:1});   
                                            
            
            }
            
             if((b<=2600) && (b>1100)){
            
                                    
                $(".t3").css({opacity:0});           
                $(".t4").css({opacity:0}); 
                $(".t2").css({opacity:1});           
                $(".t1").css({opacity:1});   
                       
                
            }
            
             if((b<=1100) && (b>0)){            
                                   
                $(".t2").css({opacity:0});           
                $(".t1").css({opacity:0});
                $(".h_inner h2").css({display:'block'});
                $(".h_inner p").css({display:'block'});
               
                
            }
           
            
        });
        
            
            ///////////////////////마우스휠////////////////////
            var k = [ 0, 1200, 2600, 3900, 4700, 6400 ]
            var a = 0;
	
	
            $("body").on("mousewheel",function(e,delta) {

                if(delta < 0) { //휠을 아래로 돌렸을때
                    a++;	
                    if( a>=5 ){ a = 5; }                    
                   
                } 
                else { //휠을 위로 돌렸을때
                    a--;
                    if( a<=0 ){ a = 0; }                    
                }

        $('html,body').stop().animate({ scrollTop:k[a] },400); //a값은 1씩 증가하거나 줄어들기 때문에 k의 배열값과 일치함
                
                
            
            ////////휠 아래로/////////////
            
            $("body").on("mousewheel", function() {
            
            var b = $('html,body').stop().scrollTop(); //휠을 돌릴 때만 판단.
           
            
            if((b>=0) && (b <1200)){            
                $("html,body").animate({ scrollTop:1200 });
                
             
                            
            }
            
           if((b>=1200) && (b <2600)){
            
                $("html,body").animate({ scrollTop:2600 });
                     
                
            }
            
            if((b>=2600) && (b <3900)){
            
                $("html,body").animate({ scrollTop:3900 });      
                
            }
            
             if((b>=3900) && (b <4700)){
            
                $("html,body").animate({ scrollTop:4700 });               
                
            }
            
            if((b>=4700) && (b <6400)){
            
                $("html,body").animate({ scrollTop:6400 });                      
                     
                
            }
            
            return false;
            
            
            
           
            
            
        });
            
                
                
    });

    
    });



</script>