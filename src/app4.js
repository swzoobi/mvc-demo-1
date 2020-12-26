import './app4.css';
import $ from 'jquery'

$('#square').on('mouseover',(e)=>{
  $('#square').addClass('black')
})

$('#square').on('mouseout',(e)=>{
  $('#square').removeClass('black')
})