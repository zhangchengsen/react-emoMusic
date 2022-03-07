import styled from "styled-components";

export const Play = styled.div` 
    .container {
      height: 32px;
      .play {
        box-sizing: border-box;
        opacity: 0;
        margin-right: 20px;
        width: 17px;
        height: 17px;
        background-position: 0 -103px;
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }
    .container:hover {
      text-decoration: underline;
    }
    .container:hover .play{
      opacity: 1;
    }
      
      
`
export const TopRankingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;

  .image {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    img {
      width: 150px;
      height: 150px;
    }

    .image_cover {
      background-position: -230px -380px;
    }
  }

  .info {
    margin-left: 30px;
    .title {
      color: #333;
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .time {
      display: flex;
      align-items: center;
      color: #666;
      margin: 8px 0 30px;

      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        position: relative;
        top: -2px;
        margin-right: 3px;
      }

      .update-f {
        color: #999;
      }
    }
  }
`