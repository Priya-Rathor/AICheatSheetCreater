
# 🤖 AICheatSheetCreater

**AICheatSheetCreater** is an AI-powered web application that allows users to generate customizable cheat sheets on any topic. Built with a modern tech stack including **React** for frontend, **Flask** for backend, and integrated with advanced **AI models**, it enables efficient summarization and organization of complex topics in a clean and printable format.

---

## 🚀 Features

- 🔍 **AI-Powered Topic Understanding** – Uses advanced language models to understand the topic and generate relevant content.
- 📝 **Custom Cheat Sheet Generator** – Automatically creates concise, structured cheat sheets.
- 🧠 **Flexible AI Integration** – Plugged into LLMs like OpenAI/Groq/Huggingface for intelligent content generation.
- 🌐 **Full-Stack App** – Complete with frontend (React + Tailwind), backend (Flask), and database (MongoDB).
- 🎨 **Responsive UI** – Clean, responsive interface suitable for desktop and mobile.
- 📁 **Download/Print Option** – Users can download or print their cheat sheets.

---

## 🧱 Tech Stack

| Layer        | Technology               |
|--------------|--------------------------|
| Frontend     | React.js, Tailwind CSS   |
| Backend      | Flask, Flask-CORS        |
| AI Models    | OpenAI, Groq, Huggingface|
| Database     | MongoDB                  |
| Hosting/Dev  | Vite, GitHub             |

---

## 📁 Project Structure

```

AICheatSheetCreater/
├── backend/
│   ├── app.py
│   ├── routes/
│   └── models/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── public/
├── .env
├── requirements.txt
├── package.json
└── README.md

````

---

## 🛠️ Installation

### Backend Setup (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
````

### Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend with:

```env
OPENAI_API_KEY=your_openai_key
MONGO_URI=your_mongodb_uri
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description                        |
| ------ | -------------- | ---------------------------------- |
| POST   | `/generate`    | Generate cheat sheet from topic    |
| POST   | `/feedback`    | Submit feedback on generated sheet |
| GET    | `/healthcheck` | Check API health                   |

---

## 🎯 Use Cases

* Study preparation for students
* Quick tech reference for developers
* Interview prep with structured summaries
* Note-taking assistant for researchers

---

## 🧪 Testing

Use Postman or Curl:

```bash
curl -X POST http://localhost:5000/generate -H "Content-Type: application/json" -d '{"topic": "LLMs"}'
```

---

## 🙋‍♀️ Author

**Priya Rathor**
📬 [GitHub Profile](https://github.com/Priya-Rathor)

---

## 📌 Future Improvements

* [ ] Add topic-specific formatting templates
* [ ] Export to PDF feature
* [ ] User authentication and save history
* [ ] Multilingual cheat sheet generation

---
