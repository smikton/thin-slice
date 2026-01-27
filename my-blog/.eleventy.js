module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_redirects");
  
  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    const d = new Date(date);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[d.getUTCDay()]} ${months[d.getUTCMonth()]} ${d.getUTCDate()} ${d.getUTCFullYear()}`;
  });
  
  // Reading time filter
  eleventyConfig.addFilter("readingTime", function(content) {
    const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // ~200 words per minute
    return minutes;
  });
  
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: false,  // THIS LINE FIXES IT - don't process markdown with Nunjucks
    htmlTemplateEngine: "njk"
  };
};
