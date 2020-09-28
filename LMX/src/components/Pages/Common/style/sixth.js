import styled from 'styled-components';

export const HeaderWrapper= styled.div`
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
  -moz-animation: loading 1s linear infinite -0.122s;
  -webkit-animation: loading 1s linear infinite -0.122s;
  animation: loading 1s linear infinite -0.122s;
}
.font2 {
  font-family: Impact;
}
h2{
width:300px;
  font-size:18px;
  border-bottom:1px dashed #e2e2e2;
}
h2{
width:300px;
  font-size:18px;
  border-bottom:1px dashed #e2e2e2;
}
.clearfix:after{ content:""; display:block; clear:both; height:0; visibility:hidden;}
.clearfix{ zoom:1;}
a{
background:#1a9cff;
}
.btn9{ border:1px solid #d0d0d0;position:relative;color: #666;overflow: hidden;-webkit-transition: all .4s;transition: all .4s;}
.btn9:hover{ color:#fff; border-color:#1CBAB8;}
.btn9 .bgsqr1,.btn9 .bgsqr2,.btn9 .bgsqr3,.btn9 .bgsqr4{background:#1CBAB8; position:absolute; width:25%; height:0;-webkit-transition: height .4s;transition: height .4s;}
.btn9 .bgsqr1{ top:0; left:0;}
.btn9 .bgsqr2{ bottom:0; left:25%;}
.btn9 .bgsqr3{ top:0; left:50%;}
.btn9 .bgsqr4{ bottom:0; left:75%;}
.btn9:hover .bgsqr1,.btn9:hover .bgsqr2,.btn9:hover .bgsqr3,.btn9:hover .bgsqr4{ height:100%;}
.btn9 span{ position:relative; z-index:1;}

`;
export const Chat= styled.div`
#msgText{
width:720px;
height:400px;
margin:10px auto;
margin-left:10px;
border:none;
 background-color: rgba(255,255,255,0.1);
box-shadow:8px 8px 8px 0px #0095e8,-8px -8px 8px 0 #ed209a,2px 2px 2px 0 #f566ff inset ;

}
#names{
  width:100px;
  height:30px;
  margin-left:10px;
   box-shadow:-5px 2px 10px 2px red;
}
#msgs{
width:550px;
height:30px;
  margin-left:5px;
border-style:none;
box-shadow:-5px 2px 10px 2px lawngreen;
}
`;