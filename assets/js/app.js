// An object literal

var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};

function alertCustom(text1, text2){
  var html = `<div class="alert-custom">
  <div class="content">
    <h4><span>`+text1+`</span> `+text2+`</h4>
  </div>
</div>`;
$('body').append(html)
}
(function() {
  // your page initialization code here
  // the DOM will be available here
  
  app.init();

  $('body').on('click','.btnEnviarOferta',function(e){
    e.preventDefault();

    const myModal = new bootstrap.Modal(document.getElementById('modalEnviarOferta'), {})

    myModal.show()
  })

  $("body").on('click','.alert-custom',function(e){
    $(this).remove();
  })
})();



$('#nav-icon3').click(function(){
	
	var target = $(this).data('alvo');
	if(!$(this).hasClass("open")){
			//$("header").toggleClass('fix');
			/*$("#banner").css({"margin-top":"100px"});	*/
			$(target).animate({
				right: '0',
			},500,function(){
				$("#nav-icon3").toggleClass('abrir');	
			})	
	}else{
		//$("header").toggleClass('fix');	
		//$("#banner").css({"margin-top":"0px"});
		$(target).animate({
				right: '-100%',
			},500,function(){
				$("#nav-icon3").toggleClass('abrir');	
			})
	}
	$(this).toggleClass('open');
});


