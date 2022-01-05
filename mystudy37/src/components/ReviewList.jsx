const { useState } = require('react');

const INITIAL_STATE = [
  { content: '스파이더맨 1부터 본 사람이라면 재미없을 수가 없다.' },
  {
    content:
      '전 스파이더맨 두명이 자책했던 일들이 여기서 어느정도 구원받았다는거에 감사드립니다',
  },
  {
    content:
      '엔드게임을 뛰어넘는 영화가 죽기전에 나올까 생각했었는데.. 2년만에 나왔습니다',
  },
];

function ReviewList() {
  const [ReviewList, setReviewList] = useState(INITIAL_STATE);

  const appendReview = () => {
    console.log('새로운 리뷰를 추가하였습니다.');
  };
}
export default ReviewList;
