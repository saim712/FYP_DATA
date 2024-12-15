const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/userSchema');
const Mentor = require('../models/mentorSchema'); // Adjust the path if necessary
const Job = require('../models/Jobschema');
const University=require('../models/Universityschema')
const router = express.Router();
const axios=require('axios');

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET || 'Key_12345678!'; // Store in .env

// Register Route
router.post(
    '/register',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ error: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            user = new User({
                name,
                email,
                password: hashedPassword,
            });

            await user.save();

            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(201).json({ token, message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
);

// Login Route
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token, message: 'Logged in successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
);




// Mentor Registration
router.post('/mentor/register', async (req, res) => {
    const { name, email, password, expertise, qualifications, availability } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new mentor
        const newMentor = new Mentor({
            name,
            email,
            password: hashedPassword,
            expertise,
            qualifications,
            availability
        });

        await newMentor.save();
        res.status(201).json({ message: 'Mentor registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering mentor', error });
    }
});


// router.post('/mentor/register', upload.single('profilePicture'), async (req, res) => {
//     try {
//         const { name, email, password, expertise, qualifications, availability } = req.body;

//         const profilePicture = req.file 
//             ? req.file.path 
//             : 'public/images/prof.jpg'; // Default image path

//         const newMentor = new Mentor({
//             name,
//             email,
//             password,
//             expertise: expertise.split(','), // Assuming expertise is comma-separated
//             qualifications,
//             availability: availability.split(','),
//             profilePicture
//         });

//         await newMentor.save();
//         res.status(201).json({ message: 'Mentor registered successfully' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });


// Mentor Login
router.post('/mentor/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const mentor = await Mentor.findOne({ email });

        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, mentor.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Token generation (if using JWT can be added here)
        res.status(200).json({ message: 'Mentor logged in successfully!', mentor });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in mentor', error });
    }
});




// getting the mentor data
// Get Mentor Profile
router.get('/mentor/profile', async (req, res) => {
    try {
        // Assuming the mentor is already authenticated, using req.user.id from JWT
        const mentorId = req.user.id;

        // Fetch mentor data from the database
        const mentor = await Mentor.findById(mentorId);

        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        res.status(200).json(mentor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching mentor data', error });
    }
});



// Mentor Profile Update Route
router.post('/mentor/update', async (req, res) => {
    const { name, email, expertise, qualifications, availability, workExperience, socialMedia } = req.body;

    try {
        // Find the mentor by email (you can also use ID or any other field based on your requirements)
        const mentor = await Mentor.findOne({ email });

        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        // Update mentor details
        mentor.name = name || mentor.name;
        mentor.expertise = expertise || mentor.expertise;
        mentor.qualifications = qualifications || mentor.qualifications;
        mentor.availability = availability || mentor.availability;
        mentor.workExperience = workExperience || mentor.workExperience;
        mentor.socialMedia = socialMedia || mentor.socialMedia;

        // Save the updated mentor details
        await mentor.save();

        res.status(200).json({ message: 'Profile updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating profile', error });
    }
});



// Route to fetch the jobs data 
router.get('/fetjobs', async (req, res) => {
    try {
      const jobs = await Job.find(); // This fetches all jobs from MongoDB
      res.json(jobs);
      console.log(jobs); // Debugging
    } catch (err) {
      console.error('Error:', err); // Detailed error logging
      res.status(500).send('Server Error');
    }
  });
  

  // Endpoint to get career recommendations
router.post('/career-recommendation', async (req, res) => {
    try {
        const userDetails = req.body;
        console.log(userDetails)

        // Call Python microservice
        const response = await axios.post('http://localhost:5001/predict', userDetails);
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to get career recommendation' });
    }
});


//Route to fetch the all uniersity data 
router.get('/universities', async (req, res) => {
    try {
      const universities = await University.find();
      res.status(200).json(universities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching universities data' });
    }
  });












// const University = require('../models/University'); // Path to the University model
const topBusinessUniversities =[
    {
      "name": "National University of Sciences and Technology (NUST)",
      "location": "Islamabad",
      "website": "https://www.nust.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/98/NUST_Logo.png",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security, MS Cyber Security"
        },
        {
          "courseName": "Network Security",
          "description": "MS Network Security"
        },
        {
          "courseName": "Information Assurance",
          "description": "MS Information Assurance"
        }
      ]
    },
    {
      "name": "Lahore University of Management Sciences (LUMS)",
      "location": "Lahore",
      "website": "https://www.lums.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/LUMS_Logo.png",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "MS Cyber Security"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    },
    {
      "name": "COMSATS University Islamabad",
      "location": "Islamabad",
      "website": "https://www.comsats.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/33/COMSATS_University_Logo.png",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security, MS Cyber Security"
        },
        {
          "courseName": "Digital Forensics",
          "description": "MS Digital Forensics"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    },
    {
      "name": "Institute of Business Administration (IBA)",
      "location": "Karachi",
      "website": "https://www.iba.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/43/IBA_Logo.png",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security, MS Cyber Security"
        },
        {
          "courseName": "Information Assurance",
          "description": "MS Information Assurance"
        }
      ]
    },
    {
      "name": "University of Karachi",
      "location": "Karachi",
      "website": "http://www.uok.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a6/University_of_Karachi_logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security, MSc Cyber Security"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    },
    {
      "name": "FAST-NUCES",
      "location": "Islamabad",
      "website": "https://www.nu.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/FAST_National_University_Logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security, MS Cyber Security"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    },
    {
      "name": "University of Engineering and Technology (UET) Lahore",
      "location": "Lahore",
      "website": "https://www.uet.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a0/UET_Lahore_Logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security"
        },
        {
          "courseName": "Network Security",
          "description": "MS Network Security"
        }
      ]
    },
    {
      "name": "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)",
      "location": "Topi",
      "website": "https://www.giki.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/GIKI_Logo.png",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    },
    {
      "name": "Beaconhouse National University (BNU)",
      "location": "Lahore",
      "website": "https://www.bnu.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Beaconhouse_National_University_logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security"
        },
        {
          "courseName": "Digital Forensics",
          "description": "MS Digital Forensics"
        }
      ]
    },
    {
      "name": "The Aga Khan University",
      "location": "Karachi",
      "website": "https://www.aku.edu",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/55/Aga_Khan_University_logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    },
    {
      "name": "Bahria University",
      "location": "Islamabad",
      "website": "https://www.bahria.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/75/Bahria_University_logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security, MS Cyber Security"
        },
        {
          "courseName": "Digital Forensics",
          "description": "MS Digital Forensics"
        }
      ]
    },
    {
      "name": "International Islamic University Islamabad (IIUI)",
      "location": "Islamabad",
      "website": "https://www.iiu.edu.pk",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/International_Islamic_University_logo.svg",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security"
        },
        {
          "courseName": "Network Security",
          "description": "MS Network Security"
        }
      ]
    },
    {
      "name": "University of Science and Technology (UST)",
      "location": "Rawalpindi",
      "website": "https://www.ust.edu.pk",
      "imageUrl": "https://via.placeholder.com/150",
      "coursesOffered": [
        {
          "courseName": "Cyber Security",
          "description": "BS Cyber Security"
        },
        {
          "courseName": "Information Security",
          "description": "MS Information Security"
        }
      ]
    }
  ]
  

// Route to post the array of universities to MongoDB
router.post('/add-universities', async (req, res) => {
    try {
      const universitiesToAdd = topBusinessUniversities; // Replace this with your actual data array
      const savedUniversities = [];
  
      for (const university of universitiesToAdd) {
        // Check if the university already exists in the database
        const existingUniversity = await University.findOne({ name: university.name });
        if (existingUniversity) {
          console.log(`Skipping duplicate university: ${university.name}`);
          continue; // Skip if the university already exists
        }
  
        // Save the university if it's not a duplicate
        const savedUniversity = await University.create(university);
        savedUniversities.push(savedUniversity);
      }
  
      res.status(201).json({
        message: 'Universities added successfully!',
        universities: savedUniversities,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'An error occurred while adding universities.',
        error: error.message,
      });
    }
  });
  



















module.exports = router;
