import { getLanguages } from "./data";
import { LanguageList } from "./type/types";

export function formatDurationWatching(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let durationString = "";

  if (hours > 0) {
    durationString += `${hours} hr `;
  }

  if (remainingMinutes > 0) {
    durationString += `${remainingMinutes} min`;
  }

  return durationString.trim();
}

export function formatFloat(num: number): string {
  return num.toFixed(1);
}

export function formatCurrency(num: number): string {
  const formattedNum = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);

  if (formattedNum === "$0.00") {
    return "-";
  } else {
    return formattedNum;
  }
}

export function formatOriginalLanguage(data: string, languages: LanguageList) {
  const langFind = languages.find((language) => language.iso_639_1 === data);
  if (langFind) {
    return langFind.english_name;
  } else {
    return "Unknown";
  }
}

export function formatDate(date: string): string {
  const newDate = new Date(date);
  if (newDate.toString() === "Invalid Date") {
    return "-";
  } else {
    return newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
