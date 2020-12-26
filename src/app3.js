import './app3.css';
import $ from 'jquery'

let endFlag = localStorage.getItem('endFlag') || 'no'
$('#ball').addClass(endFlag === 'yes'?'end':'start')

$('#ball').on('click',(e)=>{
  let ball = $(e.currentTarget)

  if(ball.hasClass('start')){
    ball.addClass('toEnd').addClass('end').removeClass('start')
    setTimeout(()=>{
      ball.removeClass('toEnd')
    },2000)
  }else if(ball.hasClass('end')){
    ball.addClass('toStart').addClass('start').removeClass('end')
    setTimeout(()=>{
      ball.removeClass('toStart')
    },2000)
  }
  localStorage.setItem('endFlag',$('#ball').hasClass('end')?'yes':'no')
})