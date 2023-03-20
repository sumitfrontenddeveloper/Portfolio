// console.log("script running...")
// document.querySelector('.cross').style.display ='none';
// document.querySelector('.sidebar').style.display ='none';
// document.querySelector('.hamburger').addEventListener('click',()=>{
//     document.querySelector ('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector ('.sidebar').classList.contains('sidebarGo')){
//         document.querySelector ('.ham').style.display='inline'
//         document.querySelector ('.cross').style.display='none'
//     }
//     else{
//         document.querySelector ('.ham').style.display='none'
//         document.querySelector ('.cross').style.display='inline'
//         document.querySelector('.sidebar').style.display ='block';
        

//     }
// })

document.querySelector('.crossimg').style.display ='none';
document.querySelector('.sidebar').style.display ='none';
document.querySelector('.ham').addEventListener('click',()=>{
    document.querySelector('.crossimg').style.display ='block';
    document.querySelector('.sidebar').style.display ='block';
    document.querySelector('.ham').style.display ='none';
});
document.querySelector('.crossimg').addEventListener('click',()=>{
    document.querySelector('.crossimg').style.display ='none';
    document.querySelector('.sidebar').style.display ='none';
    document.querySelector('.ham').style.display ='block';
});
