function renderIFrame() {
    document.getElementById('inputBox').style.display = 'none';
    return false;
}

$(document).ready(function(){
	$('#displayedData').click(function(){
		$('.displayedDataactive').hide();
	});
	$('#searchFor').click(function(){
		$('.displayedData').show();
	});
});