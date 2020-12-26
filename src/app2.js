import './app2.css';
import $ from 'jquery'


let app2Index = localStorage.getItem('app2Index') || 0
console.log(app2Index)


$.each($('#nav>li'),(index,li)=>{
  $(li).on('click',(e)=>{
    console.log('iii',index)
    let li = $(e.currentTarget);
    li.siblings().removeClass('active');
    li.addClass('active');
    $('#content>div').removeClass('show')
    $(`#content>div:eq(${index})`).addClass('show')
    localStorage.setItem('app2Index',index)
  })
})
console.log('123',app2Index)
$(`#nav>li:eq(${app2Index})`).trigger('click')