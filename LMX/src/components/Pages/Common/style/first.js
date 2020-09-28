import styled from 'styled-components';

export const HeaderWrapper=styled.div`
background-color: rgba(255,255,255,0.1);
@-moz-keyframes loading {
  0%, 100% {
    -moz-transform: scale(1) rotateZ(0deg);
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }

  26% {
    -moz-transform: scale(1.1) rotateZ(12deg);
    transform: scale(1.1) rotateZ(12deg);
    opacity: .2;
  }

  76% {
    -moz-transform: scale(0.8) rotateZ(-8deg);
    transform: scale(0.8) rotateZ(-8deg);
    opacity: .6;
  }
}
@-webkit-keyframes loading {
  0%, 100% {
    -webkit-transform: scale(1) rotateZ(0deg);
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }

  26% {
    -webkit-transform: scale(1.1) rotateZ(12deg);
    transform: scale(1.1) rotateZ(12deg);
    opacity: .2;
  }

  76% {
    -webkit-transform: scale(0.8) rotateZ(-8deg);
    transform: scale(0.8) rotateZ(-8deg);
    opacity: .6;
  }
}
@keyframes loading {
  0%, 100% {
    -moz-transform: scale(1) rotateZ(0deg);
    -ms-transform: scale(1) rotateZ(0deg);
    -webkit-transform: scale(1) rotateZ(0deg);
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }

  26% {
    -moz-transform: scale(1.1) rotateZ(12deg);
    -ms-transform: scale(1.1) rotateZ(12deg);
    -webkit-transform: scale(1.1) rotateZ(12deg);
    transform: scale(1.1) rotateZ(12deg);
    opacity: .2;
  }

  76% {
    -moz-transform: scale(0.8) rotateZ(-8deg);
    -ms-transform: scale(0.8) rotateZ(-8deg);
    -webkit-transform: scale(0.8) rotateZ(-8deg);
    transform: scale(0.8) rotateZ(-8deg);
    opacity: .6;
  }
}
.loader {
  overflow: hidden;
  font-size: 35px;
}
.loader span {
  -moz-animation: loading 1s linear infinite -0.8s;
  -webkit-animation: loading 1s linear infinite -0.8s;
  animation: loading 1s linear infinite -0.8s;
  float: left;
}
.loader .span2 {
  -moz-animation: loading 1s linear infinite -0.2s;
  -webkit-animation: loading 1s linear infinite -0.2s;
  animation: loading 1s linear infinite -0.2s;
}
.loader .span3 {
  -moz-animation: loading 1s linear infinite -0.5s;
  -webkit-animation: loading 1s linear infinite -0.5s;
  animation: loading 1s linear infinite -0.5s;
}
.loader .span4 {
  -moz-animation: loading 1s linear infinite -1.1s;
  -webkit-animation: loading 1s linear infinite -1.1s;
  animation: loading 1s linear infinite -1.1s;
}
.loader .span5 {
  -moz-animation: loading 1s linear infinite -0.36s;
  -webkit-animation: loading 1s linear infinite -0.36s;
  animation: loading 1s linear infinite -0.36s;
}
.loader .span6 {
  -moz-animation: loading 1s linear infinite -0.65s;
  -webkit-animation: loading 1s linear infinite -0.65s;
  animation: loading 1s linear infinite -0.65s;
}
.loader .span7 {
  -moz-animation: loading 1s linear infinite -0.93s;
  -webkit-animation: loading 1s linear infinite -0.93s;
  animation: loading 1s linear infinite -0.93s;
}

.font1 {
  font-family: "Helvetica", Arial, sans-serif;
}
.font2 {
  font-family: Impact;
}

h2{
width:300px;
  font-size:18px;
  border-bottom:1px dashed #e2e2e2;
}
`;
export const Boss=styled.div`


`;
export const Frames=styled.div`
width:735px;
height:460px;
display: flex;
justify-content:space-between;
img{
 width:365px;
  height:480px;
  margin: 0 auto;
}
.Frames-Item{
  width:350px;
  height:460px;
  
  li{
    list-style:none;
    height:45px;
    line-height:35px;
    margin-bottom:5px;
    border-bottom:1px dashed #e2e2e2;
    i{
      font-size:25px;
      margin:20px 10px 0 10px;
      padding-bottom:10px;
    }
    label{
      font-size:18px;
      height:30px;
      text-align:center;   
    }
    a{
    color:#cc0079;
    }
    a:hover{
    text-decoration:none;
    }
    b{
    font-size:15px;
    }
  }
}
.Frames-Pic{
  width:365px;
  height:480px;
  overflow: hidden;
.ant-carousel .slick-slide {
  text-align: center;
  height: 480px;
  width:380px; 
}
.ant-carousel .slick-slide li{
  color: #fff;
}
 }
`;
export const Column=styled.div`

img{
border-radius:50%;
}
*{list-style-type:none;}
.case-content{overflow:hidden;}
.case-item{float:left;margin:0 15px;margin-bottom:20px}
.ih-item{position:relative;-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;transition:all .35s ease-in-out}
.ih-item,.ih-item *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
.ih-item a{color:#e2e2e2}
.ih-item a:hover{text-decoration:none}
.ih-item img{width:100%;height:100%}
.ih-item.circle,.ih-item.circle .img{position:relative;width:210px;height:210px;border-radius:50%}
.ih-item.circle .img:before{position:absolute;display:block;content:'';width:100%;height:100%;border-radius:50%;box-shadow:inset 0 0 0 16px rgba(255,255,255,.6),0 1px 2px rgba(0,0,0,.3);-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;transition:all .35s ease-in-out}
.ih-item.circle .img img{border-radius:50%}
.ih-item.circle .info{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;border-radius:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.ih-item.square{position:relative;width:316px;height:216px;border:8px solid #fff;box-shadow:1px 1px 3px rgba(0,0,0,.3)}
.ih-item.square .info{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.ih-item.circle.effect1 .spinner{width:220px;height:220px;border:10px solid #e2e2e2;border-right-color:#bdfff0;border-bottom-color:#5890fd;border-radius:50%;-webkit-transition:all .8s ease-in-out;-moz-transition:all .8s ease-in-out;transition:all .8s ease-in-out}
.ih-item.circle.effect1 .img{position:absolute;top:10px;bottom:0;left:10px;right:0;width:auto;height:auto}
.ih-item.circle.effect1 .img:before{display:none}
.ih-item.circle.effect1.colored .info{background:#1a4a72;background:rgba(26,74,114,.6)}
.ih-item.circle.effect1 .info{top:10px;bottom:0;left:10px;right:0;background:#333;background:rgba(0,0,0,.6);opacity:0;-webkit-transition:all .8s ease-in-out;-moz-transition:all .8s ease-in-out;transition:all .8s ease-in-out}
.ih-item.circle.effect1 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:24px;margin:0 30px;padding:55px 0 0;height:110px;text-shadow:0 0 1px white,0 1px 2px rgba(0,0,0,.3)}
.ih-item.circle.effect1 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,.5)}
.ih-item.circle.effect1 a:hover .spinner{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}
.ih-item.circle.effect1 a:hover .info{opacity:1}

`;

export const Apse=styled.div`
width:730px;

p{
 width:600px;
 color:#ce035e;
 font-size:15px;
}
`;