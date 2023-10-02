const CardContainer = ({ item, choice, bg, icon, m }) => {
  const capitalize = (word) => {
    switch (word) {
      case "weekly":
        return "Week";
      case "daily":
        return "Day";
      case "monthly":
        return "Month";
    }
  };

  return (
    <div className="mt-4 overflow-hidden">
      <div
        className={
          item.title === "Social"
            ? bg + " rounded-t-xl flex justify-end overflow-hidden -mb-5"
            : bg + " rounded-t-xl flex justify-end overflow-hidden"
        }
      >
        <img className={"m-tb-" + m + " mr-4"} src={icon} alt="icon" />
      </div>
      <div className={bg + " rounded-b-full relative"}>
        {item.title === "Social" ? (
          <div className="h-12 w-12 bg-red-600 absolute top-0 hidden"></div>
        ) : null}
        <div className="bg-darkBlue p-6 rounded-xl hover:bg-desaturatedBlue hover:cursor-pointer transition-all">
          <div className="flex flex-row justify-between items-center">
            <div className="text-white font-medium">{item.title}</div>
            <svg
              className="hover:fill-white hover:cursor-pointer transition-all fill-defaultEllipsis"
              width="21"
              height="5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
            </svg>
          </div>
          <div className="flex flex-row justify-between items-center py-2 md:flex-col md:items-start">
            <div className="text-white text-3xl font-thin md:text-5xl md:mt-4">
              {item.timeframes[choice].current}hrs
            </div>
            <div className="text-paleBlue text-sm md:mt-2">
              Last {capitalize(choice)} - {item.timeframes[choice].previous}hrs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
