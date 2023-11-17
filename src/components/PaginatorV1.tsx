const PaginatorV1 = ({ MAX_PAGES, selectPage, activePage }: any) => {
  return (
    <div className="paginator-container">
      <div className="paginator-label-container">
        <span className="paginator-head-label">Pages</span>
      </div>
      <div className="pagination-pages-container">
        {Array.from({ length: MAX_PAGES }, (v, i) => i + 1).map((n, i) => {
          return (
            <button
              className={`page-button ${n === activePage ? "active" : ""}`}
              key={`${n + 1}_${i + 2}_${n + i + 3}`}
              onClick={() => selectPage(n)}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaginatorV1;
