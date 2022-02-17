import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    .content {
        height: 70px;
        display:flex;
        justify-content: space-between;
    }
    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
    
`
export const HeaderLeft = styled.div`
    display:flex ;
    .logo {
        display:block;
        width: 176px;
        height: 70px;
        background-position: 0 0 ;
    }
    .selectItem {
        padding: 0 19px;
        text-align: center;
        line-height: 70px;
        color: #ccc;
        font-size: 16px;
        &:hover ,&.active {
            background: #000;
            text-decoration: none;
            color: #fff;
        }
        &.active {
            position: relative;
            i {
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%,0);
                background-position: -226px 0;
            }
        }
        &:last-child {
            position: relative;
            ::after {
                position: absolute;
                content: '';
                width: 28px;
                height: 19px;
                background-image:url(${require("@/assets/img/sprite_01.png")});
                background-position: -190px 0;
                top: 20px;
                right: -15px;
            }
        }
        
    }

`
export const HeaderRight = styled.div`
    display: flex;
    .search {
        display: flex;
        margin-top: 19px;
        background-position: 0 -99px;
        background-color: #fff;
        width: 158px;
        height: 32px;
        border-radius: 16px;
        input {
            &::placeholder {
                font-size: 12px;
            }
        }
    }
    .creator {
        margin: 0 12px;
        width: 90px;
        height: 32px;
        margin-top: 19px;
        line-height: 32px;
        box-sizing: border-box;
        padding-left: 16px;
        border: 1px solid #4F4F4F;
        color: #ccc;
        border-radius: 20px;
        &:hover {
            cursor:pointer
        }
    }
    .login {
        padding: 19px 10px;
        margin-top: 7px;
        color: #787878;
        &:hover{
            text-decoration: underline;
            cursor:pointer
        }
    }
`