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
  -moz-animation: loading 1s linear infinite -0.122s;
  -webkit-animation: loading 1s linear infinite -0.122s;
  animation: loading 1s linear infinite -0.122s;
}
.loader .span9 {
  -moz-animation: loading 1s linear infinite -0.5s;
  -webkit-animation: loading 1s linear infinite -0.5s;
  animation: loading 1s linear infinite -0.5s;
}
.loader .span10 {
  -moz-animation: loading 1s linear infinite -0.178s;
  -webkit-animation: loading 1s linear infinite -0.178s;
  animation: loading 1s linear infinite -0.178s;
}
.loader .span11 {
  -moz-animation: loading 1s linear infinite -0.5s;
  -webkit-animation: loading 1s linear infinite -0.5s;
  animation: loading 1s linear infinite -0.5s;
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
export const Menu=styled.div`
display: flex;
justify-content:space-between;
`;
export const Hot=styled.div`
width:850px;
	.progress-title{
		font-size: 16px;
		font-weight: 700;
		color: #fdf2fc;
        text-shadow: #ec27c9 1px 0 10px;
		margin: 0 0 20px;
	}
	.progress{
		height: 10px;
		background: #333;
		border-radius: 0;
		box-shadow: none;
		margin-bottom: 30px;
		overflow: visible;
	}
	.progress .progress-bar{
		position: relative;
		-webkit-animation: animate-positive 2s;
		animation: animate-positive 2s;
	}
	.progress .progress-bar:after{
		content: "";
		display: inline-block;
		width: 9px;
		background: #fff;
		position: absolute;
		top: -10px;
		bottom: -10px;
		right: -1px;
		z-index: 1;
		transform: rotate(35deg);
	}
	.progress .progress-value{
		display: block;
		font-size: 16px;
		font-weight: 600;
		color: #FF1493;
		position: absolute;
		top: -30px;
		right: -25px;
	}
	@-webkit-keyframes animate-positive{
		0%{ width: 0; }
	}
	@keyframes animate-positive {
		0%{ width: 0; }
	}
a{ 
  color: rgba(255, 255, 255, 0.6);
  outline: none;
  text-decoration: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
a:hover,a:focus{
  color:#74777b;
  text-decoration: none;
}	
`;
export const They=styled.div`
height:1050px;
padding-top:50px;
margin:20px 0 0 20px;
ul {
  list-style: none;
  width: 260px;
}
li {
  float: left;
  height: 96px;
}
.hex:nth-last-child(1n+0){
margin-top:-23px;
  margin-left:10px;
}
.hex:nth-last-child(2n+0){
margin-top:-23px;
}
.hex:nth-last-child(3n+0){
  margin-left:74px;
margin-top:-23px;
}

.hex {
  overflow: hidden;
  display: block;
  width: 120px;
  height: 136px;
  transform: rotate(-60deg) skewY(30deg);
    .hexIn {
      overflow:hidden;
      display: block;
      width: 120px;
      height: 136px;
      line-height: 116px;
      text-align: center;
      transform: skewY(-30deg) rotate(60deg);
        img{
          left: -100%;
          right: -100%;
          width: auto;
          height: 100%;
          margin: 0 auto;
          }   
      }
}
`;
export const New=styled.div`
width:390px;
margin-left:5px;
h4{
  font-size:20px;
}
h5{
  font-size:16px;
  border-bottom:1px dashed #e2e2e2;
}
p{
margin:5px 0;
}
i{
  width:370px;
  display:block;
  margin-top:10px;
}
    .container {
      width: 350px;
      background-color: #ddd;
      margin-left:10px;
        padding: 0;
    }
    
    .skills {
      text-align: right;
      padding-right: 20px;
      line-height: 10px;
      color: white;
    }
    .wechat{width: 85%; background-color: #4cff24;}
    .vue{width: 85%; background-color: #9932CC;}
    .vue-router{width: 80%; background-color: #00BFFF;}
    .vuex{width: 87%; background-color: #00FF7F;}
    .ui{width: 94%; background-color: #fa0086;}
    
    .react{width: 92%; background-color: #FFA500;}
    .react-router{width: 70%; background-color: #8B4513;}
    .redux{width: 80%; background-color: #FF4500;}
    .styled{width: 97%; background-color: #8A2BE2;}
    .js {width: 70%; background-color: #f44336;}
    .jquery{width: 75%; background-color: #00BFFF;}
    .group{width: 55%; background-color: #00FF7F;}
    .flex{width: 75%; background-color: #1400fa;}
    .design{width: 65%; background-color: #808080;}
   
`;