import React from "react";
import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ruth Margareth",
  lastName: "Guinto",
  name: "Ruth Margareth Guinto",
  role: "Data Analyst & Mathematics Student",
  avatar: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1778041993/2x2_ID_PIC_pmged6.jpg",
  email: "guinto36ruth@gmail.com",
  location: "Asia/Manila",
  languages: ["English", "Tagalog"],
};

const newsletter: Newsletter = {
  display: true,
  title: "Project Log",
  description: "Follow my journey and transition into Data Analysis.",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rm-cg",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ruth-guinto",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Applying mathematical thinking to data and problem-solving",
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        {/* CHANGED TO HIGHLIGHT YOUR CNN PROJECT! */}
        <strong className="ml-4">CNNs & Data Modeling</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Current Focus
        </Text>
      </Row>
    ),
    // ROUTES DIRECTLY TO YOUR NEW CNN MDX FILE
    href: "/work/future-neural-network-project",
  },
  subline: (
    <>
      I'm Ruth, a BS Mathematics student minoring in Computer Science at <Text as="span" size="xl" weight="strong">PLM</Text>. I am passionate about data analytics, algorithms, and using human-AI collaboration to create value for communities.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: "Ruth Margareth is a Mathematics student at PLM pursuing a career in Data Analysis. She specializes in data profiling and cleaning, leveraging logical rigor to transform complex datasets into structured, reliable information. Her core academic and career interests include Social Impact Analytics, Data Visualization, Quantitative Research, and Mathematical Modeling.",
  },
  work: {
    display: true,
    title: "Organizational Experience",
    experiences: [
      {
        company: "Google Developer Groups on Campus (GDGoC) - PLM",
        timeframe: "2025 - Present",
        role: "Lead Secretariat, Operations Department",
        achievements: [
          "Supervises a secretarial team in executing meticulous administrative operations, including the development of automated trackers, event scripts, end-to-end documentation (CSWs), and post-activity performance evaluations.",
          "Led the Secretariat team in managing documentation, correspondence, and record systems that support the department’s operations.",
          "Represented GDGoC at external and cross-department initiatives, including Echelon PH, engaging in tech and innovation discussions.",
        ],
        images: [],
      },
      {
        company: "PLM Mathematical Society",
        timeframe: "2024 - 2025",
        role: "Deputy Secretary for Auditing & Strategic Partnerships, and Associate for Program Coordination",
        achievements: [
          "Structured and categorized 10+ financial and documentation records using Excel, including MoMs, NoMs, certificates, and budget sheets; optimized document traceability and accuracy for inventory and audit tracking.",
          "Facilitated a fundraising campaign that sold 2,874 tickets and generated ₱28,740 funds; assisted in post-event partner follow-ups and ensured fulfillment of sponsorship packages.",
          "Led program flow and segment pacing for over four departmental events with 300+ attendees, including a research colloquium, career forum, programming webinar, and department-led seminars.",
          "Coordinated real-time transitions and audience movement across six academic and outreach initiatives, including a university-wide mathematics competition and an instructional event for early learners."
        ],
        images: [],
      },
      {
        company: "College of Science Youth Force",
        timeframe: "2023 - 2024",
        role: "Assistant Secretary, Secretariat Committee",
        achievements: [
          "Supported documentation workflows and internal communications across department-led events and meetings using Google Suite tools.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Pamantasan ng Lungsod ng Maynila",
        description: "Bachelor of Science in Mathematics, Minor in Computer Science (2023 - Present).",
      },
      {
        name: "Paranaque National High School - Main",
        description: "Science, Technology, Engineering, and Mathematics (STEM) Program. Graduated with High Honors (2017 - 2023).",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical & Soft Skills", 
    skills: [
      {
        title: "Data Analysis & Visualization",
        description: "Applying descriptive statistics, correlation, hypothesis testing, and trend interpretation to extract actionable insights.",
        tags: [
          { name: "Statistics", icon: "chart" },
          { name: "Data Visualization", icon: "eye" },
        ],
        images: [],
      },
      {
        title: "Programming & Database Tools",
        description: "Handling, querying, and structuring data using industry-standard tools and programming languages.",
        tags: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "database" },
          { name: "Excel", icon: "grid" },
        ],
        images: [],
      },
      {
        title: "Documentation & Workflow Efficiency",
        description: "Streamlining organizational workflows with project management, structuring platforms, and AI tools.",
        tags: [
          { name: "LaTeX", icon: "document" },
          { name: "Notion", icon: "book" },
          { name: "Trello", icon: "layout" },
        ],
        images: [],
      },
      {
        title: "Communication & Collaboration",
        description: "Adept at program coordination, multi-committee communication, and presenting complex data insights clearly in written and spoken formats.",
        tags: [
          { name: "Team Leadership", icon: "person" },
          { name: "Public Speaking", icon: "microphone" },
        ],
        images: [],
      },
      {
        title: "Research & Analytical Thinking",
        description: "Conducting quantitative research, data-driven evaluations, identifying patterns, and applying logical modeling to solve real-world problems.",
        tags: [
          { name: "Critical Thinking", icon: "magnify" },
          { name: "Strategic Planning", icon: "lightbulb" },
        ],
        images: [],
      }
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Involvement",
  title: "Organizational Involvement & Events",
  description: `A gallery of organizational events, hostings, and community outreach by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Data analysis and research projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Certificates",
  title: `Certificates & Recognitions – ${person.name}`,
  description: `A collection of professional certifications, organizational recognitions, and awards achieved by ${person.name}.`,
  images: [
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995035/Data_Annotation_dsszq7.jpg",
      alt: "Data Annotation for Aspiring BPO Professionals - UP Open University",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995038/Data_Analytics_and_Fundamentals_mxnx12.png",
      alt: "Data Analytics Fundamentals Certificate - DataSense Analytics",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995038/DATA_STUDY_JAM_vz2a1s.jpg",
      alt: "GDGoC Data Study Jam Certificate",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995041/Online_Information_Session_on_Data_Science_and_Analytics_ffsjfb.png",
      alt: "Data Science and Analytics Information Session - DICT",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995032/Cloud_And_Virtualization_And_Data_Management_znxe22.png",
      alt: "Cloud, Virtualization, and Data Management - DTI",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995026/Automation_krleei.jpg",
      alt: "Automate Your Life Webinar",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995041/RRD_CAMPUS_TO_CORPORATE_oxrb2w.jpg",
      alt: "Campus to Corporate Training - RR Donnelley",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995031/COR_OMEGA_PARTICIPANT_gahyui.jpg",
      alt: "Global Maximum Award Champion - OME:GA PLM MathSoc",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994969/COP_ECHELON_VOLUNTEER_mfyglr.jpg",
      alt: "Echelon Philippines Volunteer Certificate",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995006/COA_POWER_UP_WITH_PYTHON_AND_R_ORGANIZER_gssthk.png",
      alt: "Power Up with Python and R Organizer",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994985/COA_MATHIRA_MATHIBAY_ORGANIZER_ke44ue.png",
      alt: "Mathira Mathibay Organizer Certificate",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995014/COR_LITTLE_EXPERTS_GO_ON_ORGANIZER_rqex1j.png",
      alt: "Little Experts Go On! Organizer",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995002/COA_BUILDING_BLOCKS_ORGANIZER_mr4oxw.png",
      alt: "Building Blocks Fundraising Organizer",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994987/COA_CS_DAYS_2025_PARTICIPANT_o1f2av.png",
      alt: "CS Days 2025 - Lumos 22",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995048/COA_TIPON_2025_CAREER_TALK_PARTICIPANT_e1cymt.png",
      alt: "TIPON 2025 Career Talk Participant",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995022/COP_RSG_PARTICIPANT_njbgrv.jpg",
      alt: "Ready Set Grow Certificate - GDGoC",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995002/COP_GAWAD_SIPNAYAN_PARTICIPANT_tb5nmd.jpg",
      alt: "Gawad Sipnayan Participant",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995047/COP_GLIMPSE_CAREER_TALK_PARTICIPANT_nq5lg3.jpg",
      alt: "GLIMPSE Career Talk Participant",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994990/COA_CSGA_PARTICIPANT_aqtzfm.png",
      alt: "College of Science General Assembly",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777994989/COA_AID_YOUR_MATHMATE_ORGANIZER_2_fq8zdh.png",
      alt: "Aid Your Mathmate Organizer",
      orientation: "horizontal"
    },
    {
      src: "https://res.cloudinary.com/djq6yl8sw/image/upload/v1777995043/COP__COMATHRADERY_PARTICIPANT_hdezr4.jpg",
      alt: "CoMATHradery Participant",
      orientation: "horizontal"
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };