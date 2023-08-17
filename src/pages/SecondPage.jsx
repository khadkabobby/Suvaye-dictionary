import React from "react";
import Card from "../components/card/Card";
import { usePageContext } from "../context/PageContext";

const SecondPage = () => {
  const { data } = usePageContext();
  return (
    <section className="flex justify-center w-full h-[100vh] flex-col">
      <div className="flex gap-2 w-[70%] mx-auto">
        <h4 className="text-2xl">Word: </h4>
        {data.map((e) => (
          <span className="text-2xl" key={e?.word}>{e?.word}</span>
        ))}
      </div>
      <Card searchResults={data} />
    </section>
  );
};

export default SecondPage;
