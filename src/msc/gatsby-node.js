/*creating CreatePages API function. Gatsby will create page(s) during build. 
destructuring argument to get the actions and want the createPage helper function.   

the load products by passing path to the data to the require function.  
map over each product and run the createPage function. 
the path will use the slug to create a page for each object.  
the component is how we render the page. provide the path to the component. 
context is how Gatsby is able to pass data to a component. the values will come   
from the data file.   

*/

exports.createPages = ({ actions: { createPage } }) => {
    const products = require("./src/data/products.json")
    products.forEach(product => {
      createPage({
        //path: `/product/${product.slug}/`
        path: `/product/`,
        component: require.resolve("./src/components/product.js"),
        context: {
          title: product.title,
          description: product.description,
          //image: product.image,
          price: product.price,
        },
      })
    })
  }
