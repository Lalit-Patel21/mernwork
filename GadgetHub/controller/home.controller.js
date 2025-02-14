export const homeGuestPage = (request, response, next) => {
  response.send("Hello World");
  response.render("homeguest.ejs");
};
