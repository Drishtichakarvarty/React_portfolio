import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(
  "mongodb+srv://drishtichakarvarty3:12345@cluster0.ie061ar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// ✅ Simple root route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send({ message: "Message saved successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// ✅ Use Render’s port (not hardcoded 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
