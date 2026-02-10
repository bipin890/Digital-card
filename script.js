new Typed('#typed',{
strings:[
'Hello 👋',
'I am Bipin ',
'COMPUTER SCIENCE ',
'Scan QR to connect 📷'
],
typeSpeed:50,
backSpeed:20,
loop:true
});


new QRCode(document.getElementById('qrcode'),{
text:'https://bipinthapa-phi.vercel.app/',
width:140,
height:140,
colorDark:'#00ffff',
colorLight:'#ffffff'
});


VanillaTilt.init(document.querySelector('.card'),{
max:15,
speed:400,
glare:true,
'max-glare':0.3
});