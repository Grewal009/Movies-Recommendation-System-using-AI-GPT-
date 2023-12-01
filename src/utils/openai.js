import OpenAI from "openai";
import { OPENAI_GPT } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_GPT,
  dangerouslyAllowBrowser: true,
});

export default openai;
