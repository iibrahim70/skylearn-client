const HistoryOfSchool = () => {
  return (
    <section className="history-banner bg-fixed min-h-[calc(100dvh-64px)] flex items-center">
      <div className="container text-white/90 space-y-10">
        <h2>History of our school</h2>
        <p className="w-[75%]">
          The Skylearn School is recognized by the Bangladesh Ministry of
          Education and authorized by British Council and Edexcel as an English
          medium educational institution for both Primary and Secondary
          Sections. The school established in 2015 is situated at Lalmatia,
          Mohammadpur in Dhaka. The School, surrounded by peaceful environment,
          which gives pleasures to children, offers education from Play to A
          Level. <span className="underline underline-offset-4">Read more</span>
        </p>

        <div className="flex flex-wrap items-center  justify-between gap-5">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-orange-500">2015</h4>
            <p>Founded</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-orange-500">210+</h4>
            <p>Teachers</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-orange-500">4000+</h4>
            <p>Students</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-orange-500">120+</h4>
            <p>Staffs</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-orange-500">3+</h4>
            <p>Branches</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-orange-500">9+</h4>
            <p>Campuses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryOfSchool;
