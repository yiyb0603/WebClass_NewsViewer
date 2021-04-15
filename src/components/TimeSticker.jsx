import styled from 'styled-components';
import { calculateTime } from 'lib/calculateTime';
import { createRandomColor } from 'lib/createRandomColor';

const TimeSticker = ({ publishedAt }) => {
  return (
    <Sticker background={createRandomColor()}>
      {calculateTime(publishedAt)}
    </Sticker>
  );
}

const Sticker = styled.div`
  width: 80px;
  padding: 0.25rem 0;
  font-size: 1.1rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background-color: ${props => props.background};
  z-index: 10;
`;

export default TimeSticker;