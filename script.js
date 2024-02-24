let timer = document.getElementById('timer');
let btn = document.getElementById('btn');

//Function for disabling the button 
function disable(){
    btn.disabled = true;
    btn.style.boxShadow = '0px 0px 0px 0px rgb(80, 80, 80)';
    btn.style.backgroundColor = '#ffcccc';
    setTimeout(() => {
        btn.disabled = false;
        btn.style.backgroundColor = 'rgb(184, 0, 0)';
        btn.style.boxShadow = "2px 2px 2px 2px rgb(80, 80, 80)";
    },12000);
};

//function for timer using call back hell
function time(){
    setTimeout(() => {
        timer.style.fontSize = '45px';
        timer.innerHTML = '00:00:10';
        setTimeout(() =>{
            timer.innerHTML = '00:00:09';
            setTimeout(() =>{
                timer.innerHTML = '00:00:08';
                setTimeout(() =>{
                    timer.innerHTML = '00:00:07';
                    setTimeout(() =>{
                        timer.innerHTML = '00:00:06';
                        setTimeout(() =>{
                            timer.innerHTML = '00:00:05';
                            setTimeout(() =>{
                                timer.innerHTML = '00:00:04';
                                setTimeout(() =>{
                                    timer.innerHTML = '00:00:03';
                                    setTimeout(() =>{
                                        timer.innerHTML = '00:00:02';
                                        setTimeout(() =>{
                                            timer.innerHTML = '00:00:01';
                                            setTimeout(() =>{
                                                timer.style.fontSize = 'larger';
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
    },0);
};
