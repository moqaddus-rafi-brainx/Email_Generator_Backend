# 🧠 Smart Email Generator (Backend)

This is the **backend** server for the Smart Email Generator — a generative AI-based app that helps users draft professional or casual emails. It integrates with **OpenAI’s GPT model** to generate emails based on user input and preferences.

This backend is built using **Node.js + Express**, and connects to the **OpenAI API** (GPT-4o) for email generation.

---

## 🎯 Purpose

The purpose of this project is to:
- Practice building **Generative AI applications**
- Work with **OpenAI’s chat completion API**
- Integrate frontend and backend for a seamless user experience
- Maintain conversation state for contextual generation (optional feature)

---

## 🚀 Features

- 🔗 **POST `/generate-email`**
  - Accepts a user prompt, email type, and tone
  - Sends a request to OpenAI's GPT model
  - Returns a generated email based on those parameters

- ♻️ **POST `/reset`**
  - Clears conversation history to start a fresh context

- ✅ Structured service-controller separation for clean architecture

---

## 🛠️ Tech Stack

- **Server**: Node.js + Express
- **AI Provider**: OpenAI (GPT-4o)
- **Environment Management**: dotenv
- **Cross-Origin Requests**: CORS



