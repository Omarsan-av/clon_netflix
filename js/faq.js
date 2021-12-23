let question = document.getElementsByClassName('faq-list__item--button');
let answer = document.querySelectorAll('.answer');
let svg = document.querySelectorAll('.svg-x');
let cont = 0;

for(let i = 0; i< question.length; i++)
{
   question[i].addEventListener('click', () =>
   {
      if(cont > 0 && position != i)
      {
         hideShow(position);
         showHide(i);
         position = i;
      }

      else 
      {
         if(answer[i].classList.contains('open'))
         {
            hideShow(i, position);            
            cont = 0
         }
         else 
         {
            showHide(i);
            cont ++;
            position = i;
         }
      }
   });
}

function hideShow (b)
{
   answer[b].classList.remove('open');
   answer[b].classList.add('closed');
   svg[b].classList.add('rotate');
}

function showHide (a)
{
   answer[a].classList.add('open');
   answer[a].classList.remove('closed');
   svg[a].classList.remove('rotate');
}