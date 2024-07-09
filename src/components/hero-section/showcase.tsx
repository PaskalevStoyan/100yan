import React from "react";
import "./showcase.css";
import { tabs } from "../../utils";

export const Showcase = (props: any) => {
  const [tab, setTab] = React.useState(0);
  const [tabsInfo, setTabsInfo] = React.useState(tabs);

  const handleTabClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const tab = target.closest(".tab");
    const tabs = target.closest(".tabs-container");

    if (!tab || !tabs) return;

    const index = Array.from(tabs.children).indexOf(tab);

    setTabsInfo((prev) => {
      return prev.map((tab, i) => {
        if (i === index) {
          return { ...tab, selected: true };
        }
        return { ...tab, selected: false };
      });
    });

    const content = document.querySelector(".tabstrip-content") as HTMLElement;
    content.classList.add("content-fade-out");

    setTimeout(() => {
      content.classList.remove("content-fade-out");
      content.classList.add("content-fade-in");
      setTab(index);
    }, 600);

    setTimeout(() => {
      content.classList.remove("content-fade-in");
    }, 800);
  };

  const getTabId = (text: string) =>
    `tab-item-${text?.toString().toLowerCase().replace(" ", "-")}`;

  return (
    <div className="showcase" id="About-Me">
      <div className="showcase-introduction">
        <h2 className="showcase-mid-headings" aria-label="Hello Wanderer" >Hello Wanderer!</h2>
        <h1 className=" typewriter typing-demo showcase-big-heading">
          My name is{" "}
          <span className="name-text">
            <span className="name highlight-name" aria-label="Stoyan Paskalev">Stoyan</span>
            <span className=" name highlight-name surname" aria-hidden="true">Paskalev.</span>
          </span>
        </h1>
        <p className="showcase-paragraph paragraph" aria-label="Welcome to my adventures in the Website building World">
          Welcome to my adventures in the Website building World!
        </p>
      </div>

      <div className="tabstrip-container">
        <div className="tabstrip" id="tabstrip-r:0:">
          <div
            className="tabs-container"
            role="tablist"
            onClick={handleTabClick}
          >
            {tabsInfo.map((tab) => {
              return (
                <span
                  aria-label={tab.title}
                  aria-controls={`tabstrip-r:0:-panel-id`}
                  role="tab"
                  id={getTabId(tab.title)}
                  key={tab.title}
                  aria-selected={tab.selected}
                  className={`tab${tab.selected ? " selected" : ""}`}
                >
                  {tab.title}
                </span>
              );
            })}
          </div>
          <div
            id="tabstrip-r:0:-panel-id"
            role="tabpanel"
            className="tabstrip-content-container"
          >
            <div
              id={`tabstrip-r:0:-panel-id-${tab}`}
              className="tabstrip-content"
            >
              {tabsInfo[tab].text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
