import styled from 'styled-components';

export const HeaderWrapper=styled.div`
width:1135px;
height:600px;
margin:80px auto;
background:#fff;

display: flex;
justify-content:space-between;
`;
export const SubNav=styled.div`
width:280px;
height:600px;
list-style:none;
text-align:center;
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
  h1{
    width:285px;
    height:75px;
    font-size:50px;
    margin:15px 0;
    font-family:"微软雅黑";    
  }
  h1:hover{
    color:#290755;
  }
  span{
  margin:25px 0;
   font-size:14px;
   line-height:20px;
  }
  span:hover{
    color:#ff2ee5;
    font-size:16px;
    }
  p{
  margin-top:10px;
   height:120px;
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
    text-shadow: #ec27c9 1px 4px 36px;
  }
  h2:hover{
    font-size:19px;
    color:#55cde2;
  }
  a{
    color:#CD1076;
    margin-right:5px;
  }
  a:hover{
    color:#191970;
  }
`;


export const Nav=styled.div`
 width:835px;
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
// export const Frames=styled.div`
//
//
// `;