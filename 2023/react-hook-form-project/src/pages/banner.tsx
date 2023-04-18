import styled from 'styled-components';
import { Badge, Button, Descriptions, Image } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 1140px;
`;

const StyledDescriptions = styled(Descriptions)`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

function BannerDescriptionPage() {
  const { Item } = Descriptions;
  return (
    <Container>
      <StyledDescriptions
        title={<h1>Banner Info</h1>}
        bordered
        column={{ xl: 4, lg: 4, md: 4, sm: 2, xs: 1 }}
      >
        <Item
          label={<span style={{ fontWeight: 'bold' }}>이벤트 제목</span>}
          span={4}
        >
          친추 추천 이벤트 4
        </Item>
        <Item label={<span style={{ fontWeight: 'bold' }}>URL</span>} span={3}>
          <a
            href="https://skyblue.event/1/123/123/123/123/123/123/123/123/123
          /123/123/123/123/"
          >
            https://skyblue.event/1
          </a>
        </Item>
        <Item label={<span style={{ fontWeight: 'bold' }}>상태</span>} span={1}>
          <Badge status="processing" text="진행중" />
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>생성일</span>}
          span={2}
        >
          2023-04-07
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>수정일</span>}
          span={2}
        >
          2023-04-15
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>이벤트 기간</span>}
          span={2}
        >
          2023-04-01 ~ 2023-04-20
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>노출용 기간</span>}
          span={2}
        >
          2023-04-01 ~ 2023-04-15
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>배너 타입</span>}
          span={2}
        >
          메인 화면 상단
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>배너 분류</span>}
          span={2}
        >
          이벤트
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>우선 순위</span>}
          span={4}
        >
          A01
        </Item>
        <Item
          label={<span style={{ fontWeight: 'bold' }}>이미지</span>}
          span={4}
        >
          <Image
            width="100%"
            src="https://images.unsplash.com/photo-1637216099315-a413cf383e9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxiYW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </Item>
      </StyledDescriptions>
      <ButtonWrapper>
        <Button size="large" type="primary">
          수정
        </Button>
        <Button size="large">뒤로</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default BannerDescriptionPage;
