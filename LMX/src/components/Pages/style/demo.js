import styled from 'styled-components';

export const HeaderWrapper=styled.div`
z-index:-5;
position: fixed;
top: 50%;
left: 50%;
     .content {
        width:410px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-size: 35px;
        line-height: 40px;
        font-family: 'Muli';
        color: #ecf0f1;
        height: 160px;
        overflow: hidden;
    }
    .visible {
        font-weight: 600;
        overflow: hidden;
        height: 40px;
        padding: 0 40px;
    }
    .visible:before {
        content: '[';
        left: 0;
        line-height: 40px;
    }
    .visible:after {
        content: ']';
        position: absolute;
        right: 0;
        line-height: 40px;
    }
    .visible:after,
    .visible:before {
        position: absolute;
        top: 0;
        color: #ff8200;
        font-size: 42px;
        -webkit-animation: 2s linear 0s normal none infinite opacity;
        animation: 2s linear 0s normal none infinite opacity;
    }
    p {
        display: inline;
        float: left;
        margin: 0;
    }
    ul {
        margin-top: 0;
        padding-left: 10px;
        text-align: left;
        list-style: none;
        -webkit-animation: 12s linear 0s normal none infinite change;
        animation: 12s linear 0s normal none infinite change;
    }
    ul li {
        line-height: 40px;
        margin: 0;
    }
    @-webkit-keyframes opacity {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    @keyframes opacity {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    @-webkit-keyframes change {
        0%, 12%, 100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        17%,
        29% {
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
        }
        34%,
        46% {
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        51%,
        63% {
            -webkit-transform: translateY(-75%);
            transform: translateY(-75%);
        }
        68%,
        80% {
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        85%,
        97% {
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
        }
    }
    @keyframes change {
        0%, 12%, 100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        17%,
        29% {
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
        }
        34%,
        46% {
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        51%,
        63% {
            -webkit-transform: translateY(-75%);
            transform: translateY(-75%);
        }
        68%,
        80% {
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        85%,
        97% {
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
        }
    }
`;