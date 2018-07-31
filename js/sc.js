	$(".menu__toggler").click(function(){
		$(".top-nav__menu--mob").slideToggle(100);
		$(".top-nav--mob").toggleClass("mob--menu_active", 500);
		$(".menu__burger").toggleClass("menu__burger--active", 500);
	})

	$(".disabler").click(function(){
		$(this).hide();
	})

	$(".top-block__text a").click(function() {
    	let navbar = document.getElementById('menu');
		var elementClick = $(this).attr("href");
		var destination = ($(elementClick).offset().top);
		$('html,body').animate({
		scrollTop: destination
		}, 1000);
		return false;
		});


	$(".top-nav a").click(function() {
    	let navbar = document.getElementById('menu');
		var elementClick = $(this).attr("href");
		var destination = ($(elementClick).offset().top);
		$('html,body').animate({
		scrollTop: destination
		}, 1000);
		return false;
		});

	$(".footer__menu a").click(function() {
    	let navbar = document.getElementById('menu');
		var elementClick = $(this).attr("href");
		var destination = ($(elementClick).offset().top);
		$('html,body').animate({
		scrollTop: destination
		}, 1000);
		return false;
		});

	$("#name_inp").on("focus", function(){
			$(".block__name span").css("color", "#3886be");
			$(this).css("border", "1px solid #3886be");
		});
		$("#name_inp").on("blur", function(){
			if($(this).val() == ""){
				$(".block__name span").css("color", "#959595");
				$(this).css("border", "1px solid #959595"); 
			}
			else {
				$(".block__name span").css("color", "#3886be");
				$(this).css("border", "1px solid #3886be");
			}
		});

		$("#surname_inp").on("focus", function(){
			$(".block__surname span").css("color", "#3886be");
			$(this).css("border", "1px solid #3886be");
		});
		$("#surname_inp").on("blur", function(){
			if($(this).val() == ""){
				$(".block__surname span").css("color", "#959595");
				$(this).css("border", "1px solid #959595");
			}
			else {
				$(".block__surname span").css("color", "#3886be");
				$(this).css("border", "1px solid #3886be");
			}
		});

		$("#email_inp").on("focus", function(){
			$(".block__email span").css("color", "#3886be");
			$(this).css("border", "1px solid #3886be");
		});
		$("#email_inp").on("blur", function(){
			if($(this).val() == ""){
				$(".block__email span").css("color", "#959595");
				$(this).css("border", "1px solid #959595");
			}
			else {
				$(".block__email span").css("color", "#3886be");
				$(this).css("border", "1px solid #3886be");
			}
		});

		$("#phone_inp").on("focus", function(){
			$(".block__phone span").css("color", "#3886be");
			$(this).css("border", "1px solid #3886be");
		});
		$("#phone_inp").on("blur", function(){
			if($(this).val() == ""){
				$(".block__phone span").css("color", "#959595");
				$(this).css("border", "1px solid #959595");
			}
			else {
				$(".block__phone span").css("color", "#3886be");
				$(this).css("border", "1px solid #3886be");
			}
		});

		$("#pass_inp").on("focus", function(){
			$(".block__pass span").css("color", "#3886be");
			$(this).css("border", "1px solid #3886be");
		});
		$("#pass_inp").on("blur", function(){
			if($(this).val() == ""){
				$(".block__pass span").css("color", "#959595");
				$(this).css("border", "1px solid #959595");
			}
			else {
				$(".block__pass span").css("color", "#3886be");
				$(this).css("border", "1px solid #3886be");
			}
		});

		$("#passconfirm_inp").on("focus", function(){
			$(".block_passconf span").css("color", "#3886be");
			$(this).css("border", "1px solid #3886be");
		});
		$("#passconfirm_inp").on("blur", function(){
			if($(this).val() == ""){
				$(".block_passconf span").css("color", "#959595");
				$(this).css("border", "1px solid #959595");
			}
			else {
				$(".block_passconf span").css("color", "#3886be");
				$(this).css("border", "1px solid #3886be");
			}
		});

		$("#legacy").change(function(){
			$(".legacy__box").toggleClass("legacy__box--checked");
		})


		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:4,
		    responsiveClass:true,
		    stagePadding: 40,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        800:{
		            items:2,
		            nav:false
		        },
		        1000:{
		            items:2,
		            nav:false,
		            loop:true
		        },
		        1500:{
		            items:4,
		            nav:false,
		            loop:true
		        }
		    }
		});

		$('.owl-carousel').on('changed.owl.carousel',function(property){
			console.log(property);
	    var current = property.item.index;
	    if(window.innerWidth > 1200){
	    var src = $(property.target).find(".owl-item").eq(current+1).addClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current).removeClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current-1).removeClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current+2).removeClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current+3).removeClass("item--active");
		var src2 = $(property.target).find(".owl-item").eq(current-2).removeClass("item--active");
		var src2 = $(property.target).find(".owl-item").eq(current+4).removeClass("item--active");
		var src2 = $(property.target).find(".owl-item").eq(current-3).removeClass("item--active");
		}
		else {
		  var src = $(property.target).find(".owl-item").eq(current+1).removeClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current).addClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current-1).removeClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current+2).removeClass("item--active");
	    var src2 = $(property.target).find(".owl-item").eq(current+3).removeClass("item--active");
		var src2 = $(property.target).find(".owl-item").eq(current-2).removeClass("item--active");
		var src2 = $(property.target).find(".owl-item").eq(current+4).removeClass("item--active");
		var src2 = $(property.target).find(".owl-item").eq(current-3).removeClass("item--active");	
		}
		});





			 var $this = $('#out_select'), numberOfOptions = $this.children().length;
						    $this.addClass('select-hidden'); 
						    $this.wrap('<div class="select" id="ss"></div>');
						    $this.after('<div class="select-styled select-styled-out" ></div>');

						    var $styledSelect = $this.next('div.select-styled-out');
						    $styledSelect.text($this.children('option').eq(0).text());
						  
						    var $list = $('<ul />', {
						        'class': 'select-options select-options-out'
						    }).insertAfter($styledSelect);
						  
						    for (var i = 0; i < numberOfOptions; i++) {
							    	$('<li />', {
							            text: $this.children('option').eq(i).text(),
							            rel: $this.children('option').eq(i).val()
							        }).appendTo($list);
						       

						    }
						  
						    var $listItems = $list.children('li');
						 	
						    $styledSelect.click(function(e) {
						
						        e.stopPropagation();


						        $('div.select-styled-out.active').not(this).each(function(){

						            $(this).removeClass('active').next('ul.select-options-out').hide();
						            
						        });

						        $(this).toggleClass('active').next('ul.select-options-out').toggle();
						        $list2.hide();
						        $list3.hide();

						    });
						  
						    $listItems.click(function(e) {

						        e.stopPropagation();
						        $styledSelect.text($(this).text().charAt(0).toUpperCase() + $(this).text().slice(1)).removeClass('active');
						        $this.val($(this).attr('rel'));
						        $list.hide();
						        $list2.hide();
						        $list3.hide();
						    	
						    });
						  
						    $(document).click(function() {

						        $styledSelect.removeClass('active');
						        $list.hide();
						        $list2.hide();
						        $list3.hide();

						    });


				 var $this = $('#in_select'), numberOfOptions = $this.children().length;
						    $this.addClass('select-hidden'); 
						    $this.wrap('<div class="in-select" id="in-ss"></div>');
						    $this.after('<div class="select-styled select-styled-in" ></div>');

						    var $styledSelect2 = $this.next('div.select-styled-in');
						    $styledSelect2.text($this.children('option').eq(0).text());
						  
						    var $list2 = $('<ul />', {
						        'class': 'select-options select-options-in'
						    }).insertAfter($styledSelect2);
						  
						    for (var i = 0; i < numberOfOptions; i++) {
							    	$('<li />', {
							            text: $this.children('option').eq(i).text(),
							            rel: $this.children('option').eq(i).val()
							        }).appendTo($list2);
						       

						    }
						  
						    var $listItems2 = $list2.children('li');
						 	
						    $styledSelect2.click(function(e) {
						
						        e.stopPropagation();


						        $('div.select-styled-in.active').not(this).each(function(){

						            $(this).removeClass('active').next('ul.select-options-in').hide();
						            
						        });
						        $(this).toggleClass('active').next('ul.select-options-in').toggle();
						        $list.hide();
						        $list3.hide();
						    });
						  
						    $listItems2.click(function(e) {

						        e.stopPropagation();
						        $styledSelect2.text($(this).text()).removeClass('active');
						        $this.val($(this).attr('rel'));
						        $list2.hide();
						        $list.hide();
						        $list3.hide();
						    	
						    });
						  
						    $(document).click(function() {

						        $styledSelect2.removeClass('active');
						        $list.hide();
						        $list2.hide();
						        $list3.hide();

						    });


			 var $this = $('#reason_select'), numberOfOptions = $this.children().length;
						    $this.addClass('select-hidden'); 
						    $this.wrap('<div class="reason-select" id="reason-ss"></div>');
						    $this.after('<div class="select-styled select-styled-reason" ></div>');

						    var $styledSelect3 = $this.next('div.select-styled-reason');
						    $styledSelect3.text($this.children('option').eq(0).text());
						  
						    var $list3 = $('<ul />', {
						        'class': 'select-options select-options-reason'
						    }).insertAfter($styledSelect3);
						  
						    for (var i = 0; i < numberOfOptions; i++) {
							    	$('<li />', {
							            text: $this.children('option').eq(i).text(),
							            rel: $this.children('option').eq(i).val()
							        }).appendTo($list3);
						       

						    }
						  
						    var $listItems3 = $list3.children('li');
						 	
						    $styledSelect3.click(function(e) {
						
						        e.stopPropagation();


						        $('div.select-styled-reason.active').not(this).each(function(){

						            $(this).removeClass('active').next('ul.select-options-reason').hide();
						            
						        });
						        $(this).toggleClass('active').next('ul.select-options-reason').toggle();
						        $list2.hide();
						        $list.hide();
						    });
						  
						    $listItems3.click(function(e) {

						        e.stopPropagation();
						        $styledSelect3.text($(this).text()).removeClass('active');
						        $this.val($(this).attr('rel'));
						        $list3.hide();
						        $list2.hide();
						        $list.hide();
						    	
						    });
						  
						    $(document).click(function() {

						        $styledSelect2.removeClass('active');
						        $list3.hide();
						        $list2.hide();
						        $list.hide();

						    });



		 var $this = $('#faq_select'), numberOfOptions = $this.children().length;
						    $this.addClass('select-hidden'); 
						    $this.wrap('<div class="faq-select" id="faq-ss"></div>');
						    $this.after('<div class="select-styled select-styled-faq" ></div>');

						    var $styledSelect4 = $this.next('div.select-styled-faq');
						    $styledSelect4.text($this.children('option').eq(0).text());
						  
						    var $list4 = $('<ul />', {
						        'class': 'select-options select-options-faq'
						    }).insertAfter($styledSelect4);
						  
						    for (var i = 0; i < numberOfOptions; i++) {
							    	$('<li />', {
							            text: $this.children('option').eq(i).text(),
							            rel: $this.children('option').eq(i).val()
							        }).appendTo($list4);
						       

						    }
						  
						    var $listItems4 = $list4.children('li');
						 	
						    $styledSelect4.click(function(e) {
						
						        e.stopPropagation();


						        $('div.select-styled-faq.active').not(this).each(function(){

						            $(this).removeClass('active').next('ul.select-options-faq').hide();
						            
						        });
						        $(this).toggleClass('active').next('ul.select-options-faq').toggle();
						        $list3.hide();
						        $list2.hide();
						        $list.hide();
						    });
						  
						    $listItems4.click(function(e) {

						        e.stopPropagation();
						        $styledSelect4.text($(this).text()).removeClass('active');
						        $this.val($(this).attr('rel'));
						        $list4.hide()
						        $list3.hide();
						        $list2.hide();
						        $list.hide();
						        swapAnswer($(this).text());
						    	
						    });
						  
						    $(document).click(function() {

						        $styledSelect4.removeClass('active');
						        $list4.hide();
						        $list3.hide();
						        $list2.hide();
						        $list.hide();

						    });




function swapAnswer(data) {
	switch(data.trim()) {
		case "Сколько стоят услуги сервиса?":
			$(".answer-2").hide("slide", {
				direction: "left",
			}, 200);
			$(".answer-1").delay(250).show("slide", {
				direction: "left"
			}, 200);
			break;
		case "Сколько весят услуги сервиса?":
			$(".answer-1").hide("slide", {
				direction: "left",
			}, 200);
			$(".answer-2").delay(250).show("slide", {
				direction: "left"
			}, 200);
			break;
		default:
			break; 
	}
}