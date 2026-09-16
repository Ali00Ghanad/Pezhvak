import React, { useState } from 'react'

const TrendPage = () => {

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const visibleItems = 3;
  const maxIndex = items.length - visibleItems;
  
  console.log('index : ',index);
  console.log('maxIndex item.lengh - 3 = ',maxIndex);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handlePointerDown = (e) => {
    setDragStart(e.clientX);
    console.log(e.clientX);
  };

  const handlePointerUp = (e) => {
    if (dragStart === null) return;

    const difference = e.clientX - dragStart;

    if (difference < -50) {
      next();
    } else if (difference > 50) {
      prev();
    }

    setDragStart(null);
  };


  return (
    <div className="flex w-full items-center gap-3">
      {/* Previous */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ←
      </button>

      {/* Viewport */}
      <div
        className="w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setDragStart(null)}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${index * (100 / visibleItems)}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              className="shrink-0 basis-1/3 px-2"
            >
              <div className="flex h-40 items-center justify-center rounded-xl bg-gray-200 text-xl font-semibold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={next}
        disabled={index === maxIndex}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
      >
        →
      </button>
    </div>
  );
}

export default TrendPage
