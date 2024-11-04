import {Groq} from "groq-sdk";

const apiKey = "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"
const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

async function GetChatResponse (prompt) {

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama3-groq-70b-8192-tool-use-preview',
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 0.65,
      stream: true,
      stop: null,
    });

    let response = '';
    for await (const chunk of chatCompletion) {
      response += chunk.choices[0]?.delta?.content || '';
    }

    return response; // Return the response
  } catch (error) {
    console.error('Error:', error);
    return 'Error occurred while processing your request.';
  }

}

export default GetChatResponse;