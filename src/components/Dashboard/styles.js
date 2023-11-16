import styled from 'styled-components';

export const DonutChart = styled.div`
  .donut-chart-sale {
    position: relative;
    z-index: 1;
    small {
      font-size: 16px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      display: flex;
      align-items: center;
      top: 0;
      justify-content: center;
      font-weight: 600;
    }
    .circle {
      height: 91px;
      width: 91px;
      z-index: -1;
      content: '';
      position: absolute;
      border-radius: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
