import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick} aria-label="Página anterior">
        <div>👈</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick} aria-label="Página siguiente">
        <div>👉</div>
      </button>
    </div>
  );
};

export default Pagination;
