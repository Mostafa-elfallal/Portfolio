/**
 * data.js — Single source of truth for all portfolio content.
 * Edit this file to update any section of the portfolio.
 */

const PORTFOLIO_DATA = {

  // =============================================
  // HERO TYPED STRINGS
  // =============================================
  typedStrings: [
    'Engineer',
    'SDET',
    'QA Specialist',
    'Framework Builder',
  ],

  // =============================================
  // HERO CODE SNIPPET (displayed in code window)
  // =============================================
  heroCode: `<span style="color:#63e8db">@Test</span>
<span style="color:#a78bfa">public void</span> <span style="color:#e2e8f0">verifyCheckoutFlow</span>() {
  <span style="color:#63e8db">LoginPage</span> login = <span style="color:#a78bfa">new</span> <span style="color:#63e8db">LoginPage</span>(driver);
  <span style="color:#63e8db">CartPage</span>  cart  = login
    .navigateTo()
    .enterCredentials(<span style="color:#f0b429">"user"</span>, <span style="color:#f0b429">"pass"</span>)
    .login()
    .addItemToCart(<span style="color:#f0b429">"Samsung"</span>)
    .openCart();

  <span style="color:#8899aa">// Assert cart is not empty</span>
  <span style="color:#63e8db">Assert</span>.assertFalse(
    cart.getItems().isEmpty(),
    <span style="color:#f0b429">"Cart should contain items"</span>
  );

  <span style="color:#63e8db">OrderConfirmation</span> order = cart.placeOrder();
  <span style="color:#63e8db">Assert</span>.assertTrue(order.isSuccess());
}`,

  // =============================================
  // SKILLS  — add / remove / reorder freely
  // =============================================
  skills: [
    {
      category: 'Test Automation',
      subtitle: 'Frameworks & tools for automated testing',
      color: 'primary',
      items: [
        'Selenium WebDriver', 'TestNG', 'JUnit', 'Page Object Model (POM)',
        'Fluent Interface', 'Data-Driven Testing', 'Parallel Execution',
        'Maven', 'Allure Reports',
      ],
    },
    {
      category: 'API & Backend Testing',
      subtitle: 'REST, SOAP and contract validation',
      color: 'violet',
      items: [
        'Postman', 'Newman', 'RestAssured (Java)',
        'JSON / XML Schema Validation', 'REST / SOAP',
        'Contract Testing', 'OCPP Protocol Testing',
      ],
    },
    {
      category: 'Programming Languages',
      subtitle: 'Languages used in test development',
      color: 'primary',
      items: [
        'Java (primary)', 'Python', 'C / C++',
        'JavaScript (Postman Scripts)', 'Bash',
      ],
    },
    {
      category: 'QA Concepts & Methodologies',
      subtitle: 'Theoretical and applied QA knowledge',
      color: 'amber',
      items: [
        'ISTQB CTFL Fundamentals', 'Test Case Design',
        'Equivalence Partitioning', 'Boundary Value Analysis',
        'Defect Lifecycle Management', 'Traceability Matrix',
        'Regression & Smoke Testing', 'V-Model SDLC',
        'Root Cause Analysis',
      ],
    },
    {
      category: 'CI/CD & DevOps Tools',
      subtitle: 'Pipelines, tracking and collaboration tools',
      color: 'violet',
      items: [
        'Git', 'GitHub', 'Jenkins (basics)',
        'IntelliJ IDEA', 'VS Code', 'Jira', 'TestRail',
      ],
    },
    {
      category: 'Systems & Additional',
      subtitle: 'Cross-domain skills from embedded background',
      color: 'rose',
      items: [
        'SQL (DB Validation)', 'Linux CLI', 'UML',
        'Agile / Scrum', 'PCB Design', 'Protocol Analyzers',
        'HIL Testing', 'Python Log Analysis',
      ],
    },
  ],

  // =============================================
  // EXPERIENCE — ordered newest first
  // =============================================
  experience: [
    {
      title: 'Software Engineer',
      company: 'Coretech Innovations',
      date: 'Jan 2026 — Present',
      location: 'Egypt',
      focus: 'QA',
      focusLabel: '',
      bullets: [
        'Engineered robust Linux applications in modern C++ for production-grade AC EV chargers, significantly improving system stability and minimizing downtime during active charging cycles.',
        'Integrated OCPP (1.6 and 2.0.1) to establish reliable charger-to-backend interoperability, successfully managing real-time state and high-frequency telemetry.',
        'Architected secure inter-process communication (IPC) workflows using Qt and D-Bus to minimize data synchronization latency across core system modules.',
        'Resolved critical defects across protocol handling and application logic by scripting automated log analysis tools to accelerate the debugging process.',
      ],
    },
    {
      title: 'IoT Engineer',
      company: 'Origin Labs',
      date: 'Jun 2025 — Jan 2026',
      location: 'Egypt',
      focus: 'QA',
      focusLabel: '',
      bullets: [
        'Designed and prototyped multi-layer PCBs for educational IoT boards, ensuring functional signal integrity and manufacturability.',
        'Optimized C/C++ embedded firmware for multi-sensor IoT prototypes, improving data acquisition speed and reducing memory footprint.',
        'Developed Python-based automation scripts for hardware-in-the-loop (HIL) testing and data manipulation.',
        'Served as an instructor at ITIDA — EME Innovation Labs (Giza), delivering hands-on embedded systems and IoT training to cohorts of 20+ students.',
      ],
    },
    {
      title: 'Reserved Officer',
      company: 'Egyptian Armed Forces',
      date: 'May 2023 — May 2025',
      location: 'Egypt',
      focus: 'Leadership',
      focusLabel: '',
      bullets: [
        'Completed mandatory military service, demonstrating leadership, discipline, and effective team coordination under pressure.',
      ],
    },
    {
      title: 'Embedded Hardware Engineer',
      company: 'HNE Futures',
      date: 'Aug 2022 — May 2023',
      location: 'Egypt',
      focus: 'Embedded',
      focusLabel: '',
      bullets: [
        'Validated hardware functionality and signal integrity for EVSE systems, actively participating in PCB design and hardware-software co-design.',
        'Engineered EVSE firmware compliant with IEC 61851 and MQTT protocols; deeply reviewed and debugged C-based state machines and register configurations for SPI/I2C communication.',
        'Developed and implemented a secure over-the-air (OTA) bootloader, reducing field maintenance visits by 40%.',
      ],
    },
  ],

  // =============================================
  // PROJECTS — add new projects here
  // =============================================
  projects: [
    {
      id: 'testblaze',
      title: 'TestBlaze: Automated UI & API Framework',
      description:
        'End-to-end automation framework for demoblaze.com built as part of the DEPI Software Testing Track. Implements Page Object Model, Fluent Interface patterns, and full CI-ready pipeline.',
      highlights: [
        'Selenium WebDriver + Java — POM + Fluent Interface patterns',
        'TestNG test suites: Smoke, Regression, E2E with Parallel Execution',
        'RestAssured API validation for backend endpoint verification',
        'Allure Reports for rich visual defect analysis',
        'Authored SRS, Manual Test Cases, and Bug Reports for 100% traceability',
      ],
      tags: ['Java', 'Selenium', 'TestNG', 'RestAssured', 'Maven', 'Allure', 'POM'],
      tagColor: 'primary',
      category: 'automation',
      featured: true,
      github: 'https://github.com/SpaceTestTeam/TestBlaze-Automated-UI-Testing-for-Demoblaze',
      date: 'Dec 2025',
    },
    {
      id: 'ocpp-api',
      title: 'OCPP API Test Suite',
      description:
        'Postman collection validating OCPP 1.6 & 2.0.1 protocol endpoints for EV charger backend. Includes state machine transition checks, negative tests and regression assertions.',
      highlights: [
        'Protocol-level API testing for OCPP 1.6 and 2.0.1 compliance',
        'Scripted assertions validating state machine transitions (A → F)',
        'Newman CLI integration for CI pipeline execution',
        'Contract testing ensuring schema compliance across service layers',
      ],
      tags: ['Postman', 'Newman', 'OCPP', 'API Testing', 'Python'],
      tagColor: 'violet',
      category: 'api',
      featured: false,
      github: '',
      date: '2026',
    },
    {
      id: 'hil-tester',
      title: 'HIL Tester — Firmware QA Pipeline',
      description:
        'Hardware-in-the-Loop testing framework for ESP32-based IoT firmware. Python bridge to DWIN screen interface for automated regression checks on embedded firmware.',
      highlights: [
        'Python-based HIL test harness for ESP32 firmware validation',
        'Automated regression scripts covering charging state machine transitions',
        'Serial protocol bridge (DWIN) for real-time sensor data validation',
        'Reduced manual regression effort by automating 60%+ of repetitive checks',
      ],
      tags: ['Python', 'ESP32', 'HIL Testing', 'Embedded QA', 'Automation'],
      tagColor: 'amber',
      category: 'embedded-qa',
      featured: false,
      github: '',
      date: '2025',
    },
    {
      id: 'log-analyzer',
      title: 'Log Analysis Tool',
      description:
        'Python CLI tool for automated parsing and triage of system event logs from Linux-based EV charger applications. Reduced mean-time-to-triage by 40%.',
      highlights: [
        'Regex-based pattern matching for protocol defects in large log files',
        'Structured defect reporting with timestamp correlation',
        'Configurable alert thresholds for specific error codes and state transitions',
        '40% reduction in mean-time-to-triage in production EV charger testing',
      ],
      tags: ['Python', 'Log Analysis', 'Bash', 'Linux', 'Defect Detection'],
      tagColor: 'rose',
      category: 'automation',
      featured: false,
      github: '',
      date: '2026',
    },
    {
      id: 'adcs-validation',
      title: 'ADCS Satellite System',
      description:
        'Graduation project in collaboration with the Egyptian Space Agency. Served as the core embedded developer building STM32F4-based control software for satellite orientation.',
      highlights: [
        'Developed sensor fusion and control algorithms to ensure precise three-axis stabilization',
        'Integrated MATLAB and LabVIEW for comprehensive algorithm simulation and system validation',
        'Built the STM32F4-based control software for satellite orientation',
      ],
      tags: ['C++', 'STM32', 'MATLAB', 'LabVIEW', 'Control Systems'],
      tagColor: 'violet',
      category: 'embedded-qa',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/Graduation',
      date: '2022',
    },
    {
      id: 'audio-player',
      title: 'Audio Player on STM32',
      description:
        'Implemented an STM32F4-based audio player with MP3/WAV playback and a responsive LVGL interface.',
      highlights: [
        'Integrated USB MSC and FatFs for media browsing',
        'VS1053 codec control over SPI for audio decoding',
        'Developed a modular software architecture separating hardware interfaces, UI management, and playback logic',
      ],
      tags: ['C++', 'STM32', 'LVGL', 'FatFs', 'SPI/I2S'],
      tagColor: 'amber',
      category: 'embedded-qa',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/AudioDev',
      date: '2023',
    },
    {
      id: 'squad-x',
      title: 'Squad X — ROV Robotics Team',
      description:
        'Co-founded and led the Squad X Robotics Team. Led development of autonomous underwater robots and wrote C++ control software for the MATE ROV Competition.',
      highlights: [
        'Led development of autonomous underwater robots and wrote C++ control software',
        'Conducted a robotics course for newcomers on robot design, programming, and sensor integration',
      ],
      tags: ['C++', 'Robotics', 'Team Leadership', 'Mentoring'],
      tagColor: 'primary',
      category: 'other',
      featured: false,
      github: '',
      date: '2020–2022',
    },
  ],

  // Project filter categories
  projectCategories: [
    { id: 'all',          label: 'All Projects' },
    { id: 'automation',   label: 'Test Automation' },
    { id: 'api',          label: 'API Testing' },
    { id: 'embedded-qa',  label: 'Embedded QA' },
    { id: 'other',        label: 'Other' },
  ],

  // =============================================
  // CERTIFICATIONS & COURSES
  // =============================================
  certifications: [
    {
      title: 'Digital Egypt Pioneers Initiative (DEPI) — Software Testing Track',
      org: 'MCIT Egypt',
      date: 'Jun – Dec 2025',
      status: 'completed',
      description:
        'Comprehensive 6-month program covering manual testing, Selenium + Java automation, API testing, ISTQB-aligned test design, and software quality assurance best practices.',
    },
    {
      title: 'ISTQB Certified Tester Foundation Level (CTFL)',
      org: 'ISTQB',
      date: 'In Progress',
      status: 'in-progress',
      description:
        'Actively preparing for the certification to formalize knowledge in standardized testing processes, test design techniques, and defect management.',
    },
    {
      title: 'Test Automation University (TAU)',
      org: 'Applitools',
      date: 'Ongoing',
      status: 'in-progress',
      description:
        'Pursuing learning paths in Web UI Automation and API Testing to stay current with industry-leading automation tools and best practices.',
    },
    {
      title: 'Java-Based Test Automation',
      org: 'Self-Directed / DEPI',
      date: '2025',
      status: 'completed',
      description:
        'Selenium WebDriver, TestNG framework, Page Object Model design pattern, Maven build management, and Allure reporting.',
    },
    {
      title: 'Advanced Embedded Linux Development Specialization',
      org: 'Coursera / UC Boulder',
      date: '2024',
      status: 'completed',
      description:
        'Covered build systems, Yocto integration, and device driver development. Strengthens systems-level understanding applicable to backend and firmware integration testing.',
    },
    {
      title: 'Embedded Systems Diploma',
      org: 'Learn-In-Depth',
      date: '2022',
      status: 'completed',
      description:
        'Low-level systems knowledge including Embedded C, Cortex-M architectures, and memory-mapped I/O — enabling deep comprehension of embedded application test targets.',
    },
  ],
};


