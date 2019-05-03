// JavaScript Document
function gotoPage(folder) {
	$("#myContent" ).load(folder);
	$("#myContent" ).load("slides/"+folder+"/html5.html");
	//$("#myContent" ).load("html5.html");
  }

// forQuestion
var scoreTotal = 0;
var q1Var=0;
var q2Var=0;
var q3Var=0;
var q4Var=0;
var q5Var=0;
var q6Var=0;
$(document).ready(function(){
	////////////////
	$('.sub-menu').hide();
	$("li:has(ul)").click(function(){
		$('.sub-menu').hide();
		$("ul",this).toggle('slow');
		});
	$('.menu-now').show('slow');
	////////
	$("#reset").hide();
	$("#errorForm").hide();
	$("#qStart").hide();
	$("#questions").hide();
	$("#qStart").slideDown( "slow" );
 	$("#result").hide();
	$("#qStartBtn").click(function() {
		$("#qStart").hide();
		$("#questions").slideDown( "slow" );
		});
	$("input[name='q1']").click(function() {
	q1Var=$('input:radio:checked[name="q1"]').val();
	});
	$("input[name='q2']").click(function() {
	q2Var=$('input:radio:checked[name="q2"]').val();	
	});
	$("input[name='q3']").click(function() {
	q3Var=$('input:radio:checked[name="q3"]').val();		
	});
	$("input[name='q4']").click(function() {
	q4Var=$('input:radio:checked[name="q4"]').val();		
	});
	$("input[name='q5']").click(function() {
	q5Var=$('input:radio:checked[name="q5"]').val();
	});
	$("input[name='q6']").click(function() {
	q6Var=$('input:radio:checked[name="q6"]').val();
	});
	$("input[name='reset']").click(function() {
	$('input[name*="q"]').attr('disabled', false);
	$("#result").slideUp( "slow" );
	$("#reset").hide();
	setTimeout(function(){ $( "#send" ).show("slow"); }, 2000);
	});
	$("input[name='send']").click(function() {
		if((q1Var==0)||(q2Var==0)||(q3Var==0)||(q4Var==0)||(q5Var==0)||(q6Var==0)){
			$("#errorForm").show("slow");
						}else{
							$("#send").hide();
							setTimeout(function(){ $( "#reset" ).show("slow"); }, 2000);
							$('input[name*="q"]').attr('disabled', 'disabled');
							$("#errorForm").hide();
scoreTotal=parseInt(q1Var)+parseInt(q2Var)+parseInt(q3Var)+parseInt(q4Var)+parseInt(q5Var)+parseInt(q6Var)-6;
if(parseInt(q1Var)==1){
	scoreTotal=0;
	}
if((scoreTotal<=5)||(parseInt(q1Var)==1)){
	$("#resultText").html('<p><strong>結果：<span class="scoreText">'+scoreTotal+'分</span></strong></p><p>完全不能承受風險，不適合投保本商品。</p>');
	}else if(scoreTotal<=8){
		$("#resultText").html('<p><strong>結果：<span class="scoreText">'+scoreTotal+'分</span></strong></p><p>風險承受度較低的謹慎型，較喜歡沒有風險的理財方式，偶而會做些風險低的小投資。<br/><br/>（適合購買<strong>RR1~RR2</strong>級投資標的）</p>');
		}else if(scoreTotal<=13){
	$("#resultText").html('<p><strong>結果：<span class="scoreText">'+scoreTotal+'分</span></strong></strong></p><p>風險承受度中等的穩健型，偏好平衡的投資策略，能接受適度的風險投資方式。<br/><br/>（適合購買<strong>RR1~RR3</strong>級投資標的）</p>');
	}else{
		$("#resultText").html('<p><strong>結果：<span class="scoreText">'+scoreTotal+'分</span></strong></strong></p><p>風險承受度很高的高度積極型，希望投資報酬能遠遠超過一般定存，可以接受投資損失。<br/><br/>（適合購買<strong>RR1~RR5</strong>級投資標的）</p>');
		}
$("#result").slideDown( "slow" );
			}//else 就計算
	});
});