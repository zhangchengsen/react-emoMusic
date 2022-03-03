import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${props => props.width + 'px'};
    height: ${props => props.size + 'px'};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${props => props.size + 'px'};
      height: ${props => props.size + 'px'};
    }
    
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size + 'px'} !important;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;

      overflow: hidden;
    }

    .artist {
      white-space: nowrap;
      text-overflow: ellipsis;

      overflow: hidden;
      color: #666;
    }
  }
`