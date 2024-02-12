import { RangeSelectorType, debounceFunction } from "./types";

export function getDiffDate(diffValue: number, type: string) {
  const now = new Date();
  const diffDateVal = new Date();
  diffDateVal.setFullYear(now.getFullYear() - diffValue);
  let diffMonth: number | string = diffDateVal.getMonth() + 1;
  const diffDate = diffDateVal.getDate();
  diffMonth = diffMonth < 10 ? "0" + diffMonth : diffMonth;
  const diffYear = diffDateVal.getFullYear();

  return `${type}${diffYear}-${diffMonth}-${diffDate}`;
}

export function getDisplayYear(year: string) {
  const dateVal = new Date(year);
  let diffMonth: number | string = dateVal.getMonth() + 1;
  const diffDate = dateVal.getDate();
  diffMonth = diffMonth < 10 ? "0" + diffMonth : diffMonth;
  const diffYear = dateVal.getFullYear();

  return `${diffDate}-${diffMonth}-${diffYear}`;
}

export function debounce(func: debounceFunction, wait = 0) {
  let timer: number | undefined = undefined;
  return (args: RangeSelectorType) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, wait);
  };
}

export function getInitials(name: string) {
  let retValue: string = "";
  if (name !== "") {
    const nameSplit = name.split(" ");
    retValue += nameSplit[0][0].toUpperCase();
    if (nameSplit.length > 1) {
      retValue += nameSplit[nameSplit.length - 1][0].toUpperCase();
    }
  }
  return retValue;
}
