  
//Form Input fields  
  export const inputs = [
    {
      id:"sku",
      type:"text",
      label:"SKU",
      required: true,
      // Only accept 1-100 Alphanumeric characters with dashes
      // However, pattern can't start or end with dashes and no consecutive dashes
      pattern:"^(?=.{1,100}$)[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$"
    },
    {
      id:"name",
      type:"text",
      label:"Name",
      required: true,
      pattern:"^[a-zA-Z0-9 ]+$"
    },
    {
      id:"price",
      type:"text",
      label:"Price ($)",
      required: true,
      pattern:"^[0-9]*[.]?[0-9]{1,2}$"
    }
  ]
