$(function(){
	FastClick.attach(document.body);
	function audioAutoPlay(id){
    var audio = document.getElementById(id),
    play =function(){
    audio.play();
    document.removeEventListener("touchstart",play,false);
    };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady",function() {
    play();
    },false);
    document.addEventListener('YixinJSBridgeReady',function() {
    play();
    },false);
    document.addEventListener("touchstart",play,false);
    }
    $(document).snowfall('clear');
        $(document).snowfall({
            image: "./src/images/huaban.png",
            flakeCount:30,
            minSize: 5,
            maxSize: 22,
            maxSpeed:0.5
        });
    audioAutoPlay('myAudio');
	$('.content>div').fadeOut();
	$('.twolast').fadeOut();
	$('.foryou').fadeOut();
	$('.forYouMsg1').fadeOut();
	$('.forYouMsg2').fadeOut();
	$('.forYouMsg3').fadeOut();
	$('.forYouMsg4').fadeOut();
	$('.forYouMsg5').fadeOut();
	$('.forYouMsg6').fadeOut();
	$('.title').fadeOut();
	$(".threeforyou").fadeOut();
	$('.threecontent>div').fadeOut();
	$('.threeforYouMsg1').fadeOut();
	$('.threeforYouMsg2').fadeOut();
	$('.threeforYouMsg3').fadeOut();
	$('.threeforYouMsg4').fadeOut();
	$('.threeforYouMsg5').fadeOut();
	$('.threeforYouMsg6').fadeOut();
	$(".fourforyou").fadeOut();
	$('.fourcontent>div').fadeOut();
	$('.fourforYouMsg1').fadeOut();
	$('.fourforYouMsg2').fadeOut();
	$('.fourforYouMsg3').fadeOut();
	$('.fourforYouMsg4').fadeOut();
	$('.fourforYouMsg5').fadeOut();
	$('.fourforYouMsg6').fadeOut();
	$(".fiveforyou").fadeOut();
	$('.fivecontent>div').fadeOut();
	$('.fiveforYouMsg1').fadeOut();
	$('.fiveforYouMsg2').fadeOut();
	$('.fiveforYouMsg3').fadeOut();
	$('.fiveforYouMsg4').fadeOut();
	$('.fiveforYouMsg5').fadeOut();
	$('.fiveforYouMsg6').fadeOut();
	$(".sixforyou").fadeOut();
	$('.sixcontent>div').fadeOut();
	$('.sixforYouMsg1').fadeOut();
	$('.sixforYouMsg2').fadeOut();
	$('.sixforYouMsg3').fadeOut();
	$('.sixforYouMsg4').fadeOut();
	$('.sixforYouMsg5').fadeOut();
	$('.sixforYouMsg6').fadeOut();
	$(".sevenforyou").fadeOut();
	$('.sevencontent>div').fadeOut();
	$('.sevenforYouMsg1').fadeOut();
	$('.sevenforYouMsg2').fadeOut();
	$('.sevenforYouMsg3').fadeOut();
	$('.sevenforYouMsg4').fadeOut();
	$('.sevenforYouMsg5').fadeOut();
	$('.sevenforYouMsg6').fadeOut();
	$('.loveyou').fadeOut();
	$('#fullpage').fullpage({
		navigation:true,
		loopBottom:true,
		onLeave:function(index,nextIndex,direaction){
            if (index == 2 && nextIndex == 3 ) {
            	$('.title').fadeOut();
            	$('.title').html("2015&nbsp;&nbsp;夏");
            }
            if (index == 3 && nextIndex == 4 ) {
            	$('.title').fadeOut();
            	$('.title').html("2016&nbsp;&nbsp;三月");
            }
            if (index == 4 && nextIndex == 5 ) {
            	$('.title').fadeOut();
            	$('.title').html("2017&nbsp;&nbsp;秋");
            }
            if (index == 5 && nextIndex == 6 ) {
            	$('.title').fadeOut();
            	$('.title').html("2018&nbsp;&nbsp;八月");
            }
            if (index == 6 && nextIndex == 7 ) {
            	$('.title').fadeOut();
            	$('.title').html("2019&nbsp;&nbsp;夏");
            }
            if (index == 7 && nextIndex == 8 ) {
            	$('.title').fadeOut();
            }
		},
		afterLoad:function(anchorLink,index){			
			if (index == 2) {
				$('.title').fadeIn(5000);
				$('.twolast').fadeIn(7000);
				setTimeout(function(){
					$('.content>div').fadeIn(1000).click(function(e){
                        $(this).css({"transform":"rotateY(270deg)","transition":"all 2s"});
                        $(this).removeClass("key")
                        if (!$('.content>div').hasClass('key')) {
				    	    $('.foryou').fadeIn(4000).html("<p>致2014年的她</p>").click(function(){
				    	    	$(this).css({"transform":"rotateY(120deg) translate(800px) ","transition":"all 2s","transform-origin":"left",
                                            "-webkit-transform":"rotateY(120deg) translate(800px) ","-webkit-transition":"all 2s","-webkit-transform-origin":"left"
				    	                    })  
				    	    	$('.forYouMsg1').fadeIn();
				    	    	setTimeout(function(){
				    	    		$('.forYouMsg2').fadeIn();
				    	    		setTimeout(function(){
				    	    			$('.forYouMsg3').fadeIn();
				    	    			setTimeout(function(){
				    	    			    $('.forYouMsg4').fadeIn();
				    	    			    setTimeout(function(){
				    	    			        $('.forYouMsg5').fadeIn();  
				    	    			        setTimeout(function(){
				    	    			            $('.forYouMsg6').fadeIn();    
				    	    		            },3500)    
				    	    		        },3500)  
				    	    		    },3500)
				    	    		},3500)
				    	    	},3500)
				    	    });
				        }
				    });
				},2000)
			}
			if (index == 3) {
				$('.title').fadeIn(5000);
				setTimeout(function(){
					$('.threecontent>div').fadeIn(1000).click(function(e){
                        $(this).css({"transform":"rotateY(270deg)","transition":"all 2s"});
                        $(this).removeClass("key")
                        if (!$('.threecontent>div').hasClass('key')) {
				    	    $('.threeforyou').fadeIn(4000).html("<p>致2015年的她</p>").click(function(){
				    	    	$(this).css({"transform":"rotateY(120deg) translate(800px) ","transition":"all 2s","transform-origin":"left",
                                            "-webkit-transform":"rotateY(120deg) translate(800px) ","-webkit-transition":"all 2s","-webkit-transform-origin":"left"
				    	                    })  
				    	    	$('.threeforYouMsg1').fadeIn();
				    	    	setTimeout(function(){
				    	    		$('.threeforYouMsg2').fadeIn();
				    	    		setTimeout(function(){
				    	    			$('.threeforYouMsg3').fadeIn();
				    	    			setTimeout(function(){
				    	    			    $('.threeforYouMsg4').fadeIn();
				    	    			    setTimeout(function(){
				    	    			        $('.threeforYouMsg5').fadeIn();  
				    	    			        setTimeout(function(){
				    	    			            $('.threeforYouMsg6').fadeIn();    
				    	    		            },3500)    
				    	    		        },3500)  
				    	    		    },3500)
				    	    		},3500)
				    	    	},3500)
				    	    });
				        }
				    });
				},2000)
			}
			if (index == 4) {
				$('.title').fadeIn(5000);
				setTimeout(function(){
					$('.fourcontent>div').fadeIn(1000).click(function(e){
                        $(this).css({"transform":"rotateY(270deg)","transition":"all 2s"});
                        $(this).removeClass("key")
                        if (!$('.fourcontent>div').hasClass('key')) {
				    	    $('.fourforyou').fadeIn(4000).html("<p>致2016年的她</p>").click(function(){
				    	    	$(this).css({"transform":"rotateY(120deg) translate(800px) ","transition":"all 2s","transform-origin":"left",
                                            "-webkit-transform":"rotateY(120deg) translate(800px) ","-webkit-transition":"all 2s","-webkit-transform-origin":"left"
				    	                    })  
				    	    	$('.fourforYouMsg1').fadeIn();
				    	    	setTimeout(function(){
				    	    		$('.fourforYouMsg2').fadeIn();
				    	    		setTimeout(function(){
				    	    			$('.fourforYouMsg3').fadeIn();
				    	    			setTimeout(function(){
				    	    			    $('.fourforYouMsg4').fadeIn();
				    	    			    setTimeout(function(){
				    	    			        $('.fourforYouMsg5').fadeIn();  
				    	    			        setTimeout(function(){
				    	    			            $('.fourforYouMsg6').fadeIn();    
				    	    		            },3500)    
				    	    		        },3500)  
				    	    		    },3500)
				    	    		},3500)
				    	    	},3500)
				    	    });
				        }
				    });
				},2000)
			}
			if (index == 5) {
				$('.title').fadeIn(5000);
				setTimeout(function(){
					$('.fivecontent>div').fadeIn(1000).click(function(e){
                        $(this).css({"transform":"rotateY(270deg)","transition":"all 2s"});
                        $(this).removeClass("key")
                        if (!$('.fivecontent>div').hasClass('key')) {
				    	    $('.fiveforyou').fadeIn(4000).html("<p>致2017年的她</p>").click(function(){
				    	    	$(this).css({"transform":"rotateY(120deg) translate(800px) ","transition":"all 2s","transform-origin":"left",
                                            "-webkit-transform":"rotateY(120deg) translate(800px) ","-webkit-transition":"all 2s","-webkit-transform-origin":"left"
				    	                    })  
				    	    	$('.fiveforYouMsg1').fadeIn();
				    	    	setTimeout(function(){
				    	    		$('.fiveforYouMsg2').fadeIn();
				    	    		setTimeout(function(){
				    	    			$('.fiveforYouMsg3').fadeIn();
				    	    			setTimeout(function(){
				    	    			    $('.fiveforYouMsg4').fadeIn();
				    	    			    setTimeout(function(){
				    	    			        $('.fiveforYouMsg5').fadeIn();  
				    	    			        setTimeout(function(){
				    	    			            $('.fiveforYouMsg6').fadeIn();    
				    	    		            },3500)    
				    	    		        },3500)  
				    	    		    },3500)
				    	    		},3500)
				    	    	},3500)
				    	    });
				        }
				    });
				},2000)
			}
			if (index == 6) {
				$('.title').fadeIn(5000);
				setTimeout(function(){
					$('.sixcontent>div').fadeIn(1000).click(function(e){
                        $(this).css({"transform":"rotateY(270deg)","transition":"all 2s"});
                        $(this).removeClass("key")
                        if (!$('.sixcontent>div').hasClass('key')) {
				    	    $('.sixforyou').fadeIn(4000).html("<p>致2018年的她</p>").click(function(){
				    	    	$(this).css({"transform":"rotateY(120deg) translate(800px) ","transition":"all 2s","transform-origin":"left",
                                            "-webkit-transform":"rotateY(120deg) translate(800px) ","-webkit-transition":"all 2s","-webkit-transform-origin":"left"
				    	                    })  
				    	    	$('.sixforYouMsg1').fadeIn();
				    	    	setTimeout(function(){
				    	    		$('.sixforYouMsg2').fadeIn();
				    	    		setTimeout(function(){
				    	    			$('.sixforYouMsg3').fadeIn();
				    	    			setTimeout(function(){
				    	    			    $('.sixforYouMsg4').fadeIn();
				    	    			    setTimeout(function(){
				    	    			        $('.sixforYouMsg5').fadeIn();  
				    	    			        setTimeout(function(){
				    	    			            $('.sixforYouMsg6').fadeIn();    
				    	    		            },3500)    
				    	    		        },3500)  
				    	    		    },3500)
				    	    		},3500)
				    	    	},3500)
				    	    });
				        }
				    });
				},2000)
			}
			if (index == 7) {
				$('.title').fadeIn(5000);
				setTimeout(function(){
					$('.sevencontent>div').fadeIn(1000).click(function(e){
                        $(this).css({"transform":"rotateY(270deg)","transition":"all 2s"});
                        $(this).removeClass("key")
                        if (!$('.sevencontent>div').hasClass('key')) {
				    	    $('.sevenforyou').fadeIn(4000).html("<p>致2019年的她</p>").click(function(){
				    	    	$(this).css({"transform":"rotateY(120deg) translate(800px) ","transition":"all 2s","transform-origin":"left",
                                            "-webkit-transform":"rotateY(120deg) translate(800px) ","-webkit-transition":"all 2s","-webkit-transform-origin":"left"
				    	                    })  
				    	    	$('.sevenforYouMsg1').fadeIn();
				    	    	setTimeout(function(){
				    	    		$('.sevenforYouMsg2').fadeIn();
				    	    		setTimeout(function(){
				    	    			$('.sevenforYouMsg3').fadeIn();
				    	    			setTimeout(function(){
				    	    			    $('.sevenforYouMsg4').fadeIn();
				    	    			    setTimeout(function(){
				    	    			        $('.sevenforYouMsg5').fadeIn();  
				    	    			        setTimeout(function(){
				    	    			            $('.sevenforYouMsg6').fadeIn();    
				    	    		            },3500)    
				    	    		        },3500)  
				    	    		    },3500)
				    	    		},3500)
				    	    	},3500)
				    	    });
				        }
				    });
				},2000)
			}
			if (index == 8) {
				$(".twolast").fadeOut();
				$('.lastforyou').click(function(){
					$(this).fadeOut();
					$(".loveyou").fadeIn(2000);
				})
			}
		}
	});
})