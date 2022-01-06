import { useState } from 'react';

function ExampleToggleForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm && (
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-yellow-300"
        >
          New Review
        </button>
      )}
      {showForm && (
        <div className="bg-green-300">
          쓰기 폼
          <button onClick={() => setShowForm((prev) => !prev)}>저장</button>
        </div>
      )}
    </div>
  );
}

export default ExampleToggleForm;
