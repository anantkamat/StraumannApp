import MultiRangeSlider from "multi-range-slider-react";
import { debounce } from "../common/utils";
import { debounceFunction } from "../common/types";

interface FilterProps {
  minValue: number;
  maxValue: number;
  changeVal: debounceFunction;
}

function Filter(props: FilterProps) {
  const { minValue, maxValue, changeVal } = props;
  const change = debounce(changeVal, 1000);

  return (
    <div className="flex items-center my-4">
      <div className="text-xl text-black">Filter by age:</div>
      <div className="basis-1/2">
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            change(e);
          }}
          style={{
            border: "none",
            boxShadow: "none",
            padding: "15px 10px",
          }}
          ruler={false}
        />
      </div>
    </div>
  );
}

export default Filter;
