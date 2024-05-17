import styled from 'styled-components';

import TestImage from '@/assets/test2.png';
import { ExperienceCard } from '@/components/common/Card/ExperienceCard';

const StyledSectionContainer = styled.div`
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Dummy4 = [
  {
    id: 1,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 2,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 3,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 4,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 5,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 6,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 7,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 8,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
  {
    id: 9,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
  },
];

export const WholeRecommendView2 = () => {
  /*const chunks = [];
  for (let i = 0; i < Dummy4.length; i += 3) {
    chunks.push(Dummy4.slice(i, i + 3));
  }

  return (
    <StyledSectionContainer>
      <Container>
        {chunks.map((chunk, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
            {chunk.map((item) => (
              <ExperienceCard
                key={item.id}
                imageUrl={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        ))}
      </Container>
    </StyledSectionContainer>
  );*/
  return (
    <StyledSectionContainer>
      <Container>
        {Dummy4.map((item) => (
          <ExperienceCard
            key={item.id}
            imageUrl={item.img}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
