import React from 'react'

function DropDown({list=[],onSelect,parameter}) {
  return (
    <div className="absolute mt-5 w-50 bg-black border border-white rounded-b-4xl border-t-0 pt-5">
      {list.map((item) => {
         
        const isSelected = item === parameter;
        if (isSelected) return null;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="block w-50 rounded-3xl px-4 py-1 text-center text-gray-300 hover:bg-gray-800 hover:text-white "
          >
            {item.shortForm}
          </button>
        );
      })}
    </div>
  );
}

export default DropDown;
