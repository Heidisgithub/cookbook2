const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const italian = [
  {
    imageUrl: "../../Images/Italian/Pizza.jpg",
    heading: "Pizza Margarita",
    description: `
    A widespread belief says that in June 1889 the pizzaiolo Raffaele Esposito, Pizzeria Brandi's chef, invented a dish called "Pizza Margherita" in honor of the Queen of Italy, Margherita of Savoy, and the Italian unification, since toppings
                        are tomato (red), mozzarella (white) and basil (green), ingredients inspired by the colors of the national flag of Italy.
    `,
    recipeUrl: `pizza-Margarita`
  },
  {
    imageUrl: "../../Images/Italian/Spaghetti.jpg",
    heading: "Spaghetti Bolognese",
    description: `
    Spaghetti bolognese (sometimes called spaghetti alla bolognese, or colloquially 'spag bol', spaghetti with meat sauce, or just spaghetti) is a pasta dish that is popular outside Italy, but not part of traditional Bolognese or even Italian cuisine in general. The dish is generally perceived as inauthentic when encountered by Italians abroad.
    `,
    recipeUrl: `spaghetti-bolognese`
  },
  {
    imageUrl: "../../Images/Italian/Tortellini.jpg",
    heading: "Cheese Tortellini",
    description: `
    Tortellini are ring-shaped pasta originally from the Italian region of Emilia (in particular Bologna and Modena). Traditionally they are stuffed with a mix of meat (pork loin, raw prosciutto, mortadella), Parmigiano Reggiano cheese,
    egg and nutmeg and served in capon broth (in brodo di cappone).    `,
    recipeUrl: `cheese-tortellini`
  },
]

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/kitchens/italian/', (req, res) => res.render('pages/italian/index',{dishes: italian}))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
