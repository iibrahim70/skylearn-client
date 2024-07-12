const ExamNotice = () => {
  return (
    <aside className="bg-blue-600 text-white fixed bottom-0 right-0 py-2 px-3.5 shadow-md rounded-md w-fit flex flex-col items-center gap-3.5">
      <h6>Final Exam 2024</h6>

      <div className="border rounded-md flex items-center justify-between gap-4 text-sm py-2 px-3.5">
        <div className="flex flex-col items-center">
          <p className="text-red-500 font-bold text-2xl">00</p>
          <p>Days</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-red-500 font-bold text-2xl">00</p>
          <p>Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-red-500 font-bold text-2xl">00</p>
          <p>Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-red-500 font-bold text-2xl">00</p>
          <p>Seconds</p>
        </div>
      </div>
      <p>Insha Allah</p>
    </aside>
  );
};

export default ExamNotice;
