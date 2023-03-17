$(document).on('keyup','emailFront',function(e){
	//입력값 마지막 글자가 @ 일경우
	if($('#emailFront').val().charAt($('#emailFront').val().length-1) ==='@'){
	var text = $('emailFront').val();
	var count = 0; //특정 문자 입력 시 카운트
	var pos = text.indexOf('@'); //'@'의 순서
	
	while(pos !== -1){
	count++;
	pos = text.indexOf('@',pos + 1);
	}
//두번 째 @ 부터는 팝업 띄우지 않기
	if(count == 1){
	$('#emailFront').blur();
	utils.popup.open('popEmail'); //popup 창 열기
	}
}
});

$(document).on("click","#email_list > li", function(){
var value = $(this).find("input[name='inputEmail']").val();
var value_result = $('#emailFront').val();

$('#emailFront').val(value_result + value);
utils.popup.close("popEmail"); //popup창 닫기
});
