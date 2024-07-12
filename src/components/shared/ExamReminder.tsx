const ExamReminder = () => {
  return (
    <aside className="bg-blue-600 text-white fixed z-10 bottom-0 right-0 py-2 px-3.5 shadow-md rounded-md w-fit flex flex-col items-center gap-3.5">
      <h6>Final Exam 2024</h6>

      <div className="border rounded-md flex items-center justify-between gap-2.5 text-sm py-2 px-3.5">
        <div className="flex flex-col items-center">
          <h5 className="text-orange-500">18</h5>
          <p>Days</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-orange-500">17</h5>
          <p>Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-orange-500">03</h5>
          <p>Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-orange-500">39</h5>
          <p>Seconds</p>
        </div>
      </div>
      <p>Insha Allah</p>
    </aside>
  );
};

export default ExamReminder;
