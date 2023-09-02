# LlamaAPI Node.js Library

## How to Use

Follow these steps to use the LlamaAPI library:

1. Install the library via npm:

   ```bash
   npm install llamaai
   ```

2. Bring the library into your project:

   ```javascript
   import LlamaAPI from 'llamaai';
   ```

3. Instantiate the LlamaAPI class, providing your API token:

   ```javascript
   const apiToken = 'INSERT_YOUR_API_TOKEN_HERE';
   const llamaAPI = new LlamaAPI(apiToken);
   ```

4. Execute API requests using the `run` method:

   ```javascript
   const apiRequestJson = {
     // Insert your API request payload here
   };

   llamaAPI.run(apiRequestJson)
     .then(response => {
       // Process the API response here
     })
     .catch(error => {
       // Handle any errors here
     });
   ```

And that's all! You can now utilize the LlamaAPI library in your project to communicate with the Llama API.

For additional details, please refer to the [API documentation](https://docs.llama-api.com).


