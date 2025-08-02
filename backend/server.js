require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// 🔑 CourtListener API Key
const API_KEY = 'a54e6aea3845e450a69ae9be0c89d363737898fe';

// 🔍 Test CourtListener API Key when server starts
const testCourtListenerKey = async () => {
  try {
    const response = await fetch('https://www.courtlistener.com/api/rest/v4/opinions/?search=abortion', {
      headers: { 'Authorization': `Token ${API_KEY}` }
    });

    console.log('CourtListener Status:', response.status);
    if (response.status === 403) {
      console.log('❌ API key is invalid or unauthorized.');
    } else if (response.status === 200) {
      console.log('✅ CourtListener API key is working!');
    } else {
      console.log('⚠️ Unexpected status from CourtListener API');
    }
  } catch (err) {
    console.error('Error testing CourtListener key:', err.message);
  }
};
testCourtListenerKey(); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection Error:", err));

// Member Schema & Model
const memberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const Member = mongoose.model('Member', memberSchema);

// Member Routes
app.post('/members', async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existing = await Member.findOne({ email });
    if (existing) return res.status(400).json({ message: "Member already exists" });

    const member = new Member({ name, email, password });
    await member.save();
    res.status(201).json({ message: "✅ Member created", member });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/members/:id', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json({ message: "✅ Member updated", member });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/members/:id', async (req, res) => {
  try {
    const deleted = await Member.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Member not found" });
    res.json({ message: "✅ Member deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Contact Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  subject: String,
  message: String,
  urgency: { type: String, enum: ['normal', 'urgent', 'emergency'], default: 'normal' }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// Contact Routes
app.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "✅ Contact created", contact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/contact/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/contact/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "✅ Contact updated", contact: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/contact/:id', async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "✅ Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 🔎 Search route using CourtListener API
app.get('/search', async (req, res) => {
  const searchTerm = req.query.q;

  if (!searchTerm) {
    return res.status(400).json({ error: 'Missing search query parameter "q"' });
  }

  try {
    const response = await fetch(`https://www.courtlistener.com/api/rest/v4/opinions/?search=${encodeURIComponent(searchTerm)}&page_size=10`, {
      headers: {
        'Authorization': `Token ${API_KEY}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.detail || 'API error' });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

// Root Route
app.get('/', (req, res) => {
  res.send("🚀 Server is Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));



// // testApiKey.js

// const express = require('express');
// const fetch = require('node-fetch');  // or just 'fetch' if Node 18+
// const app = express();
// const PORT = 3000;

// const API_KEY = 'a54e6aea3845e450a69ae9be0c89d363737898fe';

// // Function to test API key at server start
// const testCourtListenerKey = async () => {
//   try {
//     const response = await fetch('https://www.courtlistener.com/api/rest/v4/opinions/?search=abortion', {
//       headers: {
//         'Authorization': `Token ${API_KEY}`
//       }
//     });

//     console.log('Status:', response.status);

//     const data = await response.json();
//     console.log('Response data:');
//     console.dir(data, { depth: null });

//     if (response.status === 403) {
//       console.log('\n❌ API key is invalid or unauthorized.');
//     } else if (response.status === 200) {
//       console.log('\n✅ API key is working!');
//     } else {
//       console.log('\n⚠️ Unexpected status. Check the API documentation.');
//     }
//   } catch (err) {
//     console.error('Error:', err.message);
//   }
// };

// // Call this once when server starts
// testCourtListenerKey();


// // Your search route that takes ?q= param and fetches CourtListener API
// app.get('/search', async (req, res) => {
//   const searchTerm = req.query.q;

//   if (!searchTerm) {
//     return res.status(400).json({ error: 'Missing search query parameter "q"' });
//   }

//   try {
//     const response = await fetch(`https://www.courtlistener.com/api/rest/v4/opinions/?search=${encodeURIComponent(searchTerm)}&page_size=10`, {
//       headers: {
//         'Authorization': `Token ${API_KEY}`
//       }
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return res.status(response.status).json({ error: errorData.detail || 'API error' });
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error: ' + err.message });
//   }
// });


// app.get('/', (req, res) => {
//   res.send('Server is running...');
// });

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
