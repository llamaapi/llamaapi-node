const axios = require('axios');

class LlamaAPI {
  constructor(apiToken, hostname = 'https://api.llama-api.com', domainPath = '/chat/completions') {
    this.hostname = hostname;
    this.domainPath = domainPath;
    this.apiToken = apiToken;
    this.headers = { Authorization: `Bearer ${this.apiToken}` };

    this.queue = [];
  }

  async _runStreamForJupyter(apiRequestJson) {
    try {
      const response = await axios.post(`${this.hostname}${this.domainPath}`, apiRequestJson, { headers: this.headers });

      for (const chunk of response.data) {
        this.queue.push(chunk);
      }
    } catch (error) {
      console.error('Error while streaming:', error);
    }
  }

  async *getSequences() {
    while (true) {
      const sequence = this.queue.shift();

      if (sequence === undefined) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait and check again
        continue;
      }

      // Do something with the sequence
      yield sequence;

      // You can add a condition here to break the loop when needed
    }
  }

  async runStream(apiRequestJson) {
    await this._runStreamForJupyter(apiRequestJson);
    yield* this.getSequences();
  }

  async runSync(apiRequestJson) {
    try {
      const response = await axios.post(`${this.hostname}${this.domainPath}`, apiRequestJson, { headers: this.headers });

      if (response.status !== 200) {
        throw new Error(`POST ${response.status} ${response.data.detail}`);
      }

      return response.data;
    } catch (error) {
      throw new Error(`Error while making synchronous request: ${error.message}`);
    }
  }

  run(apiRequestJson) {
    if (apiRequestJson.stream) {
      return this.runStream(apiRequestJson);
    } else {
      return this.runSync(apiRequestJson);
    }
  }
}

module.exports = LlamaAPI;
