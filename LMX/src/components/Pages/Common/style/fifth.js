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
.font1 {
  font-family: "Helvetica", Arial, sans-serif;
}
h2{
width:300px;
  font-size:18px;
  border-bottom:1px dashed #e2e2e2;
}
`;
export const Acid=styled.div`
width:730px;
margin-top:20px;
img{
  width:730px;
  height: 320px;
}
.ant-carousel .slick-slide {
  text-align: center;
  height: 320px;
  line-height: 320px;
  overflow: hidden;
}

.ant-carousel{
  color: #fff;
}
`;
export const Lisa=styled.div`
display: flex;
justify-content:flex-start;


`;
export const Bait=styled.div`
width:350px;

margin-top:35px;
list-style:none;
font-size:18px;

 li{
    list-style:none;
    height:45px;
    line-height:35px;
    margin-bottom:5px;
    border-bottom:1px dashed #e2e2e2;
    i{
      font-size:25px;
      margin:20px 10px 0 10px;
    }
    label{
      font-size:18px;
      height:30px;
      text-align:center;   
    }
    b{
    font-size:15px;
    }
  }}
`;
export const Acute=styled.div`
width:330px;
margin-top:65px;

#components-form-demo-control-ref .ant-btn {
  margin-right: 18px;
}
.ant-row .ant-form-item{
margin-top:40px;
}
`;