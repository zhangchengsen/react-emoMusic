import styled from 'styled-components';


export const Content = styled.div`
  background-color: #fff;
  display: flex;
`

export const RecommendLeft = styled.div`
  .tops {
    margin: 30px 0;
    display: flex;
    background-image: url(${require("@/assets/img/recommend-top-bg.png")});
    height: 472px;
  }
  padding: 20px;
  width: 729px;
`

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`
export const RecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const RankingWrapper = styled.div`
  display: flex;
`

export const RankingLeft = styled.div`
  width: 240px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`

export const RankingRight = styled.div`
  width: 740px;
  border-right: 1px solid #d3d3d3;
  background-color: #fafafa;
`