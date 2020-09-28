import styled from 'styled-components';
export const Body=styled.div`  
width:100%;
height:100%;
color:#fff;
text-shadow: #7e26c9 1px 0 10px;
h4{
  color:#fff;
}
.wall{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
div#background{
  background: url(https://cdn.img.wenhairu.com/images/2020/08/24/wVcdX.jpg)no-repeat;
  z-index:-1;
    -webkit-animation: dd 100s linear infinite;
    -moz-animation: dd 100s linear infinite;
    -o-animation: dd 100s linear infinite;
    animation: dd 100s linear infinite;
    background-size: cover;
}
div#midground{
    background: url(https://cdn.img.wenhairu.com/images/2020/08/23/wO70f.png);
    z-index: -1;
    -webkit-animation: cc 100s linear infinite;
    -moz-animation: cc 100s linear infinite;
    -o-animation: cc 100s linear infinite;
    animation: cc 100s linear infinite;
}
div#foreground{
    background: url(https://cdn.img.wenhairu.com/images/2020/08/23/wOSjd.png);
    z-index: -1;
    -webkit-animation: cc 153s linear infinite;
    -o-animation: cc 153s linear infinite;
    -moz-animation: cc 153s linear infinite;
    animation: cc 153s linear infinite;
}
div#top{
    background: url(https://cdn.img.wenhairu.com/images/2020/08/23/wO70f.png);
    z-index: -1;
    -webkit-animation: dd 100s linear infinite;
    -o-animation: dd 100s linear infinite;
    animation: da 100s linear infinite;
}
@-webkit-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-o-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-moz-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@keyframes cc {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 600% 0;
    }
}

@keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-webkit-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-moz-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-ms-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
`;
export const Music=styled.div` 

width:1px;
height:1px;
margin-top:-50px;
`;
export const HeaderWrapper=styled.div`
width:1135px;
height:600px;
margin:80px auto;
background-color: rgba(255,255,255,0.1);
display: flex;
justify-content:space-between;
`;
export const SubNav=styled.div`
width:280px;
height:600px;
list-style:none;
text-align:center;
background-color: rgba(255,255,255,0.1);
`;
export const Portrait=styled.div`
  img{
    width:200px;
    height:200px;
    border-radius:50%;
    transition: all 0.6s;
    margin-top:20px;
  &.pic:hover{
    transform: scale(1.2)
  }
  }
@font-face {
font-family: 'Monoton';
font-style: normal;
font-weight: 400;
src: local('Monoton'), local('Monoton-Regular'), url(http://themes.googleusercontent.com/static/fonts/monoton/v4/AKI-lyzyNHXByGHeOcds_w.woff) format('woff');
}
p{
    text-align:center;
    height:60px;
}

a{ 
  font-size:50px;
  line-height:100px;
    text-decoration:none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
a{
    color:#FF1177;
    font-family:Monoton;
}
a:hover{
    -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
    -moz-animation: neon1 1.5s ease-in-out infinite alternate;
    animation: neon1 1.5s ease-in-out infinite alternate;
}
 p a:hover{
    color:#ffffff;
}
        @-webkit-keyframes neon1 {
    from {
        text-shadow: 0 0 10px #fff,
        0 0 20px  #fff,
        0 0 30px  #fff,
        0 0 40px  #FF1177,
        0 0 70px  #FF1177,
        0 0 80px  #FF1177,
        0 0 100px #FF1177,
        0 0 150px #FF1177;
    }
    to {
        text-shadow: 0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #FF1177,
        0 0 35px #FF1177,
        0 0 40px #FF1177,
        0 0 50px #FF1177,
        0 0 75px #FF1177;
    }
}
 @-moz-keyframes neon1 {
    from {
        text-shadow: 0 0 10px #fff,
        0 0 20px  #fff,
        0 0 30px  #fff,
        0 0 40px  #FF1177,
        0 0 70px  #FF1177,
        0 0 80px  #FF1177,
        0 0 100px #FF1177,
        0 0 150px #FF1177;
    }
    to {
        text-shadow: 0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #FF1177,
        0 0 35px #FF1177,
        0 0 40px #FF1177,
        0 0 50px #FF1177,
        0 0 75px #FF1177;
    }
}
@keyframes neon1 {
    from {
        text-shadow: 0 0 10px #fff,
        0 0 20px  #fff,
        0 0 30px  #fff,
        0 0 40px  #FF1177,
        0 0 70px  #FF1177,
        0 0 80px  #FF1177,
        0 0 100px #FF1177,
        0 0 150px #FF1177;
    }
    to {
        text-shadow: 0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #FF1177,
        0 0 35px #FF1177,
        0 0 40px #FF1177,
        0 0 50px #FF1177,
        0 0 75px #FF1177;
    }
}      

  span{
   color:#ffb3bd;
  margin:25px 0;
   font-size:18px;
   line-height:20px;
  }
  span:hover{
    color:#fff;
    font-size:17px;
    }
  p{
  margin-top:10px;
   height:105px;
    line-height:45px;
    font-size:16px;  
  }
  p:hover{
    color:#4b111e;
  }
  h2{
    width:285px;
    height:45px;
    font-size:20px;
  }
  h2:hover{
    font-size:19px;
    color:#55cde2;
  }
  a{
    color:#fd96a8;
    margin-right:5px;
  }
  a:hover{
    color:#191970;
  }
`;


export const Nav=styled.div`
width:1135px;
height:600px;
display: flex;
justify-content:space-between;
`;
export const NavItem=styled.div`
 width:75px;
 height:590px;
 font-size:55px;
 text-align:center;
 list-style:none;
li{
 background:#f7f7f7;
}
.ant-anchor-wrapper{
  overflow-y:hidden;
}
`;
export const Main=styled.div`
 width:740px;
 height:600px;
 overflow:hidden;
cite{
    width:760px;
    height:100%;  
    display:block;
    overflow-y: scroll;
    }
`;
