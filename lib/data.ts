export const courses = [
    {
        id: "1", // Strings are often better for URLs
        title: "AI & Machine Learning Mastery",
        instructor: "Dr. Andrew Ng",
        rating: 5.0,
        students: "25k",
        duration: "60h 00m",
        price: "₹10,999",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
        tags: ["AI", "Machine Learning"],
        category: "AI",
        description: "Master the fundamentals of AI and Machine Learning. Learn to build neural networks, implement deep learning algorithms, and solve real-world problems. This comprehensive course covers Python, TensorFlow, and PyTorch.",
        curriculum: [
            "Introduction to AI",
            "Supervised Learning",
            "Neural Networks & Deep Learning",
            "Convolutional Neural Networks",
            "Natural Language Processing"
        ]
    },
    {
        id: "2",
        title: "Digital Marketing Specialist",
        instructor: "Gary Vaynerchuk",
        rating: 4.8,
        students: "18k",
        duration: "30h 20m",
        price: "₹6,999",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600",
        tags: ["Marketing", "SEO"],
        category: "Marketing",
        description: "Become a digital marketing expert. Learn SEO, Social Media Marketing, Content Strategy, and Email Marketing. Get hands-on experience with tools like Google Analytics, SEMrush, and more.",
        curriculum: [
            "Digital Marketing Landscape",
            "Content Marketing Strategy",
            "SEO & SEM",
            "Social Media Marketing",
            "Email Marketing Excellence"
        ]
    },
    {
        id: "3",
        title: "Full Stack Web Development (MERN)",
        instructor: "Sarah Johnson",
        rating: 4.9,
        students: "12.5k",
        duration: "40h 30m",
        price: "₹6,999",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        tags: ["Web Dev", "MERN Stack"],
        category: "Development",
        description: "Build full-stack web applications with MongoDB, Express, React, and Node.js. This bootcamp takes you from zero to expert, covering frontend, backend, database design, and deployment.",
        curriculum: [
            "HTML5, CSS3, & JavaScript",
            "React.js Fundamentals",
            "Node.js & Express",
            "MongoDB & Mongoose",
            "Deployment & DevOps"
        ]
    },
    {
        id: "4",
        title: "Cybersecurity: Zero to Hero",
        instructor: "Alex Rider",
        rating: 4.9,
        students: "5.6k",
        duration: "25h 45m",
        price: "₹8,999",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
        tags: ["Security", "Ethical Hacking"],
        category: "Security",
        description: "Learn ethical hacking, penetration testing, and network security. Understand how to secure systems and networks against cyber attacks.",
        curriculum: [
            "Networking Basics",
            "Ethical Hacking Methodology",
            "Web App Security",
            "Network Security",
            "Cryptography"
        ]
    },
    {
        id: "5",
        title: "Data Science with Python",
        instructor: "Michael Chen",
        rating: 4.8,
        students: "8.2k",
        duration: "35h 15m",
        price: "₹7,999",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        tags: ["Data Science", "Python"],
        category: "Data",
        description: "Data is the new oil. Learn to analyze, visualize, and model data using Python. Master libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.",
        curriculum: [
            "Python for Data Science",
            "Data Analysis with Pandas",
            "Data Visualization",
            "Statistical Analysis",
            "Machine Learning with Scikit-Learn"
        ]
    },
    {
        id: "6",
        title: "AWS Certified Solutions Architect",
        instructor: "Cloud Academy",
        rating: 4.7,
        students: "15k",
        duration: "50h 00m",
        price: "₹9,999",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        tags: ["Cloud", "AWS"],
        category: "Cloud",
        description: "Prepare for the AWS Solutions Architect Associate exam. Learn to design scalable, reliable, and cost-effective systems on Amazon Web Services.",
        curriculum: [
            "AWS Fundamentals",
            "EC2 & S3",
            "VPC & Networking",
            "IAM & Security",
            "Serverless Architecture"
        ]
    },
    {
        id: "7",
        title: "DevOps & Kubernetes Masterclass",
        instructor: "John Doe",
        rating: 4.8,
        students: "4.3k",
        duration: "22h 30m",
        price: "₹7,499",
        image: "https://images.unsplash.com/photo-1667372393119-3866372c9646?auto=format&fit=crop&q=80&w=600",
        tags: ["DevOps", "Docker"],
        category: "DevOps",
        description: "Master DevOps practices and tools. Learn Docker, Kubernetes, CI/CD pipelines (Jenkins/GitHub Actions), and Infrastructure as Code (Terraform).",
        curriculum: [
            "DevOps Concepts",
            "Docker & Containerization",
            "Kubernetes Orchestration",
            "CI/CD Pipelines",
            "Monitoring & Logging"
        ]
    },
    {
        id: "8",
        title: "Mobile App Development with Flutter",
        instructor: "Angela Yu",
        rating: 4.9,
        students: "9.1k",
        duration: "28h 15m",
        price: "₹6,499",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
        tags: ["Mobile", "Flutter"],
        category: "Mobile",
        description: "Build beautiful, native mobile apps for iOS and Android using a single codebase. Learn Dart programming and the Flutter framework.",
        curriculum: [
            "Dart Programming",
            "Flutter Widgets",
            "State Management",
            "Networking & APIs",
            "Publishing to App Stores"
        ]
    },
    {
        id: "9",
        title: "Blockchain & Cryptocurrency Dev",
        instructor: "Satoshi N.",
        rating: 4.6,
        students: "3.2k",
        duration: "18h 45m",
        price: "₹12,999",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
        tags: ["Blockchain", "Solidity"],
        category: "Blockchain",
        description: "Dive into the world of Web3. Learn how blockchains work, write smart contracts with Solidity, and build DApps on Ethereum.",
        curriculum: [
            "Blockchain Fundamentals",
            "Smart Contracts with Solidity",
            "Web3.js & Ethers.js",
            "DApp Development",
            "DeFi & NFTs"
        ]
    },
    {
        id: "10",
        title: "CCC - Course on Computer Concepts",
        instructor: "NIELIT Certified",
        rating: 4.8,
        students: "50k+",
        duration: "80h",
        price: "₹590",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=600",
        tags: ["Government", "Basic"],
        category: "Certification",
        description: "Official NIELIT CCC course. Designed to impart basic application use of computers to the common man. Essential for many government jobs.",
        curriculum: [
            "Introduction to Computer",
            "GUI Based Operating System",
            "Word Processing (LibreOffice Writer)",
            "Spreadsheet (LibreOffice Calc)",
            "Communication & Internet"
        ]
    },
    {
        id: "11",
        title: "DCA - Diploma in Computer Applications",
        instructor: "Institute Faculty",
        rating: 4.7,
        students: "10k+",
        duration: "6 Months",
        price: "₹4,999",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
        tags: ["Diploma", "Office"],
        category: "Diploma",
        description: "A comprehensive diploma designed for beginners to expert. Covers fundamental computer applications, programming basics, and office tools.",
        curriculum: [
            "Computer Fundamentals",
            "MS Office / LibreOffice",
            "Internet & E-mail",
            "Programming in C",
            "Database Technologies"
        ]
    },
    {
        id: "12",
        title: "NIELIT 'O' Level (IT Foundation)",
        instructor: "Senior Faculty",
        rating: 4.6,
        students: "15k+",
        duration: "1 Year",
        price: "₹15,000",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
        tags: ["Government", "Foundation"],
        category: "Certification",
        description: "NIELIT 'O' Level is a Foundation Level Course in Information Technology. Recognized by the Government of India for government jobs.",
        curriculum: [
            "IT Tools & Network Basics",
            "Web Designing & Publishing",
            "Python Programming",
            "IoT and its Applications",
            "Project Work"
        ]
    },
    {
        id: "13",
        title: "NIELIT 'A' Level (Advanced Diploma)",
        instructor: "Expert Faculty",
        rating: 4.8,
        students: "5k+",
        duration: "1.5 Years",
        price: "₹25,000",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600",
        tags: ["Government", "Advanced"],
        category: "Certification",
        description: "Advance Diploma level course equivalent to PGDCA. Covers advanced topics like Data Structures, OS, Database, and System Analysis.",
        curriculum: [
            "Data Structure through C++",
            "Operating Systems",
            "Database Technologies",
            "System Analysis and Design",
            "Java / .NET Programming"
        ]
    },
    {
        id: "14",
        title: "NIELIT 'B' Level (MCA Equivalent)",
        instructor: "Expert Faculty",
        rating: 4.9,
        students: "2k+",
        duration: "3 Years",
        price: "₹45,000",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
        tags: ["Government", "Master"],
        category: "Degree",
        description: "Professional level course equivalent to MCA. Focuses on software engineering, network management, and advanced computing.",
        curriculum: [
            "Software Engineering",
            "Computer Graphics",
            "Artificial Intelligence",
            "Cloud Computing",
            "Major Project"
        ]
    },
    {
        id: "15",
        title: "DCS - Diploma in Computer Science",
        instructor: "Tech Leads",
        rating: 4.7,
        students: "8k+",
        duration: "1 Year",
        price: "₹12,999",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
        tags: ["Diploma", "CS"],
        category: "Diploma",
        description: "Diploma in Computer Science focuses on core CS concepts, programming logic, and software development methodologies.",
        curriculum: [
            "C++ & Data Structures",
            "Java Programming",
            "Web Technologies",
            "Computer Networks",
            "Software Testing"
        ]
    },
];

export const getCourseById = (id: string) => {
    return courses.find(course => course.id === id);
};
