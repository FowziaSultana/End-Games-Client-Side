import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopCategory = () => {
  const [tabName, setTabName] = useState("DC Marvel");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toysByCategory?cat=${tabName}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [tabName]);
  const catArr = [
    { id: 1, title: "Avengers" },
    { id: 2, title: "DC Marvel" },
    { id: 3, title: "Transformers" },
    { id: 4, title: "Star_wars" },
  ];
  const handleTab = (event) => {
    let selectedTab = event.target.innerHTML;
    setTabName(selectedTab);
  };

  return (
    <div className="container mx-auto min-h-[600px] my-6">
      <h1 className="text-center text-2xl font-bold lg:text-5xl text-[#fbbd23] my-6">
        Shop your toys
      </h1>
      <Tabs className="">
        <TabList className="tabs">
          {catArr.map((aCat) =>
            aCat.title == tabName ? (
              <li
                onClick={handleTab}
                className="tab tab-lg font-bold tab-lifted  tab-active text-[#fbbd23]"
              >
                {aCat.title}
              </li>
            ) : (
              <li
                onClick={handleTab}
                className="tab tab-lg font-bold tab-lifted  text-[#fbbd23]"
              >
                {aCat.title}
              </li>
            )
          )}
        </TabList>
        <div className="bg-base-200 px-4 rounded-lg">
          {catArr.map((aCate) => (
            <TabPanel>
              <div className="grid grid-flow-row gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {toys.map((aToy) => (
                  <div
                    key={aToy._id}
                    className="my-8 rounded-md shadow-lg shadow-gray-200 bg-gradient-to-r from-[#D279EE] to-[#F8C390]   duration-300 hover:-translate-y-1"
                  >
                    <a href="link" className="cursor-pointer">
                      <figure>
                        <img
                          src={`${aToy.photo}?auto=format&fit=crop&w=400&q=50`}
                          className="rounded-md  w-full object-fill "
                          style={{ height: "400px" }}
                          alt=""
                        />
                        <figcaption className="p-4 text-amber-800">
                          <p className="text-2xl mb-4 font-bold leading-relaxed  ">
                            {aToy.name}
                          </p>
                          <div className=" flex justify-between items-center">
                            <span>
                              <p className="text-md leading-5 text-bold ">
                                Price:{aToy.price}
                              </p>
                              <p className="text-md leading-5 text-bold ">
                                {aToy.ratings}
                              </p>
                            </span>
                            <span>
                              <Link
                                to={`/singleToy/${aToy._id}`}
                                className="btn btn-warning "
                              >
                                Details
                              </Link>
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
