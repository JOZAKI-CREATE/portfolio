const FilterTabs = ({ filter, setFilter, filterTabClass }) => {
    return (
        <div className="flex justify-center gap-6 mb-4">
            <button
                onClick={() => setFilter("all")}
                className={filterTabClass("all")}
            >
                すべて
                {filter === "all" && (
                    <div className="absolute left-0 right-0 -bottom-[-3px] h-[2px] bg-[#a67c52]" />
                )}
            </button>
            <button
                onClick={() => setFilter("active")}
                className={filterTabClass("active")}
            >
                未完了
                {filter === "active" && (
                    <div className="absolute left-0 right-0 -bottom-[-3px] h-[2px] bg-[#a67c52]" />
                )}
            </button>
            <button
                onClick={() => setFilter("completed")}
                className={filterTabClass("completed")}
            >
                完了
                {filter === "completed" && (
                    <div className="absolute left-0 right-0 -bottom-[-3px] h-[2px] bg-[#a67c52]" />
                )}
            </button>



        </div>
    );
};

export default FilterTabs;