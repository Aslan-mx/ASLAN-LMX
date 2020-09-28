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
.loader .span8 {
  -moz-animation: loading 1s linear infinite -0.2s;
  -webkit-animation: loading 1s linear infinite -0.2s;
  animation: loading 1s linear infinite -0.2s;
}
.loader .span9 {
  -moz-animation: loading 1s linear infinite -0.93s;
  -webkit-animation: loading 1s linear infinite -0.93s;
  animation: loading 1s linear infinite -0.93s;
}
.font1 {
  font-family: "Helvetica", Arial, sans-serif;
}
h2{
  width:300px;
  font-size:18px;
  margin:5px 0;
}
a{
  width:720px;
  background:#F8F8FF;
}
.clearfix:after{ content:""; display:block; clear:both; height:0; visibility:hidden;}
.clearfix{ zoom:1;}
.btn5{position:relative; border:1px solid #e9e9e9;border:1px solid rgba(0,0,0,0.2); color:#666;}
.btn5:hover{ color:#fff; background:#FF1493;transition-delay:0.3s; -webkit-transition-delay:0.3s;}
.btn5 > div{ position:absolute;border-style:solid;  border-width:0; width:0.6em; height:0.6em;transition:all 0.3s; -webkit-transition:all 0.3s; }
.btn5 .line_tl{ left:-1px; top:-1px; border-top-width:1px; border-left-width:1px;border-color:#000;}
.btn5 .line_tr{ right:-1px; top:-1px; border-top-width:1px; border-right-width:1px;border-color:#000;}
.btn5 .line_bl{ left:-1px; bottom:-1px; border-bottom-width:1px; border-left-width:1px;border-color:#000;}
.btn5 .line_br{ right:-1px; bottom:-1px; border-bottom-width:1px; border-right-width:1px;border-color:#000;}
.btn5 .line_all{ width:auto; height:auto; border-color:#E77E22; top:-1px; bottom:-1px; left:-1px; right:-1px; transition:border-width 0s; -webkit-transition:border-width 0s; }
.btn5:hover > div{ width:55%; height:55%;}
.btn5:hover .line_all{width:auto; height:auto; border-width:1px; transition-delay:0.3s; -webkit-transition-delay:0.3s;}
.btn5 span{ position:relative; z-index:1; }
`;
export const Flower=styled.div`
background-color: rgba(255,255,255,0.1);
list-style:none;

li{
  float:left; 

img{
  width:210px;
  height:300px;
   margin:12px 15px;
}
}
`;