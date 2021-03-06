import styled from 'styled-components';
import { DropDownMenu } from '../dropdown/DropDownMenu';

const Card = (props) => {
  const tags = [
    { id: 1, name: 'Laravel', bg: '#fea2c2' },
    { id: 2, name: 'React', bg: '#cfeefc' },
    { id: 3, name: 'php', bg: '#123afe' },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: '#333',
          marginTop: '1rem',
          padding: '1rem 1.5rem',
        }}
      >
        <CardHeader>
          <CardTitle>The Benefits of Green Apples</CardTitle>
          <DropDownMenu></DropDownMenu>
        </CardHeader>
        <CardBody>
          <Date>3/2/2019</Date>
          <CardImage src='/images/trip.jpg' />
          <Description>
            Green apples have a high fiber content which helps in increasing the
            body's metabolism. While consuming an apple, make sure that you're
            not tossing the peel in the trash. Consuming apple with its peel
            improves the overall health. Due to its high fiber content, apple
            helps in detoxification process. It keeps the liver and digestive
            system away from harmful elements.
          </Description>
          <TagsList>
            {tags
              ? tags.map((tag) => (
                  <Tag key={tag.id} bg={tag.bg}>
                    {tag.name}
                  </Tag>
                ))
              : ''}
          </TagsList>
        </CardBody>
        <CardFooter>
          <ActionButton>10 likes</ActionButton>
          <ActionButton>10 Comments</ActionButton>
          <ActionButton>Share</ActionButton>
        </CardFooter>
      </div>
    </>
  );
};

export default Card;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div``;

export const CardTitle = styled.h2`
  color: #fff;
  font-weight: 300;
`;
export const CardImage = styled.img`
  width: 100%;
  overflow: hidden;
  margin: 10px 0px;
`;
export const CardOptions = styled.div`
  color: #fff;
`;
export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;
export const Description = styled.div`
  color: #fff;
  font-weight: 300;
  height: 55px;
  overflow-y: hidden;
`;
export const CardFooter = styled.div`
  margin-top: 1rem;
  display: flex;
`;
export const ActionButton = styled.button`
  border: 1px solid #fff;
  padding: 10px 20px;
  margin: 0 5px;
  color: #fff;
  cursor: pointer;
  background: rgba(155, 155, 155, 0.2);
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;
export const TagsList = styled.div`
  display: flex;
`;
export const Tag = styled.div`
  padding: 3px 8px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  background: ${(props) => (props.bg ? props.bg : '#fff')};
  color: ${(props) => (props.color ? props.color : '#fff')};
`;
