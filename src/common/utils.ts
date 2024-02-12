import { Address, Name, RangeSelectorType, debounceFunction } from "./types";

export function getDiffDate(
  diffValue: number,
  type: string,
  display: boolean = false
) {
  const now = new Date();
  const diffDateVal = new Date();
  diffDateVal.setFullYear(now.getFullYear() - diffValue);
  let diffMonth: number | string = diffDateVal.getMonth() + 1;
  const diffDate = diffDateVal.getDate();
  diffMonth = diffMonth < 10 ? "0" + diffMonth : diffMonth;
  const diffYear = diffDateVal.getFullYear();

  if (display) {
    return `${diffDate}-${diffMonth}-${diffYear}`;
  }

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
    retValue += nameSplit[0] && nameSplit[0][0].toUpperCase();
    if (nameSplit.length > 1) {
      retValue += nameSplit[nameSplit.length - 1][0].toUpperCase();
    }
  }
  return retValue;
}

export function getRandomBG() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

export function capitalize(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

type K = keyof Address;

export function getAddress(address: Address[]) {
  if (address.length) {
    const userAddress = address[0];
    let locale = userAddress.line[0] || "";

    const addresslines: K[] = ["city", "state", "country", "postalCode"];

    addresslines.forEach((add) => {
      if (userAddress[add]) {
        locale +=
          add === "postalCode"
            ? ` - ${userAddress[add]}`
            : `, ${userAddress[add]}`;
      }
    });
    return locale;
  }
}

export function getPatientName(name: Name) {
  let firstName = "";
  let lastName = "";
  if (name?.text) {
    firstName += name?.text;
  } else if (name?.given) {
    firstName += name?.given[0];
  }

  if (name?.family) {
    lastName += ` ${name?.family}`;
  }

  return firstName + lastName;
}
