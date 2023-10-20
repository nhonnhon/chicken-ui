export const formatVideoLink = (link: string) => {
  if (link.includes("vimeo.com/")) {
    const arrayText = link.split("vimeo.com/");

    if (!isNaN(parseInt(arrayText[1] || ""))) {
      return arrayText[1];
    }
  }

  return "";
};
