const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting - 10 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
});

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || ['http://localhost:5173', 'https://your-frontend-domain.vercel.app'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/api/contact', limiter);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  workEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phoneNumber: {
    type: String,
    trim: true,
    maxlength: 20
  },
  companyName: {
    type: String,
    trim: true,
    maxlength: 100
  },
  participants: {
    type: String,
    trim: true
  },
  activityType: [{
    type: String,
    enum: [
      'team-building',
      'wellness-programs', 
      'creative-workshops',
      'sports-tournaments',
      'entertainment-events',
      'offsite-retreats'
    ]
  }],
  message: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

// Email Configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Helper function to format activity types
const formatActivityTypes = (activities) => {
  if (!activities || activities.length === 0) return 'None selected';
  
  const activityMap = {
    'team-building': 'Team Building',
    'wellness-programs': 'Wellness Programs',
    'creative-workshops': 'Creative Workshops',
    'sports-tournaments': 'Sports Tournaments',
    'entertainment-events': 'Entertainment Events',
    'offsite-retreats': 'Offsite Retreats'
  };
  
  return activities.map(activity => activityMap[activity] || activity).join(', ');
};

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      fullName,
      workEmail,
      phoneNumber,
      companyName,
      participants,
      activityType,
      message
    } = req.body;

    // Basic validation
    if (!fullName || !workEmail) {
      return res.status(400).json({
        error: 'Full name and email are required'
      });
    }

    // Get client IP address (Vercel specific)
    const ipAddress = req.headers['x-forwarded-for'] || 
                     req.headers['x-real-ip'] || 
                     req.connection.remoteAddress || 
                     req.socket.remoteAddress ||
                     'unknown';

    // Create new contact document
    const contactData = new Contact({
      fullName,
      workEmail,
      phoneNumber: phoneNumber || '',
      companyName: companyName || '',
      participants: participants || '',
      activityType: activityType || [],
      message: message || '',
      ipAddress
    });

    // Save to database
    await contactData.save();

    // Prepare email content
    const emailSubject = `New Contact Form Submission - ${fullName}`;
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #000; color: #fff; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; color: #22c55e;">New Contact Form Submission</h2>
        </div>
        
        <div style="background-color: #fff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 150px;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${workEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${phoneNumber || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${companyName || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Participants:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${participants || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Activity Types:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${formatActivityTypes(activityType)}</td>
            </tr>
          </table>
          
          <h3 style="color: #333; margin-top: 30px;">Message</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #22c55e;">
            <p style="margin: 0; color: #555; line-height: 1.6;">${message || 'No message provided'}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${ipAddress}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This email was sent from your OneThrive contact form</p>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: 'info@onethrive.in', // Owner's email
      subject: emailSubject,
      html: emailBody,
      replyTo: workEmail
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Contact form submitted successfully:', {
      name: fullName,
      email: workEmail,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Don't expose internal errors to client
    res.status(500).json({
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Get all contacts (admin endpoint - you might want to add authentication)
app.get('/api/contacts', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v');

    const total = await Contact.countDocuments();

    res.status(200).json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Root endpoint for Vercel
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'OneThrive API is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)',
      contacts: '/api/contacts (GET)'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

// For Vercel deployment, export the app instead of listening
module.exports = app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}