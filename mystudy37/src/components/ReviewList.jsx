import Review from './Review';
import useFieldValues from '../hooks/userFieldValues';
import { useState } from 'react';
import ReviewForm from './ReviewForm';

const INITIAL_STATE = [
  {
    id: 1,
    content: '스파이더맨 1 부터 본 사람이면 재미없을 수가 없다',
    score: 5,
  },
  {
    id: 2,
    content:
      '전 스파이더맨 두명이 자책했던 일들이 여기서 어느정도 구원받았다는거에 감사드립니다',
    score: 4,
  },
  {
    id: 3,
    content:
      '엔드게임을 뛰어넘는 영화가 죽기전에 나올까 생각했었는데.. 2년만에 나왔습니다',
    score: 5,
  },
];

function ReviewList() {
  const [reviewList, setReviewList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    content: '',
    score: 5,
  });
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);

  // 새로운 리뷰 저장
  const saveReview = () => {
    // review는 데이터베이스에 저장하면 id를 할당해줍니다.

    const reviewId = new Date().getTime();

    const review = { ...fieldValues, id: reviewId };
    setReviewList((prevReviewList) => [...prevReviewList, review]);
    clearFieldValues();
    setIsShowReviewForm(false);
  };

  const editReview = (editingReview) => {
    console.log('editing', editingReview);
  };

  const deleteReview = (deletingReview) => {
    console.log('Deleting', deletingReview);
  };

  return (
    <div>
      <h2 className="text-xl mb-2 border-b-2 border-orange-500">ReviewList</h2>

      {!isShowReviewForm && (
        <button
          onClick={() => setIsShowReviewForm(true)}
          className="bg-orange-200 hover:bg-orange-400 p-1 rounded text-sm"
        >
          New Review
        </button>
      )}
      {isShowReviewForm && (
        <ReviewForm
          fieldValues={fieldValues}
          handleChange={handleChange}
          handleSubmit={saveReview}
        />
      )}

      {reviewList.length === 0 && (
        <div className="bg-red-100 p-1 my-1 rounded border-2 border-red-200">
          등록된 리뷰가 없습니다.
        </div>
      )}
      {reviewList.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={() => deleteReview(review)}
          handleEdit={() => console.log('Editing', review)}
        />
      ))}
    </div>
  );
}

export default ReviewList;
