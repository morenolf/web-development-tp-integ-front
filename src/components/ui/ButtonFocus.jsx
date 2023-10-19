export function ButtonFocus({ focus, onClick, children, type }) {
    var classNameAux = "px-4 py-1 rounded-md my-2"
    if (focus)  {
      classNameAux = classNameAux + " bg-red-500"
    } else {
      classNameAux = classNameAux + " bg-indigo-500"
    }
    return (
      <button
        className= {classNameAux}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
