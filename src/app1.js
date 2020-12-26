import './app1.css';
import $ from 'jquery';

const increase = $('#increase');
const decrease = $('#decrease');
const multiply = $('#multiply');
const divide = $('#divide');

let num = Number(localStorage.getItem('app1Num')) || 100 ;
$('span.output').text(num)

const show = () =>{
  $('span.output').text(num)
  localStorage.setItem('app1Num',num)
}

increase.on('click',(e)=>{
  num +=1;
  show()
})

decrease.on('click',(e)=>{
  num -= 1;
  show();
})

multiply.on('click',()=>{
  num *= 2;
  show();
})

divide.on('click',() =>{
  num /= 2;
  show()
})