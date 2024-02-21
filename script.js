let timer = document.getElementById('timer');
let btn = document.getElementById('btn');

//Function for disabling the button 
function disable(){
    btn.disabled = true;
    setTimeout(() => {
        btn.disabled = false;
    },11000);
};

//function for timer using call back hell
function time(){
    setTimeout(() => {
        timer.innerHTML = '10';
        setTimeout(() =>{
            timer.innerHTML = '9';
            setTimeout(() =>{
                timer.innerHTML = '8';
                setTimeout(() =>{
                    timer.innerHTML = '7';
                    setTimeout(() =>{
                        timer.innerHTML = '6';
                        setTimeout(() =>{
                            timer.innerHTML = '5';
                            setTimeout(() =>{
                                timer.innerHTML = '4';
                                setTimeout(() =>{
                                    timer.innerHTML = '3';
                                    setTimeout(() =>{
                                        timer.innerHTML = '2';
                                        setTimeout(() =>{
                                            timer.innerHTML = '1';
                                            setTimeout(() =>{
                                                timer.innerHTML = 'Happy Independance Day!';
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
};