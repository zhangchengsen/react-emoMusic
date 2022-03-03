import styled from 'styled-components'

export const DiscoverList = styled.div`
    background-color: #c20c0c;
    div {

        padding-left: 180px;
        display: flex;
        a {

            display: block;
            color: #fff;
            width: 100px;
            overflow: hidden;
            line-height: 34px;
            height: 34px;
            font-size: 13px;
            span {
                border-radius: 15px;
                padding: 5px 15px;
            }
            
            &.active span  {
                background-color: #9b0909;
            }
        }
    }
`