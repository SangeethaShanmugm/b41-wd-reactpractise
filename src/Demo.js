import React from "react";

export function Demo() {
  const data = [
    {
      name: "jack",
      age: 20,
    },
    {
      name: "John",
      age: 25,
    },
  ];
  console.log(data);
  return (
    <div>
      <h1>Welcome to Demo session</h1>
      {data.map((dt) => {
        return (
          <>
            <p>{dt.name}</p>
            <p>{dt.age}</p>
          </>
        );
      })}
    </div>
  );
}
