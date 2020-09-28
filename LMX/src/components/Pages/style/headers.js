import styled from 'styled-components';

export const HeaderWrapper=styled.div`
.out{
  position:fixed;
  top:0;
  width:0;
  height:0;
  z-index:1;
}
ul,li{list-style: none; padding: 0; margin: 0;}
.clearfix:after{ content:""; display:block; clear:both; height:0; visibility:hidden;}
.clearfix{ zoom:1;}


.btn7{position:relative;color:#fff; background:#17A086; border:1px solid #17A086;-webkit-transition: background-color .3s, color .3s;transition: background-color .3s, color .3s}
.btn7:before {content: '';position: absolute;top: -15px;left: -15px;bottom: -15px;right: -15px;background: inherit;z-index: -1;opacity: 0.5;
-webkit-transform: scale3d(.6, .4, 1);transform: scale3d(.6, .4, 1); display:none\\9;}
.btn7:hover {background:#1DCBA8; border-color:#1DCBA8;-webkit-transition: background-color .1s .3s, color .1s .3s;transition: background-color .1s .3s, color .1s .3s;-webkit-animation: anim-moema-1 .3s forwards;animation: anim-moema-1 .3s forwards}
.btn7:hover:before {-webkit-animation: anim-moema-2 .3s .3s forwards;animation: anim-moema-2 .3s .3s forwards;}
@-webkit-keyframes anim-moema-1 {
60% {
-webkit-transform:scale3d(.8, .8, 1);
transform:scale3d(.8, .8, 1)
}
85% {
-webkit-transform:scale3d(1.1, 1.1, 1);
transform:scale3d(1.1, 1.1, 1)
}
100% {
-webkit-transform:scale3d(1, 1, 1);
transform:scale3d(1, 1, 1)
}
}
@keyframes anim-moema-1 {
60% {
-webkit-transform:scale3d(.8, .8, 1);
transform:scale3d(.8, .8, 1)
}
85% {
-webkit-transform:scale3d(1.1, 1.1, 1);
transform:scale3d(1.1, 1.1, 1)
}
100% {
-webkit-transform:scale3d(1, 1, 1);
transform:scale3d(1, 1, 1)
}
}
@-webkit-keyframes anim-moema-2 {
to {
opacity:0;
-webkit-transform:scale3d(1, 1, 1);
transform:scale3d(1, 1, 1)
}
}
@keyframes anim-moema-2 {
to {
opacity:0;
-webkit-transform:scale3d(1, 1, 1);
transform:scale3d(1, 1, 1)
}
}

.btn13{ border:1px solid #d0d0d0;background:#ffb2ad; position:relative; color: #666; overflow: hidden; -webkit-transition: all .6s;transition: all .6s;}
.btn13:hover{ color:#fff; border-color:#FF9900;}
.btn13 .bgsqr1{content: '';width: 0;height: 0;-webkit-transform: rotate(360deg); transform: rotate(360deg);border-style: solid;border-width: 0; border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent; border-left-color:#FF9900;position: absolute;bottom: 0;left: 0; -webkit-transition: all 0.6s; transition: all 0.6s;}
.btn13 .bgsqr2{content: '';width: 0;height: 0;-webkit-transform: rotate(360deg);transform: rotate(360deg);border-style: solid;border-width: 0; border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent; border-right-color:#FF9900;position: absolute;top: 0; right: 0;-webkit-transition: all 0.6s; transition: all 0.6s;}
.btn13:hover .bgsqr1{ border-width:50px 260px;}
.btn13:hover .bgsqr2{ border-width:50px 260px;}
.btn13 span{ position:relative; z-index:1;}


#components-layout-demo-custom-trigger .trigger {
  font-size: 22px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  z-index:1px;
  transition: color 0.3s;  
}
.trigger {
  height:50px;  
  width:50px;
  font-size: 50px;  
  z-index:1px;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;  
  z-index:1px;
}

.site-layout-background {
  background-color: rgba(255,255,255,0.1);
   padding:0;
   height:50px;
   width:50px;
   z-index:1
}

.btn11{ border:1px solid #d0d0d0;background:red;position:relative; color: #666; overflow: hidden; -webkit-transition: all .6s;transition: all .6s;}
.btn11:hover{ color:#fff; border-color:#5384B1;}
.btn11 .bgsqr1{content: '';width: 0;height: 0;-webkit-transform: rotate(360deg); transform: rotate(360deg);border-style: solid;border-width: 0; border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent; border-left-color:#5384B1;position: absolute;bottom: 0;left: 0; -webkit-transition: all 0.6s; transition: all 0.6s;}
.btn11 .bgsqr2{content: '';width: 0;height: 0;-webkit-transform: rotate(360deg);transform: rotate(360deg);border-style: solid;border-width: 0; border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-top-color:#5384B1; position: absolute;top: 0; left: 0;-webkit-transition: all 0.6s; transition: all 0.6s;}
.btn11 .bgsqr3{content: '';width: 0;height: 0;-webkit-transform: rotate(360deg);transform: rotate(360deg);border-style: solid;border-width: 0; border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;border-right-color:#5384B1; position: absolute;top: 0; right: 0;-webkit-transition: all 0.6s; transition: all 0.6s;}
.btn11 .bgsqr4{content: '';width: 0;height: 0;-webkit-transform: rotate(360deg);transform: rotate(360deg);border-style: solid;border-width: 0; border-left-color:transparent;border-right-color:transparent;border-top-color:transparent; border-bottom-color:#5384B1;position: absolute;bottom: 0; right: 0;-webkit-transition: all 0.6s; transition: all 0.6s;}
.btn11:hover .bgsqr1{ border-width:200px 0 0 200px;}
.btn11:hover .bgsqr2{ border-width:200px 200px 0 0;}
.btn11:hover .bgsqr3{ border-width:0 200px 200px 0;}
.btn11:hover .bgsqr4{ border-width:0 0 200px 200px;}
.btn11 span{ position:relative; z-index:1;}
`;