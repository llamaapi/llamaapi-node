# llamaapi-node

## Usage

To use the LlamaAPI library, follow these steps:

1. Install the library using npm:

   ```bash
   npm install llamaapi-node
   ```

2. Import the library into your project:

   ```javascript
   const LlamaAPI = require('llamaapi-node');
   ```

3. Create an instance of the LlamaAPI class, passing in your API token:

   ```javascript
   const apiToken = 'YOUR_API_TOKEN';
   const llamaAPI = new LlamaAPI(apiToken);
   ```

4. Make API requests using the `run` method:

   ```javascript
   const apiRequestJson = {
     // Your API request payload
   };

   llamaAPI.run(apiRequestJson)
     .then(response => {
       // Handle the API response
     })
     .catch(error => {
       // Handle errors
     });
   ```

That's it! You can now use the LlamaAPI library in your project to interact with the Llama API.

For more information, refer to the [API documentation](https://docs.llama-api.com).

