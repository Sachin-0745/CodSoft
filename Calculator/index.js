let expression="";
let num=document.querySelectorAll('.buttons');
Array.from(num).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')
        {
            expression=eval(expression);
            document.querySelector('input').value=expression;
        }
        else if(e.target.innerHTML == 'C'){
            expression="";
            document.querySelector('input').value=expression;
        }
        else
        {
            console.log(e.target);
            expression=expression+e.target.innerHTML;
            document.querySelector('input').value=expression;
        }
    })
});