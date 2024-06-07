import { useState } from 'react';

import styled from 'styled-components';

import { AmountModal } from '@/components/ExperienceRecommendPage/AmountModal';

interface AmountBoxProps {
  onApply: (min: number, max: number) => void;
  minAmount: number;
  maxAmount: number;
}

export const AmountBox = ({ onApply, minAmount, maxAmount }: AmountBoxProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleApply = (min: number, max: number) => {
    setIsModalOpen(false);
    onApply(min, max);
  };

  return (
    <>
      <Container>
        <Content>
          <Label>금액</Label>
          <AmountRange>
            <Amount>{minAmount}</Amount>
            <Amount className="between">~</Amount>
            <Amount>{maxAmount}</Amount>
            <Currency>원</Currency>
          </AmountRange>
        </Content>
        <ApplyButton onClick={() => setIsModalOpen(true)}>
          <ApplyText>적용</ApplyText>
        </ApplyButton>
      </Container>
      {isModalOpen && (
        <AmountModal
          onApply={handleApply}
          onClose={() => setIsModalOpen(false)}
          isopen={isModalOpen}
        />
      )}
    </>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  gap: 16px;
  width: 312px;
`;

const Content = styled.div`
  flex: 1 1 0;
  height: 28px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Label = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.gray700};
  ${({ theme }) => theme.font.desktop.body2r};
`;

const AmountRange = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
`;

const Amount = styled.div<{ ismain?: boolean }>`
  color: ${({ theme }) => theme.color.gray300};
  ${({ theme }) => theme.font.desktop.body1m};

  &.between {
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const Currency = styled.div`
  color: ${({ theme }) => theme.color.gray700};
  ${({ theme }) => theme.font.desktop.body2r};
`;

const ApplyButton = styled.div`
  width: 55px;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
  background: ${({ theme }) => theme.color.gray800};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const ApplyText = styled.div`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.desktop.label2};
`;
