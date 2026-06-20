module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("uploads");

  eleventyConfig.addLiquidFilter("readableDate", function (dateObj) {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    if (isNaN(date)) return "";

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
