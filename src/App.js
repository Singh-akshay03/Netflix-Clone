import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname);

// function ncard(carddata) {
//   // console.log(carddata.sname);
//   // console.log(carddata.Sdata);

//   return (
//     <Card
//       imgscr={carddata.imgscr}
//       sname={carddata.sname}
//       title={carddata.title}
//     />
//   );
// }

const App = () => {
  return (
    <>
      <h1 className="heading_style"> List of top 5 Netflix Series  </h1>

      {Sdata.map((netdata) => {
        return (
          <Card
            imgscr={netdata.imgscr}
            sname={netdata.sname}
            title={netdata.title}
            links={netdata.links}
          />
        );
      })}
    </>
  );
};

export default App;
