module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("uploads");

  const readableDate = function (dateObj) {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    if (isNaN(date)) return "";

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addLiquidFilter("readableDate", readableDate);
  eleventyConfig.addNunjucksFilter("readableDate", readableDate);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
