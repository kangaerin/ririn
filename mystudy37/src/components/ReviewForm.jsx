import INITIAL_STATE from './ReviewList';

function ReviewForm() {
  return (
    <div className="border-2 border-purple-300 p-3">
      <h2 className="text-lg underline">Review Form</h2>
      <hr />
      <h3>평점</h3>
      <select name="color">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <hr />
      <h3>리뷰</h3>

      <textarea className="border-2 border-gray-200" name="Review"></textarea>
      <button>저장</button>
    </div>
  );
}

export default ReviewForm;
